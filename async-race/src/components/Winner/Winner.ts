import { CarType, WinnerType } from "../../types";
import BaseComponent from "../BaseComponent";

export default class Winner extends BaseComponent<HTMLTableRowElement> {
  id: number;

  name: string;

  color: string;

  wins: number;

  time: number;

  constructor({ id, name, color, wins, time }: CarType & WinnerType) {
    super({ tag: "tr", className: "winner" });

    this.id = id;
    this.name = name;
    this.color = color;
    this.wins = wins;
    this.time = time;

    this.render();
  }

  render() {
    this.append([
      new BaseComponent<HTMLTableCellElement>({
        tag: "td",
        textContent: `${this.id}`,
      }),
      new BaseComponent<HTMLTableCellElement>({
        tag: "td",
        textContent: `${this.color}`,
      }),
      new BaseComponent<HTMLTableCellElement>({
        tag: "td",
        textContent: `${this.name}`,
      }),
      new BaseComponent<HTMLTableCellElement>({
        tag: "td",
        textContent: `${this.wins}`,
      }),
      new BaseComponent<HTMLTableCellElement>({
        tag: "td",
        textContent: `${this.time}`,
      }),
    ]);
  }
}
