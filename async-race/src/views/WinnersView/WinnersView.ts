import api from "../../api";
import BaseComponent from "../../components/BaseComponent";
import Pagination from "../../components/Pagination/Pagination";
import Winner from "../../components/Winner/Winner";
import View from "../View";

class WinnersView extends View {
  carsComps: Winner[];

  cars: BaseComponent;

  count: BaseComponent;

  currentPage: number;

  pagination: Pagination;

  constructor() {
    super("winners");

    this.carsComps = [];
    this.cars = new BaseComponent<HTMLTableElement>(
      {
        tag: "table",
        className: "winners",
      },
      [this.createTableHeader()],
    );
    this.count = new BaseComponent({
      tag: "span",
      textContent: `${api.totalWinners}`,
    });
    this.currentPage = +localStorage.getItem("winners-page")!;
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
    this.append([carsCount, this.cars, this.pagination]);
  }

  updatePage(page: number) {
    this.currentPage = page;
    localStorage.setItem("winners-page", `${page}`);
    this.renderCars();
  }

  createTableHeader(): BaseComponent<HTMLTableRowElement> {
    const header = new BaseComponent<HTMLTableRowElement>(
      { tag: "tr", className: "winners-header" },
      [
        new BaseComponent<HTMLTableCellElement>({
          tag: "td",
          textContent: "Number",
        }),
        new BaseComponent<HTMLTableCellElement>({
          tag: "td",
          textContent: "Color",
        }),
        new BaseComponent<HTMLTableCellElement>({
          tag: "td",
          textContent: "Name",
        }),
        new BaseComponent<HTMLTableCellElement>({
          tag: "td",
          textContent: "Wins",
        }),
        new BaseComponent<HTMLTableCellElement>({
          tag: "td",
          textContent: "Best time",
        }),
      ],
    );
    return header;
  }

  async renderCars() {
    await api.getWinners(this.currentPage);
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
    this.carsComps = winners.map((winner) => new Winner(winner));
    this.cars.append(this.carsComps);
  }

  async render() {
    super.render();
    await this.renderCars();
  }
}

export default new WinnersView();
