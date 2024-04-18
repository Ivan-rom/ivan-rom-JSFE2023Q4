import API from "../../API/API";
import Aside from "../../components/Aside/Aside";
import Chat from "../../components/Chat/Chat";
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

  private chat: Chat;

  private user: string;

  constructor(router: Router, api: API) {
    super("chat");
    this.router = router;
    this.api = api;
    this.user = "";

    api.socket.addEventListener("open", () => {
      const userData = JSON.parse(
        sessionStorage.getItem("chat-user")!,
      ) as SavedUser;

      this.user = userData.login;
      this.api.login(userData);
    });

    this.api.subscribe(ServerTypes.USER_LOGIN, (e: MessageEvent) => {
      const data = JSON.parse(e.data) as ServerMessage<{ user: SavedUser }>;
      this.user = data.payload.user.login;
      this.getUsers();
      header.updateName(this.user);
    });

    this.aside = new Aside();
    this.chat = new Chat(api);
    const header = new Header(router, api);
    const footer = new Footer();

    this.append([header, this.aside, this.chat, footer]);

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
      this.api.subscribe(ServerTypes.USER_ACTIVE, (e: MessageEvent) => {
        const data = JSON.parse(e.data) as ServerMessage<{ users: User[] }>;
        res(data.payload.users);
      });
    });
  }
  getInactiveUsers() {
    return new Promise<User[]>((res) => {
      this.api.getUsers(ServerTypes.USER_INACTIVE);
      this.api.subscribe(ServerTypes.USER_INACTIVE, (e: MessageEvent) => {
        const data = JSON.parse(e.data) as ServerMessage<{ users: User[] }>;
        res(data.payload.users);
      });
    });
  }
}
