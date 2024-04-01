import Component from "../Component";

import "./navigation.css";

export default class Navigation extends Component {
  constructor() {
    super({ tag: "nav", className: "nav" });

    const garageButton = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button button-nav",
      textContent: "Garage",
    });
    const winnersButton = new Component<HTMLButtonElement>({
      tag: "button",
      className: "button button-nav",
      textContent: "Winners",
    });

    const garageHandler = () => {
      window.location.hash = "garage";
      garageButton.component.disabled = true;
      winnersButton.component.disabled = false;
    };
    const winnersHandler = () => {
      window.location.hash = "winners";
      winnersButton.component.disabled = true;
      garageButton.component.disabled = false;
    };

    winnersButton.component.onclick = winnersHandler.bind(this);
    garageButton.component.onclick = garageHandler.bind(this);

    const path = window.location.hash.substring(1);

    winnersButton.component.disabled = path === "winners";
    garageButton.component.disabled = path === "garage";

    this.append([garageButton, winnersButton]);
  }
}
