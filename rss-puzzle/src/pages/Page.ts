import { BaseComponent } from '../BaseComponent';

export class Page<T extends HTMLElement = HTMLElement> extends BaseComponent<T> {
    constructor(content: HTMLElement | BaseComponent, classList: string[] = []) {
        super({ tagName: 'main', classList: ['main', ...classList] });
        if (content) {
            if (content instanceof BaseComponent) {
                this.append([content.getComponent()]);
            } else {
                this.append([content]);
            }
        }
    }
}
