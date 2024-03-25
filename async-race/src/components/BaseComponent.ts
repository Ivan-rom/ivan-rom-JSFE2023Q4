export type Params<T extends HTMLElement = HTMLElement> = Partial<
  Omit<
    T,
    "style" | "dataset" | "classList" | "children" | "tagName" | "className"
  >
> & {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
};

export default class BaseComponent<T extends HTMLElement = HTMLElement> {
  component: T;

  constructor(params?: Params<T>, children?: (HTMLElement | BaseComponent)[]) {
    const component = document.createElement(params?.tag || "div") as T;
    this.component = Object.assign(component, params);
    if (children) this.append(children);
  }

  append(children: (HTMLElement | BaseComponent)[]) {
    children.forEach((child) => {
      if (child instanceof BaseComponent)
        this.component.append(child.component);
      else this.component.append(child);
    });
  }

  remove() {
    this.component.remove();
  }
}
