import { BaseComponent, Params } from '../../BaseComponent';

import './WordComponent.css';

export class WordComponent extends BaseComponent {
    constructor(text: string, params?: Params) {
        super({ ...params, tag: 'span', className: 'word', textContent: text });
    }
}
