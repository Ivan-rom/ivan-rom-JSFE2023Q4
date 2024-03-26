import api from "../../api";
import { CarType } from "../../types";
import BaseComponent from "../BaseComponent";

import "./car.css";

export default class Car extends BaseComponent {
  name: string;

  color: string;

  id: number;

  car: BaseComponent;

  updateCallback: () => void;

  constructor({ name, color, id }: CarType, updateCallback: () => void) {
    super({ className: "car-wrapper" });
    this.name = name;
    this.color = color;
    this.id = id;

    this.updateCallback = updateCallback;

    this.car = this.getCar();
    this.createButtons();
    this.append([this.car]);
  }

  getCar(): BaseComponent {
    const car = new BaseComponent({ className: "car" });
    car.component.style.backgroundColor = this.color;
    car.component.id = `${this.id}`;
    car.component.title = this.name;
    return car;
  }

  createButtons() {
    const deleteHandler = () => {
      api.deleteCar(this.id);
      this.updateCallback();
    };
    const deleteButton = new BaseComponent<HTMLButtonElement>({
      tag: "button",
      className: "button delete-button",
      textContent: "Remove car",
      onclick: deleteHandler.bind(this),
    });

    const changeHandler = () => {
      const form = document.forms[1];
      (form.elements[0] as HTMLInputElement).value = this.name;
      (form.elements[1] as HTMLInputElement).value = this.color;
      (form.elements[2] as HTMLInputElement).value = `${this.id}`;
    };
    const changeButton = new BaseComponent<HTMLButtonElement>({
      tag: "button",
      className: "button change-button",
      textContent: "Change car",
      onclick: changeHandler.bind(this),
    });

    this.append([deleteButton, changeButton]);
  }
}
