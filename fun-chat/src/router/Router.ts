import { Route } from "../types";

class Router {
  private routes: Route[];

  private currentPath?: string;

  constructor(routes: Route[]) {
    this.routes = routes;
    document.addEventListener("DOMContentLoaded", this.updateView.bind(this));
    document.addEventListener("popstate", this.updateView.bind(this));
  }

  private updateView() {
    const path = window.location.pathname.slice(1);
    this.navigate(path);
  }

  private removeCurrentView() {
    if (this.currentPath) {
      this.routes
        .find((route) => route.path === this.currentPath)
        ?.getView()
        .remove();
    }
  }

  navigate(path: string = "") {
    if (path === this.currentPath) return;

    let newPath = "";
    const user = sessionStorage.getItem("chat-user");

    this.removeCurrentView();
    if (!user && path !== "about") newPath = "login";
    else if (path === "" || path === "login") newPath = "chat";
    else newPath = path;

    const page = this.routes.find((route) => route.path === newPath);

    if (!page) {
      this.navigate("chat");
      return;
    }
    const view = page.getView();
    document.body.append(view.component);

    let hash = "";
    if (page.path === "chat")
      hash = window.location.hash ? window.location.hash : "";

    if (page.path !== window.history.state)
      window.history.pushState(page.path, "", `/${page.path}${hash}`);
    this.currentPath = page.path;
  }
}

export default Router;
