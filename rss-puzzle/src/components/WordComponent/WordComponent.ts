import { BaseComponent, Params } from '../../BaseComponent';

import './WordComponent.css';

export default class WordComponent extends BaseComponent {
    constructor(text: string, params?: Params) {
        super({ ...params, tag: 'span', className: 'word', textContent: text, draggable: true });
    }

    setWidth() {
        const word = this.component;
        this.setDataset('width', word.offsetWidth.toString());
        word.setAttribute('style', `width: ${word.dataset.width}px; flex-grow: 0`);
    }

    // dragStart(ev: DragEvent) {
    //     // eslint-disable-next-line no-param-reassign
    //     ev.dataTransfer!.dropEffect = 'move';
    //     console.log(this.component.dataset.width);

    //     ev.dataTransfer!.setData('text', this.component.dataset.width!);
    //     ev.dataTransfer?.items.add(this.component.dataset.width!, 'width');
    //     console.log(ev.dataTransfer);
    // }
}
