import Garage from "./views/GarageView/GarageView";
import WinnersView from "./views/WinnersView/WinnersView";

const views = {
  garage: Garage,
  winners: WinnersView,
};

class Router {
  path: string;

  constructor() {
    window.addEventListener("hashchange", this.changeHash.bind(this));
    this.path = window.location.hash.substring(1);
    this.updateView();
    if (!localStorage.getItem("garage-page"))
      localStorage.setItem("garage-page", "1");
    if (!localStorage.getItem("winners-page"))
      localStorage.setItem("winners-page", "1");
  }

  changeHash() {
    this.path = window.location.hash.substring(1);
    this.updateView();
  }

  updateView() {
    if (this.path === "garage") {
      views.garage.render();
    } else if (this.path === "winners") {
      views.winners.render();
    } else {
      window.location.hash = "garage";
    }
  }
}

export default new Router();
