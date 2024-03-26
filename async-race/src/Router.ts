import Navigation from "./components/Navigation/Navigation";
import Garage from "./views/GarageView/GarageView";
import View from "./views/View";
import WinnersView from "./views/WinnersView/WinnersView";

const views = {
  garage: Garage,
  winners: WinnersView,
};

class Router {
  currentView?: View;

  path: string;

  constructor() {
    document.body.append(new Navigation().component);
    window.addEventListener("hashchange", this.changeHash.bind(this));
    this.path = window.location.hash.substring(1);
    this.render();
    if (!localStorage.getItem("garage-page"))
      localStorage.setItem("garage-page", "1");
    if (!localStorage.getItem("winners-page"))
      localStorage.setItem("winners-page", "1");
  }

  changeHash() {
    this.path = window.location.hash.substring(1);
    this.render();
  }

  render() {
    if (!(this.path === "garage" || this.path === "winners")) {
      window.location.hash = "garage";
    } else {
      this.updateView(this.path);
    }
  }

  updateView(path: "garage" | "winners" = "garage") {
    if (this.currentView) this.currentView.remove();
    this.currentView = views[path];
    this.currentView.render();
  }
}

export default new Router();
