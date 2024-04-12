import Button from "../Button/Button";
import Component from "../Component";

export default class LoginForm extends Component<HTMLFormElement> {
  private handler: Function;

  constructor(handler: Function) {
    super({ className: "form-login", tag: "form" });

    this.handler = handler;
    this.component.onsubmit = (e: SubmitEvent) => {
      e.preventDefault();
      handler();
    };

    this.append(this.createContent());
  }

  private createContent(): Component[] {
    const header = new Component({ tag: "h2", textContent: "Вход" });
    const namePare = this.createInput("name");
    const passwordPare = this.createInput("password");
    const button = new Button("login-button", "Войти");
    return [header, ...namePare, ...passwordPare, button];
  }

  private createInput(name: "name" | "password"): Component[] {
    let text = name === "name" ? "Введите имя" : "Введите пароль";
    let inputType = name === "name" ? "text" : "password";
    const input = new Component<HTMLInputElement>({
      tag: "input",
      type: inputType,
      name,
      id: name,
      placeholder: text,
    });

    const label = new Component<HTMLLabelElement>({
      tag: "label",
      textContent: text,
    });

    return [label, input];
  }
}
