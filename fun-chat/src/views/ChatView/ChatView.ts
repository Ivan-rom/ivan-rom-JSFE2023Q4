import API from "../../API/API";
import Aside from "../../components/Aside/Aside";
import Chat from "../../components/Chat/Chat";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Router from "../../router/Router";
import { SavedUser, ServerMessage, ServerTypes, User } from "../../types";
import View from "../View";

import "./chatView.css";

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

    this.aside = new Aside();
    this.chat = new Chat(api);

    const header = new Header(router, api);
    const footer = new Footer();

    if (api.socket.readyState === 1) this.getUsers();

    api.socket.addEventListener("open", () => {
      const userData = JSON.parse(
        sessionStorage.getItem("chat-user")!,
      ) as SavedUser;
      this.user = userData.login;
      this.api.login(userData);
    });

    this.api.subscribe(ServerTypes.USER_LOGIN, this.getUsers.bind(this));
    api.subscribe(
      ServerTypes.USER_EXTERNAL_LOGIN,
      this.aside.updateUser.bind(this.aside),
    );
    api.subscribe(
      ServerTypes.USER_EXTERNAL_LOGOUT,
      this.aside.updateUser.bind(this.aside),
    );

    this.append([header, this.aside, this.chat, footer]);
  }

  private getUsers() {
    const userData = JSON.parse(
      sessionStorage.getItem("chat-user")!,
    ) as SavedUser;
    this.user = userData.login;

    Promise.all([this.getActiveUsers(), this.getInactiveUsers()]).then(
      (data) => {
        const users = data.flat();
        const userIndex = users.findIndex((el) => el.login === this.user);
        users.splice(userIndex, 1);
        this.aside.updateUsers(users);
      },
    );
  }

  private getActiveUsers() {
    return new Promise<User[]>((res) => {
      this.api.getUsers(ServerTypes.USER_ACTIVE);
      this.api.subscribe(ServerTypes.USER_ACTIVE, (e: MessageEvent) => {
        const data = JSON.parse(e.data) as ServerMessage<{ users: User[] }>;
        res(data.payload.users);
      });
    });
  }

  private getInactiveUsers() {
    return new Promise<User[]>((res) => {
      this.api.getUsers(ServerTypes.USER_INACTIVE);
      this.api.subscribe(ServerTypes.USER_INACTIVE, (e: MessageEvent) => {
        const data = JSON.parse(e.data) as ServerMessage<{ users: User[] }>;
        res(data.payload.users);
      });
    });
  }
}
