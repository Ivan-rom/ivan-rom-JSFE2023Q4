import { Route } from "../types";

class Router {
  private routes: Route[];

  private currentPath?: string;

  constructor(routes: Route[]) {
    this.routes = routes;
    document.addEventListener("DOMContentLoaded", () => {
      const path = window.location.pathname.slice(1);
      this.navigate(path);
    });
    document.addEventListener("popstate", () => {
      const path = window.location.pathname.slice(1);
      this.navigate(path);
    });
  }

  navigate(path?: string) {
    if (path === this.currentPath) return;
    if (path === "") this.currentPath = "chat";
    else this.currentPath = path;

    let page;

    const user = localStorage.getItem("chat-user");

    if (user || path === "about") {
      page = this.routes.find((route) => route.path === this.currentPath);
    } else {
      page = this.routes.find((route) => route.path === "login");
    }

    if (page) {
      page.callback();

      let hash = "";
      if (page.path === "chat")
        hash = window.location.hash ? window.location.hash : "";

      if (page.path !== window.history.state)
        window.history.pushState(page.path, "", `/${page.path}${hash}`);
    } else {
      this.navigate("chat");
    }
  }
}

export default Router;
