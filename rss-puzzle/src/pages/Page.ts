import { BaseComponent } from '../BaseComponent';

export class Page<T extends HTMLElement = HTMLElement> extends BaseComponent {
    constructor(content: T) {
        super({ tagName: 'main', classList: ['main'] });
        if (content) this.append([content]);
    }
}
