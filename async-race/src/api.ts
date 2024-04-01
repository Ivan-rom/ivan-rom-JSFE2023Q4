import { CarType, Order, Sorting, WinnerType } from "./types";

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
    sort: Sorting = Sorting.TIME,
    order: Order = Order.ASC,
  ) {
    await fetch(
      `${this.url}/winners?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`,
    )
      .then((response) => {
        this.totalWinners = +response.headers.get("X-total-count")!;
        return response.json();
      })
      .then((cars) => {
        this.winners = cars as WinnerType[];
      });
  }

  stopCar(id: number) {
    fetch(`${this.url}/engine?id=${id}&status=stopped`, {
      method: "PATCH",
    });
  }

  async startCar(id: number) {
    return fetch(`${this.url}/engine?id=${id}&status=started`, {
      method: "PATCH",
    });
  }

  async driveCar(id: number) {
    return fetch(`${this.url}/engine?id=${id}&status=drive`, {
      method: "PATCH",
    });
  }

  async deleteCar(id: number) {
    const foundCar = this.winners.find((car) => car.id === id);
    if (foundCar)
      fetch(`${this.url}/winners/${id}`, {
        method: "DELETE",
      });
    await fetch(`${this.url}/garage/${id}`, {
      method: "DELETE",
    });
  }

  createWinner({ id, time }: { id: number; time: number }) {
    fetch(`${this.url}/winners/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        wins: 1,
        time,
      }),
    });
  }

  updateWinner({ id, wins, time }: { id: number; wins: number; time: number }) {
    fetch(`${this.url}/winners/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wins,
        time,
      }),
    });
  }
}

export default new Api();
