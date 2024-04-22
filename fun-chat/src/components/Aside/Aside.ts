import { ServerMessage, User } from "../../types";
import Component from "../Component";

import "./aside.css";

export default class Aside extends Component {
  private users: User[];

  private inactiveUsersComponents: Component;

  private activeUsersComponents: Component;

  private search: Component;

  private filter: string;

  constructor() {
    super({ tag: "aside", className: "chat-aside aside" });
    this.users = [];
    this.filter = "";
    this.inactiveUsersComponents = this.createUserList();
    this.activeUsersComponents = this.createUserList("active");
    const usersList = new Component({ className: "users" }, [
      this.activeUsersComponents,
      this.inactiveUsersComponents,
    ]);
    this.search = this.createSearch();
    this.append([this.search, usersList]);
  }

  private createSearch(): Component {
    const input = new Component<HTMLInputElement>({
      tag: "input",
      className: "aside-search",
      type: "text",
      placeholder: "Поиск",
    });
    input.component.oninput = () => {
      console.log(this.filter);

      this.filter = input.component.value;
      this.updateUsers();
    };

    return input;
  }

  private createUserList(className: string = "inactive"): Component {
    const ul = new Component<HTMLUListElement>({
      tag: "ul",
      className: `aside-list ${className}`,
    });
    return ul;
  }

  updateUsers(users: User[] = this.users) {
    this.users = users;

    const copy = [...this.users];
    copy.filter((user) => !this.filter && user.login.startsWith(this.filter));

    this.updateContent(copy);
  }

  updateUser(e: MessageEvent) {
    const data = JSON.parse(e.data) as ServerMessage<{ user: User }>;
    const { user } = data.payload;

    // const usersComponent = user.isLogined
    //   ? this.inactiveUsersComponents.component
    //   : this.activeUsersComponents.component;

    // const userComp = Array.from(usersComponent.childNodes).find(
    //   (child) => child.textContent === user.login,
    // ) as HTMLElement;
    // if (userComp) userComp.remove();

    const foundIndex = this.users.findIndex((el) => el.login === user.login);
    if (foundIndex !== -1) this.users.splice(foundIndex, 1);
    this.users.push(user);
    this.updateUsers();
  }

  updateContent(users: User[]) {
    this.inactiveUsersComponents.component.innerHTML = "";
    this.activeUsersComponents.component.innerHTML = "";

    users.forEach((user) => {
      const userComponent = new Component<HTMLLIElement>({
        tag: "li",
        className: `aside-element user ${user.isLogined ? "active" : ""}`,
        textContent: user.login,
      });
      userComponent.component.onclick = () => {
        window.location.hash = user.login;
      };
      if (user.isLogined) this.activeUsersComponents.append([userComponent]);
      else this.inactiveUsersComponents.append([userComponent]);
    });
  }
}
