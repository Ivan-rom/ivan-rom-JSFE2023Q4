import { SavedUser, ServerMessage, ServerTypes } from "../types";

export default class API {
  socket: WebSocket;

  listeners: {
    type: ServerTypes;
    callback: (e: MessageEvent) => void;
  }[];

  constructor() {
    const url = "ws://localhost";
    const port = "4000";
    this.listeners = [];
    this.socket = new WebSocket(`${url}:${port}`);

    this.socket.addEventListener("message", (e: MessageEvent) => {
      const data = JSON.parse(e.data) as ServerMessage<null>;
      this.listeners.forEach((listener) => {
        if (listener.type === data.type) listener.callback(e);
      });
    });
  }

  subscribe(type: ServerTypes, callback: (data: MessageEvent) => void) {
    this.listeners.push({
      type,
      callback,
    });
  }

  private send<T>(id: string, type: ServerTypes, payload?: T) {
    this.socket.send(
      JSON.stringify({
        id,
        type,
        payload: payload || null,
      }),
    );
  }

  login(user: SavedUser) {
    this.send<{ user: SavedUser }>("user_login", ServerTypes.USER_LOGIN, {
      user,
    });
  }

  logout(user: SavedUser) {
    this.send<{ user: SavedUser }>("user_logout", ServerTypes.USER_LOGOUT, {
      user,
    });
  }

  getUsers(type: ServerTypes.USER_INACTIVE | ServerTypes.USER_ACTIVE) {
    this.send("get_users", type);
  }

  sendMessage(message: { to: string; text: string }) {
    this.send("send_message", ServerTypes.MSG_SEND, { message });
  }

  getMessages(login: string) {
    this.send("get_messages", ServerTypes.MSG_FROM_USER, { user: { login } });
  }
}
