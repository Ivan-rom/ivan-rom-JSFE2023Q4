import API from "./API/API";
import Loading from "./components/Loading/Loading";
import Router from "./router/Router";
import { Route } from "./types";
import AboutView from "./views/AboutView/AboutView";
import ChatView from "./views/ChatView/ChatView";
import LoginView from "./views/LoginView/LoginView";
import View from "./views/View";

import "./app.css";

class App {
  routes: Route[];

  router: Router;

  api: API;

  constructor() {
    this.api = new API();
    const loading = new Loading("Подключение к серверу");
    document.body.appendChild(loading.component);
    this.api.socket.addEventListener("open", () => {
      loading.remove();
    });
    this.routes = this.createRoutes();
    this.router = new Router(this.routes);
  }

  createRoutes() {
    const views: { login: View | null; chat: View | null; about: View | null } =
      {
        login: null,
        chat: null,
        about: null,
      };
    const routes = [
      {
        path: "login",
        getView: () => {
          if (!views.login) views.login = new LoginView(this.router, this.api);
          return views.login;
        },
      },
      {
        path: "chat",
        getView: () => {
          if (!views.chat) views.chat = new ChatView(this.router, this.api);
          return views.chat;
        },
      },
      {
        path: "about",
        getView: () => {
          if (!views.about) views.about = new AboutView(this.router);
          return views.about;
        },
      },
    ];
    return routes;
  }
}

export default new App();
