import { MessageType, SavedUser } from "../../types";
import Component from "../Component";

import "./message.css";

export default class Message extends Component {
  private modalPosition: { left: number; top: number };

  id: string;

  private modal: Component;

  constructor(
    params: MessageType,
    modal: Component,
    updateModal: (message: MessageType) => void,
  ) {
    const user = JSON.parse(sessionStorage.getItem("chat-user")!) as SavedUser;
    const className = `message ${user.login === params.from ? "from" : ""}`;
    super({ tag: "li", className, textContent: params.text });
    this.id = params.id;
    this.modalPosition = { left: 0, top: 0 };
    this.modal = modal;

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
  }

  createModal() {
    this.modal.component.style.left = `${this.modalPosition.left}px`;
    this.modal.component.style.top = `${this.modalPosition.top}px`;
    this.append([this.modal]);
  }
}
