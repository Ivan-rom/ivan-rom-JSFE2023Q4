import { BaseComponent } from '../BaseComponent';

export class Page<T extends HTMLElement = HTMLElement> extends BaseComponent<T> {
    constructor(content?: HTMLElement | BaseComponent, classList: string[] = []) {
        super({ tagName: 'main', classList: ['main', ...classList] });
        if (content) this.append([content]);
    }

    render() {}
}
