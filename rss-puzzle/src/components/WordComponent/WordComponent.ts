import Api from '../../API/api';
import { BaseComponent, Params } from '../../BaseComponent';

import './WordComponent.css';

export default class WordComponent extends BaseComponent {
    constructor(text: string, params?: Params) {
        super({ ...params, className: 'word', draggable: true });
        const content = new BaseComponent({ className: 'word-content', textContent: text });
        const after = new BaseComponent({ className: 'after' });
        this.append([content, after]);
    }

    setWidth(image: string, rowIndex: number) {
        const word = this.component;
        this.setDataset('width', word.offsetWidth.toString());
        word.style.width = `${word.dataset.width}px`;
        word.style.flexGrow = `0`;
        const imagePath = `${Api.path}images/${image}`;
        console.log(word.offsetLeft);

        word.style.backgroundImage = `url(${imagePath})`;
        word.style.backgroundPosition = `-${word.offsetLeft - 15}px -${word.offsetHeight * rowIndex}px`;
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
