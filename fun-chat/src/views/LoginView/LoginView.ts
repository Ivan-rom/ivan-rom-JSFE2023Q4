import API from "../../API/API";
import Button from "../../components/Button/Button";
import Component from "../../components/Component";
import Loading from "../../components/Loading/Loading";
import LoginForm from "../../components/LoginForm/LoginForm";
import Router from "../../router/Router";
import { SavedUser, ServerMessage, ServerTypes, User } from "../../types";
import View from "../View";

export default class LoginView extends View {
  private router: Router;

  private api: API;

  constructor(router: Router, api: API) {
    super("login");
    this.router = router;
    this.api = api;

    this.append([this.createForm(), this.createAboutButton()]);
  }

  createAboutButton(): Button {
    return new Button("login-button login-about", "Инфо", () =>
      this.router.navigate("about"),
    );
  }

  private createForm(): Component<HTMLFormElement> {
    const handler = (login: string, password: string) => {
      const loading = new Loading("Выполняется авторизация");
      this.append([loading]);

      const user: SavedUser = { login, password };
      this.api.login(user);

      this.api.socket.addEventListener("message", (e: MessageEvent) => {
        const data = JSON.parse(e.data) as ServerMessage<{
          user: User;
        }>;

        if (data.type === ServerTypes.USER_LOGIN) {
          loading.remove();
          sessionStorage.setItem("chat-user", JSON.stringify(user));
          this.router.navigate("chat");
        }
      });
    };
    const form = new LoginForm(handler.bind(this));
    return form;
  }
}
