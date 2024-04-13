import { Route } from "../types";
import ChatView from "../views/ChatView/ChatView";
import LoginView from "../views/LoginView/LoginView";

class Router {
  private routes: Route[];

  private currentPath: string;

  constructor(routes: Route[]) {
    this.currentPath = "";
    this.routes = routes;
    document.addEventListener("DOMContentLoaded", () => {
      const path = window.location.pathname.slice(1);
      this.navigate(path);
    });
  }

  navigate(path: string) {
    if (path === this.currentPath) return;
    this.currentPath = path;

    let page;

    const user = localStorage.getItem("chat-user");

    if (!user && path !== "about") {
      page = this.routes.find((route) => route.path === "login");
    } else {
      page = this.routes.find((route) => route.path === path);
    }

    if (page) {
      page.callback();
      window.history.pushState(null, "", `/${page.path}`);
    } else {
      this.navigate("chat");
      return;
    }
  }
}

const routes: Route[] = [
  {
    path: "login",
    callback: () => {
      document.body.innerHTML = "";
      document.body.append(new LoginView().component);
    },
  },
  {
    path: "chat",
    callback: () => {
      document.body.innerHTML = "";
      document.body.append(new ChatView().component);
    },
  },
];

export default new Router(routes);
