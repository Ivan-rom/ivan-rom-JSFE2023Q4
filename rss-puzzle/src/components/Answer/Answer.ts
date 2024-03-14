import { BaseComponent } from '../../BaseComponent';

import './answer.css';

export class Answer extends BaseComponent {
    fields: HTMLElement[];
    constructor(length: number) {
        super({ className: 'answer' });
        this.fields = [];

        for (let i = 0; i < length; i++) {
            this.createField(i);
        }
    }

    createField(index: number) {
        const field = new BaseComponent({ className: 'field' });
        field.setDataset('index', index.toString());
        this.append([field]);

        this.fields.push(field.getComponent());
        this.fields.sort((a, b) => +(a.dataset.index as string) - +(b.dataset.index as string));
    }

    appendWord(child: HTMLElement | BaseComponent<HTMLElement>): void {
        const field = this.fields[0];
        const component = child instanceof BaseComponent ? child.getComponent() : child;
        field.append(component);
        field.setAttribute('style', `width: ${component.dataset.width}px`);
        this.fields.shift();
    }
}
