import api from "../../api";
import Component from "../../components/Component";
import Pagination from "../../components/Pagination/Pagination";
import Winner from "../../components/Winner/Winner";
import { Order, Sorting } from "../../types";
import View from "../View";

import "./winnersView.css";

class WinnersView extends View {
  carsComps: Winner[];

  cars: Component;

  count: Component;

  currentPage: number;

  pagination: Pagination;

  order: Order;

  sorting: Sorting;

  constructor() {
    super("winners");
    this.order = Order.ASC;
    this.sorting = Sorting.TIME;

    this.carsComps = [];
    this.cars = new Component<HTMLTableElement>(
      {
        tag: "table",
        className: "winners-table",
        border: "1",
      },
      [this.createTableHeader()],
    );
    this.count = new Component({
      tag: "span",
      textContent: `${api.totalWinners}`,
    });
    this.currentPage = +localStorage.getItem("winners-page")!;
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
    this.append([carsCount, this.cars, this.pagination]);
  }

  updatePage(page: number) {
    this.currentPage = page;
    localStorage.setItem("winners-page", `${page}`);
    this.renderCars();
  }

  changeSort(newSorting: Sorting, target: HTMLElement) {
    if (newSorting === this.sorting) {
      if (this.order === Order.ASC) {
        this.order = Order.DESC;
        target.classList.add("DESC");
        target.classList.remove("ASC");
      } else {
        this.order = Order.ASC;
        target.classList.add("ASC");
        target.classList.remove("DESC");
      }
    } else {
      this.sorting =
        this.sorting === Sorting.TIME ? Sorting.WINS : Sorting.TIME;
      this.order = Order.ASC;
      target.classList.add("sorting");
      target.classList.add("ASC");
      target.classList.remove("DESC");
    }
    this.renderCars();
  }

  createSortingButtons() {
    const wins = new Component<HTMLTableCellElement>({
      tag: "td",
      textContent: "Wins",
      className: "WINS",
    });
    const time = new Component<HTMLTableCellElement>({
      tag: "td",
      textContent: "Best time",
      className: "TIME",
    });
    if (this.sorting === Sorting.TIME) {
      time.component.classList.add("sorting");
      if (this.order === Order.ASC) time.component.classList.add("ASC");
      else time.component.classList.add("DESC");
    } else {
      wins.component.classList.add("sorting");
      if (this.order === Order.ASC) wins.component.classList.add("ASC");
      else wins.component.classList.add("DESC");
    }
    const changeHandler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("WINS"))
        this.changeSort(Sorting.WINS, target);
      else this.changeSort(Sorting.TIME, target);
    };
    wins.component.onclick = changeHandler;
    time.component.onclick = changeHandler;
    return [wins, time];
  }

  createTableHeader(): Component<HTMLTableRowElement> {
    const sortingButtons = this.createSortingButtons();
    const header = new Component<HTMLTableRowElement>(
      { tag: "tr", className: "winners-header" },
      [
        new Component<HTMLTableCellElement>({
          tag: "td",
          textContent: "№",
        }),
        new Component<HTMLTableCellElement>({
          tag: "td",
          textContent: "Color",
        }),
        new Component<HTMLTableCellElement>({
          tag: "td",
          textContent: "Name",
        }),
        ...sortingButtons,
      ],
    );
    return header;
  }

  async renderCars() {
    await api.getWinners(this.currentPage, this.sorting, this.order);
    this.cars.component.innerHTML = "";
    this.cars.append([this.createTableHeader()]);
    const pages = Math.ceil(api.totalWinners / 10);
    this.pagination.pagesCount = pages;
    if (this.currentPage > pages) {
      this.pagination.currentPage = pages;
      this.pagination.updatePagination();
      this.updatePage(pages);
    }
    this.pagination.updatePagination();
    this.count.component.textContent = `${api.totalWinners}`;
    const winners = api.winners.map((winner) => {
      const found = api.cars.find((car) => car.id === winner.id);
      return { ...found!, ...winner };
    });
    this.carsComps = winners.map(
      (winner, index) => new Winner(winner, index + 1),
    );
    this.cars.append(this.carsComps);
  }

  async render() {
    super.render();
    await this.renderCars();
  }
}

export default new WinnersView();
