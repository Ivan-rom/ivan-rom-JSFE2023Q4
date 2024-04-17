import Component from "../Component";

export default class Footer extends Component {
  constructor() {
    super({ className: "chat-footer footer" });

    this.append(this.createContent());
  }

  private createContent(): Component[] {
    const copyright = new Component({
      tag: "p",
      textContent: "RS School",
      className: "footer-text copyright",
    });
    const author = new Component({
      tag: "p",
      textContent: "Иван Романенко",
      className: "footer-text author",
    });
    const year = new Component({
      tag: "p",
      textContent: "2024",
      className: "footer-text year",
    });
    return [copyright, author, year];
  }
}
