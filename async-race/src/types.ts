export type CarType = {
  id: number;
  name: string;
  color: string;
};

export type WinnerType = {
  id: number;
  wins: number;
  time: number;
};

export type Result = {
  velocity: number;
  distance: number;
};

export enum Order {
  ASC = "ASC",
  DESC = "DESC",
}

export enum Sorting {
  TIME = "time",
  WINS = "wins",
}
