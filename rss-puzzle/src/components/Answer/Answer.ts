import { BaseComponent } from '../../BaseComponent';

import './answer.css';

export class Answer extends BaseComponent {
    fields: HTMLElement[];
    activeFields: HTMLElement[];
    constructor(length: number) {
        super({ className: 'answer' });

        this.fields = [];
        this.activeFields = [];

        for (let i = 0; i < length; i++) {
            this.createField(i);
        }
    }

    createField(index: number) {
        const field = new BaseComponent({ className: 'field' });
        field.setDataset('index', index.toString());
        this.append([field]);

        this.fields.push(field.getComponent());
        this.activeFields.push(field.getComponent());
        this.sortFields(this.activeFields);
    }

    sortFields(fields: HTMLElement[]) {
        return fields.sort((a, b) => +(a.dataset.index as string) - +(b.dataset.index as string));
    }

    appendWord(child: HTMLElement | BaseComponent<HTMLElement>): void {
        const activeField = this.activeFields[0];
        const component = child instanceof BaseComponent ? child.getComponent() : child;
        activeField.append(component);
        activeField.setAttribute('style', `width: ${component.dataset.width}px`);
        this.activeFields.shift();
    }

    removeWord(index: string) {
        const field = this.fields[+index];
        this.activeFields.push(field);
        this.sortFields(this.activeFields);
        field.setAttribute('style', 'width: 0');
    }
}
