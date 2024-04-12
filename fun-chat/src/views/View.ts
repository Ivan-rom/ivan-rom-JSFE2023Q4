import Component from "../components/Component";

export default class View extends Component {
  constructor(className: string) {
    super({ tag: "main", className: `view ${className}` });
  }
}
