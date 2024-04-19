import API from "../../API/API";
import Button from "../../components/Button/Button";
import Component from "../../components/Component";
import Loading from "../../components/Loading/Loading";
import LoginForm from "../../components/LoginForm/LoginForm";
import Router from "../../router/Router";
import { SavedUser, ServerTypes } from "../../types";
import View from "../View";

import "./loginVew.css";

export default class LoginView extends View {
  private router: Router;

  private api: API;

  constructor(router: Router, api: API) {
    super("login");
    this.router = router;
    this.api = api;

    this.append([this.createForm(), this.createAboutButton()]);
  }

  private createAboutButton(): Button {
    return new Button("login-button login-about", "Инфо", () =>
      this.router.navigate("about"),
    );
  }

  private createForm(): Component<HTMLFormElement> {
    const loading = new Loading("Выполняется авторизация");
    const user: SavedUser = { login: "", password: "" };

    const handler = (login: string, password: string) => {
      this.append([loading]);
      user.login = login;
      user.password = password;
      this.api.login({ login, password });
    };

    this.api.subscribe(ServerTypes.USER_LOGIN, () => {
      loading.remove();
      sessionStorage.setItem("chat-user", JSON.stringify(user));
      this.router.navigate("chat");
    });
    const form = new LoginForm(handler.bind(this));
    return form;
  }
}
