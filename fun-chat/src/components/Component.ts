export type Params<T extends HTMLElement = HTMLElement> = Partial<
  Omit<T, "tagName">
> & {
  tag?: keyof HTMLElementTagNameMap;
};

export default class Component<T extends HTMLElement = HTMLElement> {
  readonly component: T;

  constructor(params?: Params<T>, children?: (HTMLElement | Component)[]) {
    const component = document.createElement(params?.tag || "div") as T;
    this.component = Object.assign(component, params);
    if (children) this.append(children);
  }

  append(children: (HTMLElement | Component)[]) {
    children.forEach((child) => {
      if (child instanceof Component) this.component.append(child.component);
      else this.component.append(child);
    });
  }

  remove() {
    this.component.remove();
  }
}
