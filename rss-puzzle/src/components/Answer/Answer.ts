import { BaseComponent } from '../../BaseComponent';

import './answer.css';

export default class Answer extends BaseComponent {
    fields: HTMLElement[];

    activeFields: HTMLElement[];

    words: (HTMLElement | null)[];

    sentence: string;

    constructor(length: number, sentence: string, dragOver: (e: DragEvent) => void, drop: (e: DragEvent) => void) {
        super({ className: 'answer' });
        this.sentence = sentence;

        this.words = [];

        this.fields = [];
        this.activeFields = [];

        for (let i = 0; i < length; i += 1) {
            this.createField(i, dragOver, drop);
            this.words[i] = null;
        }
    }

    createField(index: number, dragOver: (e: DragEvent) => void, drop: (e: DragEvent) => void) {
        const field = new BaseComponent({
            className: 'field',
            ondrop: drop,
            ondragover: dragOver,
            ondragleave: this.dragLeave,
        });
        field.setDataset('index', index.toString());
        this.append([field]);

        this.fields.push(field.getComponent());
        this.activeFields.push(field.getComponent());
        this.sortFields(this.activeFields);
    }

    sortFields(fields: HTMLElement[]) {
        return fields.sort((a, b) => +(a.dataset.index as string) - +(b.dataset.index as string));
    }

    appendWord(child: HTMLElement | BaseComponent<HTMLElement>, index?: string): void {
        let activeFieldIndex: number;
        if (index) {
            activeFieldIndex = this.activeFields.findIndex((field) => field.dataset.index === index);
        } else {
            activeFieldIndex = 0;
        }
        const activeField = this.activeFields[activeFieldIndex];
        console.log(activeField);
        if (activeField) {
            const component = child instanceof BaseComponent ? child.getComponent() : child;
            this.words[+(activeField.dataset.index as string)] = component;
            activeField.append(component);
            activeField.setAttribute('style', `width: ${component.dataset.width}px`);
            this.activeFields.splice(activeFieldIndex, 1);
        }
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

    dragLeave(ev: DragEvent) {
        const target = ev.target as HTMLElement;
        if (target.className === 'field') target.removeAttribute('style');
    }

    clearFields(dropElement?: HTMLElement) {
        this.activeFields.filter((field) => field !== dropElement).forEach((field) => field.removeAttribute('style'));
    }

    // dragoverHandler(ev: DragEvent) {
    //     ev.preventDefault();

    //     const target = ev.target as HTMLElement;
    //     // eslint-disable-next-line no-param-reassign
    //     if (ev.dataTransfer) ev.dataTransfer.dropEffect = 'move';
    //     if (target.children.length === 0) {
    //         const width = ev.dataTransfer?.getData('text');
    //         console.log(ev.dataTransfer);
    //         target.setAttribute('style', `width: ${width}px`);
    //     }
    // }

    // dropHandler(ev: DragEvent) {
    //     ev.preventDefault();
    //     // Get the id of the target and add the moved element to the target's DOM
    //     // if (this.component.children) {
    //     //     const width = (ev.dataTransfer as DataTransfer).getData('width');
    //     //     this.component.setAttribute('style', `width: ${width}px`);
    //     // }
    // }
}
