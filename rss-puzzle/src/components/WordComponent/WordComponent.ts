import { BaseComponent, Params } from '../../BaseComponent';

import './WordComponent.css';

export default class WordComponent extends BaseComponent {
    constructor(text: string, params?: Params) {
        super({ ...params, className: 'word', draggable: true });
        const content = new BaseComponent({ className: 'word-content', textContent: text });
        const after = new BaseComponent({ className: 'after' });
        this.append([content, after]);
    }

    setWidth() {
        const word = this.component;
        this.setDataset('width', word.offsetWidth.toString());
        word.setAttribute('style', `width: ${word.dataset.width}px; flex-grow: 0`);
    }

    disable() {
        this.component.classList.add('disabled');
        this.component.onclick = null;
        this.component.ondragstart = null;
        this.component.ontouchmove = null;
        this.component.ontouchend = null;
        this.component.ontouchstart = null;
    }
}
