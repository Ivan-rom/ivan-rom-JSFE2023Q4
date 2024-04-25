import api from "../../api";
import Component from "../../components/Component";
import Car from "../../components/Car/Car";
import CarForm from "../../components/CarForm/CarForm";
import Pagination from "../../components/Pagination/Pagination";
import View from "../View";

import "./GarageView.css";

class Garage extends View {
  carsComps: Car[];

  cars: Component;

  count: Component;

  currentPage: number;

  pagination: Pagination;

  modal: Component;

  constructor() {
    super("garage");
    this.carsComps = [];
    this.modal = new Component({ className: "modal" });
    this.cars = new Component({ className: "cars" });
    this.count = new Component({
      tag: "span",
      textContent: `${api.totalGarage}`,
    });
    this.currentPage = +localStorage.getItem("garage-page")!;
    const carsCount = new Component(
      {
        tag: "h2",
        className: "cars-count",
        textContent: `Cars count: `,
      },
      [this.count],
    );
    this.pagination = new Pagination(
      this.currentPage,
      this.updatePage.bind(this),
    );

    this.append([
      new CarForm(this.render.bind(this)),
      ...this.createRaceButtons(),
      carsCount,
      this.cars,
      this.pagination,
    ]);
  }

  updatePage(page: number) {
    this.currentPage = page;
    localStorage.setItem("garage-page", `${page}`);
    this.renderCars();
  }

  async renderCars() {
    this.modal.component.remove();
    const currentCars = JSON.stringify(api.garage);
    await api.getGarage(this.currentPage);
    const pages = Math.ceil(api.totalGarage / 7);
    this.pagination.pagesCount = pages;
    if (this.currentPage > pages) {
      this.pagination.currentPage = pages;
      this.pagination.updatePagination();
      this.updatePage(pages);
    }
    this.pagination.updatePagination();
    this.count.component.textContent = `${api.totalGarage}`;
    if (currentCars !== JSON.stringify(api.garage)) {
      this.carsComps = api.garage.map(
        (car) => new Car(car, this.render.bind(this)),
      );
      this.cars.component.innerHTML = "";
      this.cars.append(this.carsComps);
    }
  }

  createRaceButtons(): Component<HTMLButtonElement>[] {
    const startButton = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button",
      textContent: "start",
    });

    const resetButton = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button",
      textContent: "reset",
      disabled: true,
    });

    startButton.component.onclick = () => {
      resetButton.component.disabled = false;
      startButton.component.disabled = true;

      Promise.race(this.carsComps.map((car) => car.start())).then((res) => {
        const winner = res as { id: number; time: number; name: string };
        this.modal.component.textContent = `${winner.name} went first (${winner.time}s)`;
        this.append([this.modal]);
        this.setWinner(res as { id: number; time: number });
      });
    };
    resetButton.component.onclick = () => {
      startButton.component.disabled = false;
      resetButton.component.disabled = true;
      this.modal.component.remove();
      this.carsComps.map((car) => car.reset());
    };
    return [startButton, resetButton];
  }

  setWinner(winner: { id: number; time: number }) {
    const existedWinner = api.winners.find((car) => car.id === winner.id);
    if (!existedWinner) api.createWinner(winner);
    else {
      existedWinner.wins += 1;
      if (existedWinner.time > winner.time) existedWinner.time = winner.time;
      api.updateWinner(existedWinner);
    }
  }

  async render() {
    super.render();
    await this.renderCars();
  }
}

export default new Garage();
