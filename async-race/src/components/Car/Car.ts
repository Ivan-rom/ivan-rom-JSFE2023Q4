import api from "../../api";
import { CarType } from "../../types";
import BaseComponent from "../BaseComponent";

import "./car.css";

export default class Car extends BaseComponent {
  name: string;

  color: string;

  id: number;

  constructor({ name, color, id }: CarType) {
    super({ className: "car" });
    this.name = name;
    this.color = color;
    this.id = id;

    this.component.style.backgroundColor = this.color;
    this.component.id = `${this.id}`;
    this.component.title = this.name;

    this.createButtons();
  }

  createButtons() {
    const deleteHandler = () => {
      api.deleteCar(this.id);
    };
    const deleteButton = new BaseComponent<HTMLButtonElement>({
      tag: "button",
      className: "button delete-button",
      textContent: "Remove car",
      onclick: deleteHandler.bind(this),
    });

    this.append([deleteButton]);
  }
}
