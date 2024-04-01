import Component from "../Component";

import "./carForm.css";

const url = "http://127.0.0.1:3000";

const carNames: string[] = [
  "Tesla",
  "Ford",
  "Mazda",
  "Toyota",
  "Zhiguli",
  "Mitsubishi",
  "Mercedes",
];

const carModels: string[] = [
  "Model S",
  "Mustang",
  "Miata",
  "Trueno",
  "RS7",
  "Benz",
];

export default class CarForm extends Component {
  newForm: Component<HTMLFormElement>;

  changeForm: Component<HTMLFormElement>;

  randomButton: Component<HTMLButtonElement>;

  updateCallback: () => void;

  constructor(updateCallback: () => void) {
    super({ className: "form" });
    this.updateCallback = updateCallback;
    this.newForm = this.createNewForm();
    this.changeForm = this.createChangeForm();
    this.randomButton = this.createRandomButton();
    this.append([this.newForm, this.changeForm, this.randomButton]);
  }

  newHandler(e: SubmitEvent) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target as HTMLFormElement));
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

  changeHandler(e: SubmitEvent) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    fetch(`${url}/garage/${body.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(() => this.updateCallback());
  }

  createNewForm(): Component<HTMLFormElement> {
    const nameInput = new Component<HTMLInputElement>({
      tag: "input",
      name: "name",
      type: "text",
      required: true,
    });
    const colorInput = new Component<HTMLInputElement>({
      tag: "input",
      name: "color",
      type: "color",
    });
    const button = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button",
      textContent: "create",
    });

    const form = new Component<HTMLFormElement>(
      {
        tag: "form",
        className: "new-form",
        name: "new",
      },
      [nameInput, colorInput, button],
    );
    form.component.onsubmit = this.newHandler.bind(this);

    return form;
  }

  createChangeForm(): Component<HTMLFormElement> {
    const nameInput = new Component<HTMLInputElement>({
      tag: "input",
      name: "name",
      type: "text",
      required: true,
    });
    const colorInput = new Component<HTMLInputElement>({
      tag: "input",
      name: "color",
      type: "color",
    });
    const button = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button",
      textContent: "change",
    });
    const id = new Component<HTMLInputElement>({
      tag: "input",
      name: "id",
      type: "hidden",
    });

    const form = new Component<HTMLFormElement>(
      {
        tag: "form",
        className: "update-form",
        name: "update",
      },
      [nameInput, colorInput, id, button],
    );
    form.component.onsubmit = this.changeHandler.bind(this);

    return form;
  }

  createRandomButton(): Component<HTMLButtonElement> {
    const handler = () => {
      for (let i = 0; i < 100; i += 1) {
        const randomNameIndex = Math.floor(Math.random() * carNames.length);
        const randomModelIndex = Math.floor(Math.random() * carModels.length);
        const body = {
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          name: `${carNames[randomNameIndex]} ${carModels[randomModelIndex]}`,
        };
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
    };

    const button = new Component<HTMLButtonElement>({
      tag: "button",
      textContent: "Generate 100 cars",
      className: "button",
      onclick: handler.bind(this),
    });

    return button;
  }
}
