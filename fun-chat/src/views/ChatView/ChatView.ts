import Component from "../../components/Component";
import View from "../View";

export default class ChatView extends View {
  constructor() {
    super("chat");
    this.append([new Component({ tag: "h2", textContent: "Fun chat" })]);
  }
}
