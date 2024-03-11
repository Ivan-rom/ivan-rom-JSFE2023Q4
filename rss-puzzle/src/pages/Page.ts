import { BaseComponent } from '../BaseComponent';

export class Page<T extends HTMLElement = HTMLElement> extends BaseComponent {
    constructor(content: T, classList: string[] = []) {
        super({ tagName: 'main', classList: ['main', ...classList] });
        if (content) this.append([content]);
    }
}
