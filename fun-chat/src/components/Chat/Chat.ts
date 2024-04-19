import API from "../../API/API";
import { MessageType, ServerMessage, ServerTypes } from "../../types";
import Button from "../Button/Button";
import Component from "../Component";
import Message from "../Message/Message";

import "./chat.css";

export default class Chat extends Component {
  api: API;

  private login: string;

  private messagesComponent: Component;

  private messages: MessageType[];

  private form: Component<HTMLFormElement>;

  private user: Component;

  constructor(api: API) {
    super({ className: "chat-content content" });
    this.api = api;

    this.messages = [];
    this.login = window.location.hash.substring(1);

    this.messagesComponent = this.createMessagesComponent();
    this.user = this.createUser();
    const userInfo = new Component({ className: "content-user_info" }, [
      this.user,
    ]);
    this.form = this.createMessageForm();

    api.subscribe(ServerTypes.USER_LOGIN, this.updateUser);

    this.updateUser();

    window.addEventListener("hashchange", () => {
      this.messages = [];
      this.login = window.location.hash.substring(1);
      this.updateUser();
      if (api.socket.readyState === 1) {
        this.getMessages();
      }
    });

    this.api.socket.addEventListener("open", this.getMessages.bind(this));
    if (api.socket.readyState === 1) this.getMessages();

    this.append([userInfo, this.messagesComponent, this.form]);
  }

  private updateUser() {
    this.user.component.textContent = this.login;
  }

  private createUser(): Component {
    const component = new Component({ className: "content-user" });
    return component;
  }

  private getMessages() {
    if (this.login === "") return;

    this.api.getMessages(this.login);
    this.api.subscribe(ServerTypes.MSG_FROM_USER, (e: MessageEvent) => {
      const data = JSON.parse(e.data) as ServerMessage<{
        messages: MessageType[];
      }>;
      this.messages = data.payload.messages;
      this.updateMessagesContent();
    });
  }

  updateMessagesContent(message?: MessageType) {
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
    this.messagesComponent.component.scrollTop = 99999;
  }

  private createMessageForm(): Component<HTMLFormElement> {
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
      this.api.sendMessage({
        to: this.login,
        text: input.component.value,
      });

      input.component.value = "";
    };

    this.api.subscribe(ServerTypes.MSG_SEND, (e: MessageEvent) => {
      const data = JSON.parse(e.data) as ServerMessage<{
        message: MessageType;
      }>;

      if (
        data.payload.message.from === this.login ||
        data.payload.message.to === this.login
      )
        this.updateMessagesContent(data.payload.message);
    });

    form.component.onsubmit = submitHandler;
    form.append([input, button]);

    return form;
  }

  createMessagesComponent() {
    const messagesComponent = new Component({
      tag: "ul",
      className: "content-messages messages",
    });
    return messagesComponent;
  }
}
