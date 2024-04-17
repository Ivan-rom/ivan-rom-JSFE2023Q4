import API from "../../API/API";
import Aside from "../../components/Aside/Aside";
import Component from "../../components/Component";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Router from "../../router/Router";
import { SavedUser, ServerMessage, ServerTypes, User } from "../../types";
import View from "../View";

export default class ChatView extends View {
  private router: Router;

  private api: API;

  private aside: Aside;

  constructor(router: Router, api: API) {
    super("chat");
    this.router = router;
    this.api = api;

    this.aside = new Aside();
    const header = new Header(router, api);
    const footer = new Footer();

    this.append([header, this.aside, footer]);

    api.socket.addEventListener("open", () => {
      this.api.login(JSON.parse(sessionStorage.getItem("chat-user")!));
    });

    api.socket.addEventListener("message", (e) => {
      const data = JSON.parse(e.data) as ServerMessage<{ user: SavedUser }>;
      if (data.type === ServerTypes.USER_LOGIN) {
        this.getUsers();
        header.updateName(data.payload.user);
      }
    });

    if (api.socket.readyState === 1) this.getUsers();
  }

  private getUsers() {
    this.getActiveUsers().then((activeUsers) => {
      this.getInactiveUsers().then((inactiveUsers) => {
        this.aside.updateContent([...activeUsers, ...inactiveUsers]);
      });
    });
  }

  getActiveUsers() {
    return new Promise<User[]>((res) => {
      this.api.getUsers(ServerTypes.USER_ACTIVE);
      this.api.socket.addEventListener("message", (e: MessageEvent) => {
        const data = JSON.parse(e.data) as ServerMessage<{ users: User[] }>;

        if (data.type === ServerTypes.USER_ACTIVE) res(data.payload.users);
      });
    });
  }
  getInactiveUsers() {
    return new Promise<User[]>((res) => {
      this.api.getUsers(ServerTypes.USER_INACTIVE);
      this.api.socket.addEventListener("message", (e: MessageEvent) => {
        const data = JSON.parse(e.data) as ServerMessage<{ users: User[] }>;

        if (data.type === ServerTypes.USER_INACTIVE) res(data.payload.users);
      });
    });
  }
}
