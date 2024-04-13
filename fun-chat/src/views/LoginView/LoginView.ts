import Component from "../../components/Component";
import LoginForm from "../../components/LoginForm/LoginForm";
import Router from "../../router/Router";
import View from "../View";

export default class LoginView extends View {
  constructor() {
    super("login");
    localStorage.removeItem("chat-user");

    this.append([this.createForm()]);
  }

  private createForm(): Component<HTMLFormElement> {
    const handler = (user: string) => {
      localStorage.setItem("chat-user", user);
      Router.navigate("chat");
    };
    const form = new LoginForm(handler.bind(this));
    return form;
  }
}
