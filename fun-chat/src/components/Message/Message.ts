import { MessageType, SavedUser } from "../../types";
import Component from "../Component";

import "./message.css";

export default class Message extends Component {
  private modalPosition: { left: number; top: number };

  id: string;

  private modal: Component;

  private messageData: MessageType;

  private user: SavedUser;

  private readStatusComponent: Component;

  private changedStatusComponent: Component;

  constructor(
    params: MessageType,
    modal: Component,
    updateModal: (message: MessageType) => void,
  ) {
    const user = JSON.parse(sessionStorage.getItem("chat-user")!) as SavedUser;
    const className = `message ${user.login === params.from ? "from" : ""}`;
    super({ tag: "li", className });
    this.user = user;
    this.id = params.id;
    this.modalPosition = { left: 0, top: 0 };
    this.modal = modal;
    this.messageData = params;
    this.readStatusComponent = new Component({
      className: "message-read-status",
      textContent: "Отправлено",
    });
    this.changedStatusComponent = new Component({
      className: "message-changed-status",
      textContent: "",
    });

    if (user.login === params.from)
      this.component.addEventListener("contextmenu", (e: MouseEvent) => {
        e.preventDefault();
        const parent = this.component.offsetParent as HTMLElement;
        const parentRect = parent.getBoundingClientRect();
        this.modalPosition.left =
          e.clientX - parentRect.left - (modal.component.offsetWidth || 150);
        this.modalPosition.top = e.clientY - parentRect.top + parent.scrollTop;
        updateModal(params);
        this.createModal();
      });
    this.append(this.createMessage());
  }

  createModal() {
    this.modal.component.style.left = `${this.modalPosition.left}px`;
    this.modal.component.style.top = `${this.modalPosition.top}px`;
    this.append([this.modal]);
  }

  updateReadStatus() {
    let status = "Отправлено";
    if (this.messageData.status.isReaded) status = "Прочитано";
    else if (this.messageData.status.isDelivered) status = "Доставлено";
    this.readStatusComponent.component.textContent = status;
  }

  updateChangedStatus() {
    let status = "";
    if (this.messageData.status.isEdited) status = "Изменено";
    this.changedStatusComponent.component.textContent = status;
  }

  createMessage() {
    const sender = new Component({
      className: "message-sender",
      textContent:
        this.messageData.from === this.user.login
          ? "Вы:"
          : `${this.messageData.from}:`,
    });
    const dateTime = new Date(this.messageData.datetime);
    const date = `${dateTime.getDate()}.${dateTime.getMonth()}.${dateTime.getFullYear()}`;
    const time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    const dateComponent = new Component({
      className: "message-date",
      textContent: `${date} ${time}`,
    });
    const message = new Component({
      className: "message-text",
      textContent: this.messageData.text,
    });
    const statuses = new Component(
      {
        className: "message-statuses",
      },
      [this.changedStatusComponent],
    );
    if (this.messageData.from === this.user.login)
      statuses.append([this.readStatusComponent]);
    return [sender, dateComponent, message, statuses];
  }
}
