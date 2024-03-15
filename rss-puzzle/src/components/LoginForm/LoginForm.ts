import { BaseComponent } from '../../BaseComponent.ts';
import { toCapitalize } from '../../utils/utils.ts';
import Button from '../Button/Button.ts';

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
            test: /^[a-zA-Z-]+$/,
            message: 'Use only English alphabet letters and the hyphen (" - ") symbol',
        },
        {
            type: 'first-letter',
            test: /^[A-Z].*$/,
            message: 'The first letter must be in uppercase',
        },
    ],
};

export default class LoginForm extends BaseComponent<HTMLFormElement> {
    hasErrors: boolean;

    submitButton: Button;

    fields: BaseComponent[];

    inputs: HTMLInputElement[];

    user: {
        name: string;
        surname: string;
    };

    constructor() {
        super({ tag: 'form', classList: ['login-form'] });
        this.component.action = '#';

        this.user = {
            name: '',
            surname: '',
        };

        this.inputs = [];
        this.fields = [this.createField(), this.createField('surname')];

        this.submitButton = this.createButton();
        this.hasErrors = false;

        this.render();
    }

    createField(name: 'name' | 'surname' = 'name'): BaseComponent {
        const div = new BaseComponent<HTMLDivElement>();
        const ul = new BaseComponent<HTMLUListElement>({ tag: 'ul', className: 'error-list' });
        const label = new BaseComponent<HTMLLabelElement>({
            tag: 'div',
            textContent: toCapitalize(`${name}:`),
            className: 'label label-required',
        });

        const inputHandler = (event: Event) => {
            ul.clear();
            this.hasErrors = false;
            this.submitButton.setDisabled(this.hasErrors);

            this.checkValues();

            const target = event.target as HTMLInputElement;
            const errors = [...fields[target.name], ...fields.errors];

            this.user[name] = target.value;

            errors.forEach((error) => {
                if (!error.test.test(target.value)) {
                    const errorItem = new BaseComponent({
                        tag: 'li',
                        className: 'error-item',
                        textContent: error.message,
                    });
                    this.hasErrors = true;
                    this.submitButton.setDisabled(this.hasErrors);
                    ul.append([errorItem]);
                }
            });
        };

        const input = new BaseComponent<HTMLInputElement>({
            tag: 'input',
            name,
            className: 'login-input',
            oninput: inputHandler,
            required: true,
            type: 'text',
            id: name,
        });

        this.inputs.push(input.getComponent());

        div.append([label, input, ul]);

        return div;
    }

    createButton(): Button {
        const clickHandler = (event: Event) => {
            event.preventDefault();
            if (!this.hasErrors) {
                localStorage.setItem('user', JSON.stringify(this.user));
                window.location.hash = 'home';
            }
        };

        return new Button('Login', clickHandler, 'login-button', this.hasErrors);
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
                tag: 'h2',
                className: 'login-heading',
                textContent: 'Login',
            }),
        ]);
        this.fields.forEach((field) => this.append([field]));
        this.append([this.submitButton]);
    }
}
