import { BaseComponent } from '../../BaseComponent';
import { ComponentEvent } from '../../types';

type Params = {
    name: 'name' | 'surname';
    classList?: string[];
    event?: ComponentEvent;
    type?: string;
};

export class Input extends BaseComponent {
    constructor({ name, classList = [], type = 'text', event }: Params) {
        super({ tagName: 'input', classList, event });
        (this.component as HTMLInputElement).name = name;
        (this.component as HTMLInputElement).type = type;
        this.component.id = name;
    }
}
