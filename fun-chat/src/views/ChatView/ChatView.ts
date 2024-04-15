import Header from "../../components/Header/Header";
import Router from "../../router/Router";
import View from "../View";

export default class ChatView extends View {
  private router: Router;

  constructor(router: Router) {
    super("chat");
    this.router = router;
    const header = new Header(router);
    this.append([header]);
  }
}
