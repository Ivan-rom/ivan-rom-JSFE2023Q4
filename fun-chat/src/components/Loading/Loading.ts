import Component from "../Component";

import "./loading.css";

export default class Loading extends Component {
  constructor(text: string) {
    super({ className: "loading" });
    const content = new Component({
      className: "loading-content",
      textContent: text,
    });
    const backdrop = new Component({ className: "loading-backdrop" });
    this.append([backdrop, content]);
  }
}
