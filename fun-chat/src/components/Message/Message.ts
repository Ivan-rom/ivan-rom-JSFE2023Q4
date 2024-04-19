import { MessageType, SavedUser } from "../../types";
import Component from "../Component";

import "./message.css";

export default class Message extends Component {
  constructor(params: MessageType) {
    const user = JSON.parse(sessionStorage.getItem("chat-user")!) as SavedUser;
    const className = `message ${user.login === params.from ? "from" : ""}`;
    super({ tag: "li", className, textContent: params.text });
  }
}
