import { SavedUser, User } from "../../types";
import Button from "../Button/Button";
import Component from "../Component";

export default class Aside extends Component {
  private users: User[];

  private usersList: Component;

  private search: Component;

  constructor() {
    super({ tag: "aside", className: "chat-aside aside" });
    this.users = [];
    this.usersList = this.createUserList();
    this.search = this.createSearch();
    this.append([this.search, this.usersList]);
  }

  private createSearch(): Component {
    const input = new Component<HTMLInputElement>({
      tag: "input",
      className: "aside-search",
      type: "text",
    });
    input.component.oninput = () => {
      this.updateUsers(this.users, input.component.value);
    };

    return input;
  }

  private createUserList(): Component {
    const ul = new Component<HTMLUListElement>({
      tag: "ul",
      className: "aside-list",
    });
    return ul;
  }

  updateUsers(users: User[], filter: string = "") {
    this.users = JSON.parse(JSON.stringify(users));
    const filteredUsers =
      filter === ""
        ? JSON.parse(JSON.stringify(users))
        : (JSON.parse(JSON.stringify(users)) as User[]).filter((user) =>
            user.login.startsWith(filter),
          );
    this.updateContent(filteredUsers);
  }

  updateContent(users: User[]) {
    this.usersList.component.innerHTML = "";
    users.forEach((user) => {
      const userComponent = new Component<HTMLLIElement>({
        tag: "li",
        className: `aside-element user ${user.isLogined ? "logged" : ""}`,
        textContent: user.login,
      });
      userComponent.component.onclick = () => {
        window.location.hash = user.login;
      };
      this.usersList.append([userComponent]);
    });
  }
}
