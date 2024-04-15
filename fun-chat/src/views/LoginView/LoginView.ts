import Button from "../../components/Button/Button";
import Component from "../../components/Component";
import LoginForm from "../../components/LoginForm/LoginForm";
import Router from "../../router/Router";
import View from "../View";

export default class LoginView extends View {
  private router: Router;

  constructor(router: Router) {
    super("login");
    this.router = router;

    this.append([this.createForm(), this.createAboutButton()]);
  }

  createAboutButton(): Button {
    return new Button("login-button login-about", "Инфо", () =>
      this.router.navigate("about"),
    );
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
