import Component from "../../components/Component";
import LoginForm from "../../components/LoginForm/LoginForm";
import View from "../View";

export default class LoginView extends View {
  constructor() {
    super("login");

    this.append([this.createForm()]);
  }

  private createForm(): Component<HTMLFormElement> {
    const handler = () => {};
    const form = new LoginForm(handler.bind(this));
    return form;
  }
}
