import Button from "../Button/Button";
import Component from "../Component";

export default class LoginForm extends Component<HTMLFormElement> {
  private errors: { name: boolean; password: boolean };

  private submitButton: Button;

  private submitHandler: (e: SubmitEvent) => void;

  private name: string;

  constructor(handler: (name: string) => void) {
    super({ className: "form-login", tag: "form" });

    this.errors = { name: true, password: true };
    this.name = "";

    this.submitButton = new Button("login-button", "Войти");
    this.submitButton.component.disabled = true;

    this.submitHandler = (e: SubmitEvent) => {
      e.preventDefault();
      handler(this.name);
    };

    this.append(this.createContent());
  }

  private createContent(): Component[] {
    const header = new Component({ tag: "h2", textContent: "Вход" });
    const namePare = this.createInput("name");
    const passwordPare = this.createInput("password");
    return [header, ...namePare, ...passwordPare, this.submitButton];
  }

  private nameHandler(e: Event): string[] {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const errors: string[] = [];
    this.name = value;

    if (value.length < 4) {
      errors.push("Длина имени должна быть не менее 4 символов");
    }

    return errors;
  }

  private passwordHandler(e: Event): string[] {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const errors: string[] = [];

    if (value.length < 4) {
      errors.push("Длина пароля должна быть не менее 6 символов");
    }

    return errors;
  }

  private createInput(name: "name" | "password"): Component[] {
    const text = name === "name" ? "Введите имя" : "Введите пароль";
    const inputType = name === "name" ? "text" : "password";

    const errorsComponent = new Component({ tag: "ul", className: "errors" });

    const handler = (e: Event) => {
      const errorsList =
        name === "name" ? this.nameHandler(e) : this.passwordHandler(e);
      this.errors[name] = Boolean(errorsList.length);
      errorsComponent.component.innerHTML = "";

      errorsList.forEach((error) => {
        errorsComponent.append([
          new Component({ tag: "li", className: "error", textContent: error }),
        ]);
      });

      if (!this.errors.name && !this.errors.password) {
        this.component.onsubmit = this.submitHandler;
        this.submitButton.component.disabled = false;
      } else {
        this.component.onsubmit = null;
        this.submitButton.component.disabled = true;
      }
    };

    const input = new Component<HTMLInputElement>({
      tag: "input",
      type: inputType,
      name,
      id: name,
      placeholder: text,
      oninput: handler,
    });

    const label = new Component<HTMLLabelElement>({
      tag: "label",
      textContent: text,
    });

    return [label, input, errorsComponent];
  }
}
