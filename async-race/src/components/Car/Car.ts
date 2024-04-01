import api from "../../api";
import { CarType, Result } from "../../types";
import Component from "../Component";

import "./car.css";

export default class Car extends Component {
  name: string;

  color: string;

  id: number;

  car: Component;

  header: Component;

  updateCallback: () => void;

  finish: Component;

  isMoving: boolean;

  startButton: Component<HTMLButtonElement>;

  resetButton: Component<HTMLButtonElement>;

  constructor({ name, color, id }: CarType, updateCallback: () => void) {
    super({ className: "car-wrapper" });
    this.name = name;
    this.color = color;
    this.id = id;
    this.updateCallback = updateCallback;
    this.isMoving = false;
    this.startButton = this.createStartButton();
    this.resetButton = this.createResetButton();
    this.finish = new Component({ className: "finish" });
    this.car = this.getCar();

    this.header = new Component(
      {
        className: "car-header",
      },
      [
        ...this.createManagementButtons(),
        new Component({ className: "name", textContent: name }),
      ],
    );

    const controlButtons = new Component({ className: "control-buttons" }, [
      this.startButton,
      this.resetButton,
    ]);

    const track = new Component({ className: "track" }, [
      controlButtons,
      this.car,
      this.finish,
    ]);
    this.append([this.header, track]);
  }

  getCar(): Component {
    const car = new Component({ className: "car" });
    car.component.style.backgroundColor = this.color;
    car.component.id = `${this.id}`;
    car.component.title = this.name;
    return car;
  }

  async start() {
    this.startButton.component.disabled = true;
    this.resetButton.component.disabled = false;
    const awaited = await api
      .startCar(this.id)
      .then((response) => response.json())
      .then((r) => {
        return new Promise((resolve) => {
          const start = Date.now();
          const result = r as Result;
          const time = result.distance / result.velocity;
          const width =
            this.finish.component.offsetLeft +
            this.finish.component.offsetWidth -
            this.car.component.offsetLeft;
          const speed = (width / time) * 16;

          this.isMoving = true;
          let pos = 0;

          const changePos = () => {
            this.car.component.style.transform = `translateX(${pos}px)`;
          };

          const tick = () => {
            if (!this.isMoving) return;
            pos += speed;
            if (pos < width) {
              requestAnimationFrame(changePos);
              setTimeout(tick, 16);
            } else {
              const finishTime = (Date.now() - start) / 1000;
              resolve({ id: this.id, time: finishTime, name: this.name });
            }
          };
          tick();

          api.driveCar(this.id).then((response) => {
            if (response.status === 500) this.isMoving = false;
          });
        });
      });
    return awaited;
  }

  reset() {
    this.startButton.component.disabled = false;
    this.resetButton.component.disabled = true;
    this.isMoving = false;
    requestAnimationFrame(() => {
      this.car.component.style.transform = "translateX(0px)";
    });
    api.stopCar(this.id);
  }

  createStartButton(): Component<HTMLButtonElement> {
    const button = new Component<HTMLButtonElement>({
      tag: "button",
      textContent: "start",
      className: "button start-button",
      onclick: this.start.bind(this),
    });
    return button;
  }

  createResetButton(): Component<HTMLButtonElement> {
    const button = new Component<HTMLButtonElement>({
      tag: "button",
      textContent: "reset",
      className: "button reset-button",
      disabled: true,
      onclick: this.reset.bind(this),
    });
    return button;
  }

  createManagementButtons(): Component[] {
    const deleteHandler = () => {
      api.deleteCar(this.id).then(() => {
        this.updateCallback();
      });
    };
    const deleteButton = new Component<HTMLButtonElement>({
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
    const changeButton = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button change-button",
      textContent: "Change car",
      onclick: changeHandler.bind(this),
    });

    return [deleteButton, changeButton];
  }
}
