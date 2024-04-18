import { MessageType } from "../../types";
import Component from "../Component";

export default class Message extends Component {
  constructor(params: MessageType) {
    super({ tag: "li", className: "message", textContent: params.text });
  }
}
