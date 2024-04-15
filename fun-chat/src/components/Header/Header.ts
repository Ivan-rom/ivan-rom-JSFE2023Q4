import Router from "../../router/Router";
import Button from "../Button/Button";
import Component from "../Component";

export default class Header extends Component {
  private router: Router;

  constructor(router: Router) {
    super({ className: "chat-header" });
    this.router = router;
    this.append(this.createContent());
  }

  createContent(): Component[] {
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
        localStorage.removeItem("chat-user");
        this.router.navigate("login");
      },
    );
    return [about, title, logout];
  }
}
