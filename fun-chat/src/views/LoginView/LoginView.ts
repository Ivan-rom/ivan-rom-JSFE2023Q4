import Component from "../../components/Component";
import LoginForm from "../../components/LoginForm/LoginForm";
import Router from "../../router/Router";
import View from "../View";

export default class LoginView extends View {
  private router: Router;

  constructor(router: Router) {
    super("login");
    this.router = router;
    localStorage.removeItem("chat-user");

    this.append([this.createForm()]);
  }

  private createForm(): Component<HTMLFormElement> {
    const handler = (user: string) => {
      localStorage.setItem("chat-user", user);
      this.router.navigate("chat");
    };
    const form = new LoginForm(handler.bind(this));
    return form;
  }
}
