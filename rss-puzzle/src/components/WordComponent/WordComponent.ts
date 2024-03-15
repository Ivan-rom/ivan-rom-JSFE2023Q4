import { BaseComponent, Params } from '../../BaseComponent';

import './WordComponent.css';

export class WordComponent extends BaseComponent {
    constructor(text: string, params?: Params) {
        super({ ...params, tag: 'span', className: 'word', textContent: text });
    }

    setWidth() {
        const word = this.component;
        this.setDataset('width', word.offsetWidth.toString());
        word.setAttribute('style', `width: ${word.dataset.width}px`);
    }
}
