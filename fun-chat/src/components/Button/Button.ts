import Component from "../Component";

import "./button.css";

export default class Button extends Component<HTMLButtonElement> {
  constructor(className: string, text: string, onclick?: (e?: Event) => void) {
    super({
      tag: "button",
      className: `button ${className}`,
      onclick,
      textContent: text,
    });
  }
}
