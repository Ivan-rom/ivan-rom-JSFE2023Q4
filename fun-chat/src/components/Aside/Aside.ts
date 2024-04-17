import { SavedUser, User } from "../../types";
import Component from "../Component";

export default class Aside extends Component {
  private users: User[];

  private usersList: Component;

  constructor() {
    super({ tag: "aside", className: "chat-aside aside" });
    this.users = [];
    this.usersList = this.createContent();
    this.append([this.usersList]);
  }

  private createContent(): Component {
    const ul = new Component<HTMLUListElement>({
      tag: "ul",
      className: "aside-list",
    });
    return ul;
  }

  private updateUsers(users: User[]) {
    const { login } = JSON.parse(
      sessionStorage.getItem("chat-user")!,
    ) as SavedUser;
    const userIndex = users.findIndex((el) => el.login === login);
    const filteredUsers = [...users];
    filteredUsers.splice(userIndex, 1);

    this.users = filteredUsers;
  }

  updateContent(users: User[]) {
    this.updateUsers(users);

    this.usersList.component.innerHTML = "";
    this.users.forEach((user) => {
      const userComponent = new Component<HTMLLIElement>({
        tag: "li",
        className: `aside-element user ${user.isLogined ? "logged" : ""}`,
        textContent: user.login,
      });
      this.usersList.append([userComponent]);
    });
  }
}
