import Car from "../../components/Car/Car";
import View from "../View";

const url = "http://127.0.0.1:3000";

export default class Garage extends View {
  cars: Car[];

  constructor() {
    super("garage");
    this.cars = [];
  }

  async getCars() {
    await fetch(`${url}/garage`)
      .then((response) => response.json())
      .then((cars) => {
        this.cars = cars;
      });
  }

  renderCars() {
    this.cars = this.cars.map((car) => new Car(car));
    this.append(this.cars);
  }

  async render() {
    super.render();
    await this.getCars();
    this.renderCars();
  }
}
