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
  MSG_FROM_USER = "MSG_FROM_USER",
  MSG_SEND = "MSG_SEND",
  MSG_DELETE = "MSG_DELETE",
}

export type MessageType = {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: string;
  status: {
    isDelivered: boolean;
    isReaded: boolean;
    isEdited: boolean;
  };
};

export type ServerMessage<T = null> = {
  id: string;
  type: ServerTypes;
  payload: T;
};
