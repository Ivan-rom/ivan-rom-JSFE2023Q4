import Component from "../../components/Component";
import Router from "../../router/Router";
import View from "../View";

export default class ChatView extends View {
  private router: Router;

  constructor(router: Router) {
    super("chat");
    this.router = router;
    this.append([new Component({ tag: "h2", textContent: "Fun chat" })]);
  }
}
