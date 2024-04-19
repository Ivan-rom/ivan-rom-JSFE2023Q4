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

  private messagesComponents: Message[];

  private messages: MessageType[];

  private currentMessage?: MessageType;

  private form: Component<HTMLFormElement>;

  private user: Component;

  private modal: Component;

  constructor(api: API) {
    super({ className: "chat-content content" });
    this.api = api;

    this.messages = [];
    this.messagesComponents = [];
    this.login = window.location.hash.substring(1);
    this.modal = this.createMessageModal();

    this.messagesComponent = this.createMessagesComponent();
    this.user = this.createUser();
    const userInfo = new Component({ className: "content-user_info" }, [
      this.user,
    ]);
    this.form = this.createMessageForm();

    api.subscribe(ServerTypes.USER_LOGIN, this.updateUser);
    api.subscribe(ServerTypes.MSG_DELETE, (e: MessageEvent) => {
      const data = JSON.parse(e.data) as ServerMessage<{
        message: { id: string; status: { isDeleted: boolean } };
      }>;

      if (data.payload.message.status.isDeleted) {
        const messageComponent = this.messagesComponents.find(
          (msg) => msg.id === data.payload.message.id,
        );
        console.log(messageComponent);
        const messageIndex = this.messages.findIndex(
          (msg) => msg.id === data.payload.message.id,
        );
        messageComponent?.component.remove();
        if (messageIndex !== -1) this.messages.slice(messageIndex, 1);
      }
    });

    this.updateUser();

    window.addEventListener("hashchange", () => {
      this.messages = [];
      this.login = window.location.hash.substring(1);
      this.updateUser();
      if (api.socket.readyState === 1) {
        this.getMessages();
      }
    });

    window.addEventListener("click", this.modal.remove.bind(this.modal));

    this.api.socket.addEventListener("open", this.getMessages.bind(this));
    if (api.socket.readyState === 1) this.getMessages();

    this.append([userInfo, this.messagesComponent, this.form]);
  }

  private updateCurrentMessage(message: MessageType) {
    this.currentMessage = message;
  }

  private createMessageModal(): Component {
    const deleteHandler = () => {
      this.api.deleteMessage(this.currentMessage!.id);
    };
    const modal = new Component({ className: "message-modal" });
    const changeButton = new Button("message-change", "Изменить");
    const deleteButton = new Button(
      "message-delete",
      "Удалить",
      deleteHandler.bind(this),
    );
    modal.append([changeButton, deleteButton]);
    return modal;
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
      const component = new Message(
        message,
        this.modal,
        this.updateCurrentMessage.bind(this),
      );
      this.messagesComponent.append([component]);
      this.messagesComponents.push(component);
    } else {
      this.messagesComponent.component.innerHTML = "";
      this.messagesComponents = this.messages.map((msg) => {
        const component = new Message(
          msg,
          this.modal,
          this.updateCurrentMessage.bind(this),
        );
        this.messagesComponent.append([component]);
        return component;
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
