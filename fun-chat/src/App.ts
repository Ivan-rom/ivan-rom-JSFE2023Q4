import Router from "./router/Router";

import { Route } from "./types";
import AboutView from "./views/AboutView/AboutView";
import ChatView from "./views/ChatView/ChatView";
import LoginView from "./views/LoginView/LoginView";

class App {
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
      {
        path: "about",
        callback: () => {
          document.body.innerHTML = "";
          document.body.append(new AboutView(this.router).component);
        },
      },
    ];
    return routes;
  }
}

export default new App();
