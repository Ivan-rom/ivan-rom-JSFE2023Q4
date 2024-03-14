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

    appendWord(children: HTMLElement | BaseComponent<HTMLElement>): void {
        this.fields[0].append(children instanceof BaseComponent ? children.getComponent() : children);
        this.fields.shift();
    }
}
