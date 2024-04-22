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

  private users: User[];

  constructor(router: Router, api: API) {
    super("chat");
    this.router = router;
    this.api = api;
    this.user = "";
    this.users = [];

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

    window.addEventListener("hashchange", this.updateChat.bind(this));

    this.api.subscribe(ServerTypes.USER_LOGIN, this.getUsers.bind(this));
    api.subscribe(
      ServerTypes.USER_EXTERNAL_LOGIN,
      this.userUpdateHandler.bind(this),
    );
    api.subscribe(
      ServerTypes.USER_EXTERNAL_LOGOUT,
      this.userUpdateHandler.bind(this),
    );

    this.append([header, this.aside, this.chat, footer]);
  }

  userUpdateHandler(e: MessageEvent) {
    const data = JSON.parse(e.data) as ServerMessage<{ user: User }>;
    this.chat.updateUser(data.payload.user);
    this.aside.updateUser(data.payload.user);
  }

  updateChat() {
    const login = window.location.hash.substring(1);

    const user = this.users.find((el) => el.login === login);
    this.chat.updateChat(user, []);
  }

  private getUsers() {
    const userData = JSON.parse(
      sessionStorage.getItem("chat-user")!,
    ) as SavedUser;
    this.user = userData.login;

    Promise.all([this.getActiveUsers(), this.getInactiveUsers()]).then(
      (data) => {
        this.updateUsers(data);
        this.updateChat();
      },
    );
  }

  updateUsers(data: User[][]) {
    const users = data.flat();
    const userIndex = users.findIndex((el) => el.login === this.user);
    users.splice(userIndex, 1);
    this.users = users;
    this.aside.filterUsers(this.users);
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
