import { BaseComponent } from '../../BaseComponent';
import { toCapitalize } from '../../utils/utils';
import { Button } from '../Button/Button';
import { Input } from '../input/Input';

import './loginForm.css';

const fields: {
    [key: string]: {
        type: string;
        test: RegExp;
        message: string;
    }[];
} = {
    name: [
        {
            type: 'name-length',
            test: /^.{3,}$/,
            message: 'Name must be at least 3 characters long',
        },
    ],
    surname: [
        {
            type: 'surname-length',
            test: /^.{4,}$/,
            message: 'Surname must be at least 4 characters long',
        },
    ],
    errors: [
        {
            type: 'required',
            test: /^.+$/,
            message: 'This field must be filled',
        },
        {
            type: 'symbols',
            test: /^[a-zA-Z\-]+$/,
            message: 'Use only English alphabet letters and the hyphen (" - ") symbol',
        },
        {
            type: 'first-letter',
            test: /^[A-Z].*$/,
            message: 'The first letter must be in uppercase',
        },
    ],
};

export class LoginForm extends BaseComponent<HTMLFormElement> {
    hasErrors: boolean;
    submitButton: Button;
    fields: BaseComponent[];
    inputs: HTMLInputElement[];

    constructor() {
        super({ tagName: 'form', classList: ['login-form'] });
        this.component.action = '#';

        this.inputs = [];
        this.fields = [this.createField(), this.createField('surname')];

        this.submitButton = this.createButton();
        this.hasErrors = false;

        this.render();
    }

    createField(name: 'name' | 'surname' = 'name'): BaseComponent {
        const div = new BaseComponent<HTMLDivElement>({});
        const ul = new BaseComponent<HTMLUListElement>({ tagName: 'ul', classList: ['error-list'] });
        const label = new BaseComponent<HTMLLabelElement>({
            tagName: 'div',
            text: toCapitalize(name + ':'),
            classList: ['label', 'label-required'],
        });

        const inputHandler = (event: Event) => {
            ul.clear();
            this.hasErrors = false;
            this.submitButton.setDisabled(this.hasErrors);

            this.checkValues();

            const target = event.target as HTMLInputElement;
            const errors = [...fields[target.name], ...fields.errors];

            errors.forEach((error) => {
                if (!error.test.test(target.value)) {
                    const errorItem = new BaseComponent({
                        tagName: 'li',
                        classList: ['error-item'],
                        text: error.message,
                    });
                    this.hasErrors = true;
                    this.submitButton.setDisabled(this.hasErrors);
                    ul.append([errorItem.getComponent()]);
                }
            });
        };

        const input = new Input({
            name: name,
            event: { type: 'input', callback: inputHandler },
            required: true,
            classList: ['login-input'],
        });

        this.inputs.push(input.getComponent());

        div.append([label.getComponent(), input.getComponent(), ul.getComponent()]);

        return div;
    }

    createButton(): Button {
        const clickHandler = (event: Event) => {
            if (!this.hasErrors) {
            }
        };

        return new Button('Login', clickHandler, ['login-button'], this.hasErrors);
    }

    checkValues() {
        this.inputs.forEach((input) => {
            fields.errors.forEach((error) => {
                this.hasErrors = !error.test.test(input.value);
            });
        });

        this.submitButton.setDisabled(this.hasErrors);
    }

    render() {
        this.checkValues();
        this.append([
            new BaseComponent<HTMLElementTagNameMap['h2']>({
                tagName: 'h2',
                classList: ['login-heading'],
                text: 'Login',
            }),
        ]);
        this.fields.forEach((field) => this.append([field.getComponent()]));
        this.append([this.submitButton.getComponent()]);
    }
}
