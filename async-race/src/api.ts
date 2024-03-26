import { CarType, WinnerType } from "./types";

class Api {
  url: string;

  cars: CarType[];

  garage: CarType[];

  winners: WinnerType[];

  totalGarage: number;

  totalWinners: number;

  constructor() {
    this.url = "http://127.0.0.1:3000";
    this.cars = [];
    this.garage = [];
    this.winners = [];
    this.totalGarage = 0;
    this.totalWinners = 0;

    this.getCars();
  }

  async getCars() {
    await fetch(`${this.url}/garage`)
      .then((response) => response.json())
      .then((cars) => {
        this.cars = cars;
      });
  }

  async getGarage(page: number = 1) {
    await fetch(`${this.url}/garage?_page=${page}&_limit=7`)
      .then((response) => {
        this.totalGarage = +response.headers.get("X-total-count")!;
        return response.json();
      })
      .then((cars) => {
        this.garage = cars;
      });
  }

  async getWinners(
    page: number = 1,
    sort: "id" | "wins" | "time" = "id",
    order: "ASC" | "DESC" = "ASC",
  ) {
    await fetch(
      `${this.url}/winners?_page=${page}&_limit=7&_sort=${sort}&_order=${order}`,
    )
      .then((response) => {
        this.totalWinners = +response.headers.get("X-total-count")!;
        return response.json();
      })
      .then((cars) => {
        this.winners = cars;
      });
  }

  async deleteCar(id: number) {
    await fetch(`${this.url}/garage/${id}`, {
      method: "DELETE",
    });
  }
}

export default new Api();
