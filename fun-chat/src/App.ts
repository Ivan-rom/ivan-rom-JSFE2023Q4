import Router from "./router/Router";

import { Route } from "./types";
import ChatView from "./views/ChatView/ChatView";
import LoginView from "./views/LoginView/LoginView";

export default class App {
  routes: Route[];

  router: Router;

  constructor() {
    this.routes = this.createRoutes();
    this.router = new Router(this.routes);
  }

  createRoutes() {
    const routes = [
      {
        path: "login",
        callback: () => {
          document.body.innerHTML = "";
          document.body.append(new LoginView(this.router).component);
        },
      },
      {
        path: "chat",
        callback: () => {
          document.body.innerHTML = "";
          document.body.append(new ChatView(this.router).component);
        },
      },
    ];
    return routes;
  }
}

new App();
