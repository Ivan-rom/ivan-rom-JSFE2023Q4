import BaseComponent from "../components/BaseComponent";

export default class View extends BaseComponent {
  constructor(className: string) {
    super({ tag: "main", className: `view ${className}` });
  }

  render() {
    document.body.append(this.component);
  }
}
