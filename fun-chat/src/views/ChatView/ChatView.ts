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

  private user: string;

  constructor(router: Router, api: API) {
    super("chat");
    this.router = router;
    this.api = api;
    this.user = "";

    this.aside = new Aside();
    const header = new Header(router, api);
    const footer = new Footer();

    this.append([header, this.aside, footer]);

    api.socket.addEventListener("open", () => {
      const userData = JSON.parse(
        sessionStorage.getItem("chat-user")!,
      ) as SavedUser;

      this.user = userData.login;
      this.api.login(userData);
    });

    api.socket.addEventListener("message", (e) => {
      const data = JSON.parse(e.data) as ServerMessage<{ user: SavedUser }>;
      if (data.type === ServerTypes.USER_LOGIN) {
        this.user = data.payload.user.login;
        this.getUsers();
        header.updateName(this.user);
      }
    });

    if (api.socket.readyState === 1) this.getUsers();
  }

  private getUsers() {
    this.getActiveUsers().then((activeUsers) => {
      this.getInactiveUsers().then((inactiveUsers) => {
        const users = [...activeUsers, ...inactiveUsers];
        const userIndex = users.findIndex((el) => el.login === this.user);
        users.splice(userIndex, 1);
        this.aside.updateUsers(users);
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
