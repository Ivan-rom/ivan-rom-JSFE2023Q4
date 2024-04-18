import API from "../../API/API";
import { MessageType, ServerMessage, ServerTypes } from "../../types";
import Button from "../Button/Button";
import Component from "../Component";
import Message from "../Message/Message";

export default class Chat extends Component {
  api: API;

  private login: string;

  private messagesComponent: Component;

  private messages: MessageType[];

  private form: Component<HTMLFormElement>;

  constructor(api: API) {
    super({ className: "chat-content content" });
    this.api = api;

    this.messagesComponent = this.createMessagesComponent();
    this.messages = [];
    this.form = this.createMessageForm();

    this.login = window.location.hash.substring(1);
    window.addEventListener("hashchange", () => {
      this.messages = [];
      this.login = window.location.hash.substring(1);
      if (api.socket.readyState === 1) {
        this.getMessages();
      }
    });
    this.api.socket.addEventListener("open", this.getMessages.bind(this));
    if (api.socket.readyState === 1) this.getMessages();

    this.append([this.messagesComponent, this.form]);
  }

  private getMessages() {
    if (this.login === "") return;

    this.api.socket.send(
      JSON.stringify({
        id: "get_messages",
        type: ServerTypes.MSG_FROM_USER,
        payload: {
          user: {
            login: this.login,
          },
        },
      }),
    );

    this.api.subscribe(ServerTypes.MSG_FROM_USER, (e: MessageEvent) => {
      const data = JSON.parse(e.data) as ServerMessage<{
        messages: MessageType[];
      }>;
      this.messages = data.payload.messages;
      this.updateMessagesContent();
    });
  }

  updateMessagesContent(message?: MessageType) {
    console.log(this.messages);
    if (message) {
      const component = new Message(message);
      this.messagesComponent.append([component]);
    } else {
      this.messagesComponent.component.innerHTML = "";
      this.messages.forEach((msg) => {
        const component = new Message(msg);
        this.messagesComponent.append([component]);
      });
    }
  }

  createMessageForm(): Component<HTMLFormElement> {
    const form = new Component<HTMLFormElement>({
      tag: "form",
      className: "chat-form",
    });
    const input = new Component<HTMLInputElement>({
      tag: "input",
      placeholder: "Введите сообщение",
    });
    const button = new Button("chat-button", "Отправить");

    const submitHandler = (e: SubmitEvent) => {
      e.preventDefault();
      if (input.component.value === "") return;
      this.api.socket.send(
        JSON.stringify({
          id: "send_message",
          type: ServerTypes.MSG_SEND,
          payload: {
            message: {
              to: this.login,
              text: input.component.value,
            },
          },
        }),
      );
    };

    this.api.socket.addEventListener("message", (e: MessageEvent) => {
      const data = JSON.parse(e.data) as ServerMessage<{
        message: MessageType;
      }>;
      if (data.type === ServerTypes.MSG_SEND)
        this.updateMessagesContent(data.payload.message);
    });
    form.component.onsubmit = submitHandler;
    form.append([input, button]);

    return form;
  }

  createMessagesComponent() {
    const messagesComponent = new Component({
      tag: "ul",
      className: "content messages",
    });
    return messagesComponent;
  }
}
