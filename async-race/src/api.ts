import { CarType } from "./types";

class Api {
  url: string;

  cars: CarType[];

  totalCars: number;

  constructor() {
    this.url = "http://127.0.0.1:3000";
    this.cars = [];
    this.totalCars = 0;

    this.getCars();
  }

  async getCars(page: number = 2) {
    await fetch(`${this.url}/garage?_page=${page}&_limit=7`)
      .then((response) => {
        this.totalCars = +response.headers.get("X-total-count")!;
        return response.json();
      })
      .then((cars) => {
        this.cars = cars;
      });
  }

  async deleteCar(id: number) {
    await fetch(`${this.url}/garage/${id}`, {
      method: "DELETE",
    });
  }
}

export default new Api();
