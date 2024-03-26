import BaseComponent from "../BaseComponent";

const url = "http://127.0.0.1:3000";

export default class CarForm extends BaseComponent {
  newForm: BaseComponent<HTMLFormElement>;

  changeForm: BaseComponent<HTMLFormElement>;

  updateCallback: () => void;

  constructor(updateCallback: () => void) {
    super({ className: "form" });
    this.updateCallback = updateCallback;
    this.newForm = this.createNewForm();
    this.changeForm = this.createChangeForm();
    this.append([this.newForm, this.changeForm]);
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
}
