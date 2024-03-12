import { ComponentEvent } from './types';

type Params = {
    classList?: string[];
    tagName?: keyof HTMLElementTagNameMap;
    event?: ComponentEvent;
    text?: string;
};

export class BaseComponent<T extends HTMLElement = HTMLElement> {
    protected component: T;

    constructor({ classList = [], tagName = 'div', text = '', event }: Params) {
        this.component = this.createElement(tagName) as T;
        classList?.length !== 0 && this.component.classList.add(...classList);

        if (event) this.component.addEventListener(event.type, event.callback);

        if (text) this.component.textContent = text;
    }

    createElement(tagName: string) {
        return document.createElement(tagName);
    }

    append(children: (BaseComponent | HTMLElement)[]) {
        children.forEach((child) => {
            if (child instanceof BaseComponent) {
                this.component.append(child.getComponent());
            } else {
                this.component.append(child);
            }
        });
    }

    getComponent() {
        return this.component;
    }

    clear(): T {
        this.component.innerHTML = '';
        return this.component;
    }
}
