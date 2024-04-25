import { CarType, WinnerType } from "../../types";
import Component from "../Component";

export default class Winner extends Component<HTMLTableRowElement> {
  id: number;

  name: string;

  color: string;

  wins: number;

  time: number;

  index: number;

  constructor(
    { id, name, color, wins, time }: CarType & WinnerType,
    index: number,
  ) {
    super({ tag: "tr", className: "winner" });

    this.id = id;
    this.name = name;
    this.color = color;
    this.wins = wins;
    this.time = time;
    this.index = index;

    this.render();
  }

  render() {
    const car = new Component({ className: "car" });
    car.component.style.backgroundColor = this.color;
    const index = new Component<HTMLTableCellElement>({
      tag: "td",
      textContent: `${this.index}`,
    });
    const carCell = new Component<HTMLTableCellElement>(
      {
        tag: "td",
      },
      [car],
    );
    const name = new Component<HTMLTableCellElement>({
      tag: "td",
      textContent: `${this.name}`,
    });
    const wins = new Component<HTMLTableCellElement>({
      tag: "td",
      textContent: `${this.wins}`,
    });
    const time = new Component<HTMLTableCellElement>({
      tag: "td",
      textContent: `${this.time}`,
    });
    this.append([index, carCell, name, wins, time]);
  }
}
