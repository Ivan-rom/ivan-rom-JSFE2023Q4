import { BaseComponent, Params } from '../../BaseComponent.ts';

import './WordComponent.css';

export default class WordComponent extends BaseComponent {
    constructor(text: string, params?: Params) {
        super({ ...params, tag: 'span', className: 'word', textContent: text });
    }

    setWidth() {
        const word = this.component;
        this.setDataset('width', word.offsetWidth.toString());
        word.setAttribute('style', `width: ${word.dataset.width}px; flex-grow: 0`);
    }
}
