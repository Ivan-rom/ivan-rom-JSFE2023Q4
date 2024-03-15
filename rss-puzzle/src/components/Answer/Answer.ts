import { BaseComponent } from '../../BaseComponent';

import './answer.css';

export default class Answer extends BaseComponent {
    fields: HTMLElement[];

    activeFields: HTMLElement[];

    words: (HTMLElement | null)[];

    sentence: string;

    constructor(length: number, sentence: string) {
        super({ className: 'answer' });
        this.sentence = sentence;

        this.words = [];

        this.fields = [];
        this.activeFields = [];

        for (let i = 0; i < length; i += 1) {
            this.createField(i);
            this.words[i] = null;
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
        this.words[+(activeField.dataset.index as string)] = component;
        activeField.append(component);
        activeField.setAttribute('style', `width: ${component.dataset.width}px`);
        this.activeFields.shift();
    }

    removeWord(index: string) {
        this.words.forEach((word) => {
            word?.classList.remove('correct');
            word?.classList.remove('wrong');
        });
        const field = this.fields[+index];
        this.words[+index] = null;
        this.activeFields.push(field);
        this.sortFields(this.activeFields);
        field.setAttribute('style', 'width: 0');
    }

    isSolved(): boolean {
        let result = true;
        const words = this.sentence.split(' ');
        for (let i = 0; i < this.words.length; i += 1) {
            const element = this.words[i];
            if (element?.textContent !== words[i]) {
                element?.classList.add('wrong');
                result = false;
            } else {
                element?.classList.add('correct');
            }
        }
        return result;
    }
}
