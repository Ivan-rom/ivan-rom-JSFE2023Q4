import Component from "../Component";

export default class Pagination extends Component {
  currentPage: number;

  pagesCount: number;

  prevButton: Component<HTMLButtonElement>;

  nextButton: Component<HTMLButtonElement>;

  currentText: Component;

  updatePage: (page: number) => void;

  constructor(currentPage: number, updatePage: (page: number) => void) {
    super({ className: "pagination" });
    this.updatePage = updatePage;
    this.currentPage = currentPage;
    this.pagesCount = 1;
    this.prevButton = this.createPrevButton();
    this.nextButton = this.createNextButton();
    this.currentText = new Component({
      tag: "span",
      textContent: `${this.currentPage}`,
    });
    this.append([this.prevButton, this.currentText, this.nextButton]);
  }

  updatePagination() {
    this.prevButton.component.disabled = this.currentPage <= 1;
    this.nextButton.component.disabled = this.currentPage >= this.pagesCount;

    this.currentText.component.textContent = `${this.currentPage}`;
  }

  createPrevButton(): Component<HTMLButtonElement> {
    const handler = () => {
      this.currentPage -= 1;
      this.updatePagination();
      this.updatePage(this.currentPage);
    };
    const button = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button pagination-button prev",
      textContent: "< Previous page",
      onclick: handler.bind(this),
    });
    button.component.disabled = this.currentPage <= 1;
    return button;
  }

  createNextButton(): Component<HTMLButtonElement> {
    const handler = () => {
      this.currentPage += 1;
      this.updatePagination();
      this.updatePage(this.currentPage);
    };
    const button = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button pagination-button next",
      textContent: "Next page >",
      onclick: handler.bind(this),
    });
    button.component.disabled = this.currentPage >= this.pagesCount;
    return button;
  }
}