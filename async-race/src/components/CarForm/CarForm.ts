import BaseComponent from "../BaseComponent";

const url = "http://127.0.0.1:3000";

export default class CarForm extends BaseComponent {
  newColorInput: BaseComponent<HTMLInputElement>;

  newNameInput: BaseComponent<HTMLInputElement>;

  newButton: BaseComponent<HTMLButtonElement>;

  updateCallback: () => void;

  constructor(updateCallback: () => void) {
    super({ className: "form" });

    this.updateCallback = updateCallback;

    this.newNameInput = new BaseComponent<HTMLInputElement>({
      tag: "input",
      name: "newName",
      type: "text",
    });
    this.newColorInput = new BaseComponent<HTMLInputElement>({
      tag: "input",
      name: "newColor",
      type: "color",
    });
    this.newButton = new BaseComponent<HTMLButtonElement>({
      tag: "button",
      textContent: "create",
      onclick: this.newHandler.bind(this),
    });

    this.append([this.newNameInput, this.newColorInput, this.newButton]);
  }

  newHandler() {
    const body = {
      name: this.newNameInput.component.value,
      color: this.newColorInput.component.value,
    };
    console.log(JSON.stringify(body));

    fetch(`${url}/garage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(() => this.updateCallback());
  }
}
