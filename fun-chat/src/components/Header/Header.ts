import API from "../../API/API";
import Router from "../../router/Router";
import { SavedUser } from "../../types";
import Button from "../Button/Button";
import Component from "../Component";

import "./header.css";

export default class Header extends Component {
  private router: Router;

  private api: API;

  user: Component;

  constructor(router: Router, api: API) {
    super({ className: "chat-header header" });
    this.router = router;
    this.api = api;

    this.user = new Component({
      tag: "p",
      className: "header-user",
    });

    const user = JSON.parse(sessionStorage.getItem("chat-user")!) as SavedUser;
    this.updateName(user.login);

    this.append([this.user, ...this.createContent()]);
  }

  updateName(user: string) {
    this.user.component.textContent = `Пользователь: ${user}`;
  }

  private createContent(): Component[] {
    const about = new Button(
      "header-button header-button_about",
      "Инфо",
      () => {
        this.router.navigate("about");
      },
    );
    const title = new Component({
      tag: "h2",
      textContent: "Fun chat",
      className: "header-title",
    });
    const logout = new Button(
      "header-button header-button_logout",
      "Выйти",
      () => {
        const user = JSON.parse(
          sessionStorage.getItem("chat-user")!,
        ) as SavedUser;

        this.api.logout(user);
        sessionStorage.removeItem("chat-user");
        this.router.navigate("login");
      },
    );
    return [title, about, logout];
  }
}
