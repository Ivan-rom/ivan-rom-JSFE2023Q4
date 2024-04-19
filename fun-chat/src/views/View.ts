import Component from "../components/Component";

import "./view.css";

export default class View extends Component {
  constructor(className: string) {
    super({ tag: "main", className: `view ${className}` });
  }
}
