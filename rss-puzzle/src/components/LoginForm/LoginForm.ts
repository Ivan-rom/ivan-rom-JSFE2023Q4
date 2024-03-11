import { BaseComponent } from '../../BaseComponent';
import { toCapitalize } from '../../utils/utils';
import { Button } from '../Button/Button';
import { Input } from '../input/Input';

const fields: {
    [key: string]: {
        type: string;
        test: RegExp;
        message: string;
    }[];
} = {
    errors: [
        {
            type: 'required',
            test: /^.+$/,
            message: 'This field must be filled',
        },
    ],
};

export class LoginForm extends BaseComponent<HTMLFormElement> {
    hasErrors: boolean;
    submitButton: Button;
    fields: BaseComponent[];

    constructor() {
        super({ tagName: 'form', classList: ['login-form'] });
        this.component.action = '#';

        this.fields = [this.createField(), this.createField('surname')];

        this.submitButton = this.createButton();
        this.hasErrors = false;

        this.render();
    }

    createField(name: 'name' | 'surname' = 'name'): BaseComponent {
        const div = new BaseComponent<HTMLDivElement>({});
        const ul = new BaseComponent<HTMLUListElement>({ tagName: 'ul', classList: ['errors-list'] });
        const label = new BaseComponent<HTMLLabelElement>({
            tagName: 'div',
            text: toCapitalize(name + ':'),
            classList: ['label', 'label-required'],
        });

        const inputHandler = (event: Event) => {};

        const input = new Input({ name: name, event: { type: 'input', callback: inputHandler }, required: true });
        this.checkValues(input.getComponent().value);

        div.append([label.getComponent(), ul.getComponent(), input.getComponent()]);

        return div;
    }

    createButton(): Button {
        const clickHandler = (event: Event) => {
            if (!this.hasErrors) {
            }
        };

        return new Button('Login', clickHandler, ['form-button'], this.hasErrors);
    }

    checkValues(value: string) {
        fields.errors.forEach((error) => {
            this.hasErrors = !error.test.test(value);
        });
    }

    render() {
        this.fields.forEach((field) => this.append([field.getComponent()]));
        this.append([this.submitButton.getComponent()]);
    }
}
