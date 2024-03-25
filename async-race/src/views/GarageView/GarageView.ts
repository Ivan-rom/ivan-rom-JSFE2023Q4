import api from "../../api";
import BaseComponent from "../../components/BaseComponent";
import Car from "../../components/Car/Car";
import CarForm from "../../components/CarForm/CarForm";
import View from "../View";

class Garage extends View {
  carsComps: Car[];

  cars: BaseComponent;

  constructor() {
    super("garage");
    this.carsComps = [];
    this.cars = new BaseComponent({ className: "cars" });
    this.append([new CarForm(this.render.bind(this)), this.cars]);
  }

  renderCars() {
    this.carsComps = api.cars.map((car) => new Car(car));
    this.cars.component.innerHTML = "";
    this.cars.append(this.carsComps);
  }

  async render() {
    super.render();
    await api.getCars();
    this.renderCars();
  }
}

export default new Garage();
