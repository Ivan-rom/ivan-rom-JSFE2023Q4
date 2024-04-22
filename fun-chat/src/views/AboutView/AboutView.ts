import Button from "../../components/Button/Button";
import Component from "../../components/Component";
import Router from "../../router/Router";
import View from "../View";

import "./aboutView.css";

export default class AboutView extends View {
  private router: Router;

  constructor(router: Router) {
    super("about");

    this.router = router;
    this.append([this.createContent(), this.createBackButton()]);
  }

  private createContent(): Component {
    const content = new Component({ className: "about-content" });
    const header = new Component<HTMLHeadingElement>({
      tag: "h2",
      className: "about-header",
      textContent: "Fun chat",
    });
    const link = new Component<HTMLLinkElement>({
      tag: "a",
      className: "about-link",
      href: "https://github.com/Ivan-rom",
      target: "_blank",
      textContent: "Иван Романенко",
    });
    const author = new Component<HTMLParagraphElement>(
      {
        tag: "p",
        className: "about-author",
        textContent: "Автор: ",
      },
      [link],
    );
    const description = new Component<HTMLParagraphElement>({
      tag: "p",
      className: "about-description",
      textContent:
        "Приложение чат, созданное для демонстрации навыков, по созданию SPA, с использованием WebSocket протокола",
    });
    content.append([header, description, author]);
    return content;
  }

  private createBackButton(): Button {
    const handler = () => {
      window.history.go(-1);
      this.router.navigate();
    };
    const button = new Button("about-button", "Назад", handler);
    return button;
  }
}
