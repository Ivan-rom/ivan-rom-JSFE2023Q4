import { BaseComponent } from '../../BaseComponent';

export class Button extends BaseComponent<HTMLButtonElement> {
    constructor(
        textContent: string,
        callback: (event: Event) => void,
        className: string = '',
        disabled: boolean = false
    ) {
        super({ tag: 'button', className: 'button ' + className, onclick: callback, textContent });

        this.setDisabled(disabled);
    }

    setDisabled(disabled: boolean) {
        this.component.disabled = disabled;
    }
}
