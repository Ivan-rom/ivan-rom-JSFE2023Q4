import { Route } from "../types";

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
    }
  }
}

export default Router;
