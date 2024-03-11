import { BaseComponent } from '../../BaseComponent';

export class Button extends BaseComponent<HTMLButtonElement> {
    constructor(text: string, callback: (event: Event) => void, classList: string[] = [], disabled: boolean = false) {
        super({ tagName: 'button', classList: ['button', ...classList], event: { type: 'click', callback }, text });

        this.setDisabled(disabled);
    }

    setDisabled(disabled: boolean) {
        this.component.disabled = disabled;
    }
}
