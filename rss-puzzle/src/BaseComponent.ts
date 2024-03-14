import { ComponentEvent } from './types';

export type Params<T extends HTMLElement = HTMLElement> = Partial<
    Omit<T, 'style' | 'dataset' | 'classList' | 'children' | 'tagName' | 'className'>
> & {
    tag?: keyof HTMLElementTagNameMap;
    event?: ComponentEvent;
    className?: string;
};

export class BaseComponent<T extends HTMLElement = HTMLElement> {
    protected component: T;

    constructor(props?: Params<T>, children: (HTMLElement | BaseComponent)[] = []) {
        const component = this.createElement(props?.tag || 'div') as T;
        this.component = Object.assign(component, props);

        if (props?.event) this.component.addEventListener(props.event.type, props.event.callback);
        this.append(children);
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

    setDataset(name: string, value: string) {
        this.component.dataset[name] = value;
    }

    getComponent() {
        return this.component;
    }

    clear(): T {
        this.component.innerHTML = '';
        return this.component;
    }
}
