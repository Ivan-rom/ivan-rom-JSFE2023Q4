import { ComponentEvent } from './types';

export type Params<T extends HTMLElement = HTMLElement> = Partial<
    Omit<T, 'style' | 'dataset' | 'classList' | 'children' | 'tagName' | 'className'>
> & {
    tag?: keyof HTMLElementTagNameMap;
    event?: ComponentEvent;
    text?: string;
    className?: string;
};

export class BaseComponent<T extends HTMLElement = HTMLElement> {
    protected component: T;

    constructor(props: Params<T>) {
        const component = this.createElement(props.tag || 'div') as T;
        this.component = Object.assign(component, props);

        if (props.event) this.component.addEventListener(props.event.type, props.event.callback);
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
