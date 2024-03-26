import BaseComponent from "../BaseComponent";

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

export default class CarForm extends BaseComponent {
  newForm: BaseComponent<HTMLFormElement>;

  changeForm: BaseComponent<HTMLFormElement>;

  randomButton: BaseComponent<HTMLButtonElement>;

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
    console.log(body);

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

  createNewForm(): BaseComponent<HTMLFormElement> {
    const nameInput = new BaseComponent<HTMLInputElement>({
      tag: "input",
      name: "name",
      type: "text",
    });
    const colorInput = new BaseComponent<HTMLInputElement>({
      tag: "input",
      name: "color",
      type: "color",
    });
    const button = new BaseComponent<HTMLButtonElement>({
      tag: "button",
      textContent: "create",
    });

    const form = new BaseComponent<HTMLFormElement>(
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

  createChangeForm(): BaseComponent<HTMLFormElement> {
    const nameInput = new BaseComponent<HTMLInputElement>({
      tag: "input",
      name: "name",
      type: "text",
    });
    const colorInput = new BaseComponent<HTMLInputElement>({
      tag: "input",
      name: "color",
      type: "color",
    });
    const button = new BaseComponent<HTMLButtonElement>({
      tag: "button",
      textContent: "change",
    });
    const id = new BaseComponent<HTMLInputElement>({
      tag: "input",
      name: "id",
      type: "hidden",
    });

    const form = new BaseComponent<HTMLFormElement>(
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

  createRandomButton(): BaseComponent<HTMLButtonElement> {
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

    const button = new BaseComponent<HTMLButtonElement>({
      tag: "button",
      textContent: "Generate 100 cars",
      onclick: handler.bind(this),
    });

    return button;
  }
}
