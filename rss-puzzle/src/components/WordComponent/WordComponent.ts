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
        const wordComponent = this.component;
        const [word, after] = this.component.children as unknown as HTMLElement[];
        this.setDataset('width', wordComponent.offsetWidth.toString());
        wordComponent.style.width = `${wordComponent.dataset.width}px`;
        wordComponent.style.flexGrow = `0`;
        const imagePath = `${Api.path}images/${image}`;

        const offsetLeft = wordComponent.offsetLeft - 15;
        const offsetTop = wordComponent.offsetHeight * rowIndex;

        word.style.backgroundImage = `url(${imagePath})`;
        word.style.backgroundPosition = `-${offsetLeft}px -${offsetTop}px`;
        after.style.backgroundImage = `url(${imagePath})`;
        after.style.backgroundPositionX = `${-(offsetLeft + word.offsetWidth)}px`;
        after.style.backgroundPositionY = `${-(offsetTop + wordComponent.offsetHeight / 2 - after.offsetHeight / 2)}px`;
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
