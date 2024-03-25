import Garage from "./views/GarageView/GarageView";

const views = {
  garage: Garage,
};

class Router {
  path: string;

  constructor() {
    window.addEventListener("hashchange", this.changeHash.bind(this));
    this.path = window.location.hash.substring(1);
    this.updateView();
  }

  changeHash() {
    this.path = window.location.hash.substring(1);
    this.updateView();
  }

  updateView() {
    if (this.path === "garage") {
      views.garage.render();
    } else {
      window.location.hash = "garage";
    }
  }
}

export default new Router();
