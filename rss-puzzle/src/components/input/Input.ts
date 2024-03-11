import { BaseComponent } from '../../BaseComponent';
import { ComponentEvent } from '../../types';

type Params = {
    name: 'name' | 'surname';
    classList?: string[];
    event?: ComponentEvent;
    type?: string;
    required?: boolean;
};

export class Input extends BaseComponent<HTMLInputElement> {
    constructor({ name, classList = [], type = 'text', required = false, event }: Params) {
        super({ tagName: 'input', classList, event });
        this.component.name = name;
        this.component.type = type;
        this.component.required = required;
        this.component.id = name;
    }
}
