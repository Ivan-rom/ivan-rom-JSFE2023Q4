import api from "../../api";
import BaseComponent from "../../components/BaseComponent";
import Car from "../../components/Car/Car";
import CarForm from "../../components/CarForm/CarForm";
import Pagination from "../../components/Pagination/Pagination";
import View from "../View";

class Garage extends View {
  carsComps: Car[];

  cars: BaseComponent;

  count: BaseComponent;

  currentPage: number;

  pagination: Pagination;

  constructor() {
    super("garage");
    this.carsComps = [];
    this.cars = new BaseComponent({ className: "cars" });
    this.count = new BaseComponent({
      tag: "span",
      textContent: `${api.totalGarage}`,
    });
    this.currentPage = +localStorage.getItem("garage-page")!;
    const carsCount = new BaseComponent(
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
    await api.getGarage(this.currentPage);
    const pages = Math.ceil(api.totalGarage / 7);
    this.pagination.pagesCount = pages;
    if (this.currentPage > pages) {
      this.pagination.currentPage = pages;
      this.pagination.updatePagination();
      this.updatePage(pages);
    }
    this.pagination.updatePagination();
    console.log(this.pagination.pagesCount);

    this.count.component.textContent = `${api.totalGarage}`;
    this.carsComps = api.garage.map(
      (car) => new Car(car, this.render.bind(this)),
    );
    this.cars.component.innerHTML = "";
    this.cars.append(this.carsComps);
  }

  async render() {
    super.render();
    await this.renderCars();
  }
}

export default new Garage();
