import View from "./views/View";

export type Route = {
  path: string;
  getView: () => View;
};

export type User = {
  login: string;
  isLogined: boolean;
};

export type SavedUser = { login: string; password: string };

export enum ServerTypes {
  USER_ACTIVE = "USER_ACTIVE",
  USER_INACTIVE = "USER_INACTIVE",
  USER_LOGIN = "USER_LOGIN",
  USER_LOGOUT = "USER_LOGOUT",
}

export type ServerMessage<T> = {
  id: string;
  type: ServerTypes;
  payload: T;
};
