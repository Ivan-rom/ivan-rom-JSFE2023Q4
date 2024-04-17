import { SavedUser, ServerTypes } from "../types";

export default class API {
  socket: WebSocket;

  constructor() {
    const url = "ws://localhost";
    const port = "4000";
    this.socket = new WebSocket(`${url}:${port}`);
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
    this.send<{ user: SavedUser }>("user_login", ServerTypes.USER_LOGOUT, {
      user,
    });
  }

  getUsers(type: ServerTypes.USER_INACTIVE | ServerTypes.USER_ACTIVE) {
    this.send("get_users", type);
  }
}
