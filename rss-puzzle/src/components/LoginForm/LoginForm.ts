import { BaseComponent } from '../../BaseComponent';
import { toCapitalize } from '../../utils/utils';
import { Input } from '../input/Input';

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

    constructor() {
        super({ tagName: 'form', classList: ['login-form'] });
        this.hasErrors = false;

        this.render();
    }

    createField(name: 'name' | 'surname' = 'name'): BaseComponent {
        const div = new BaseComponent<HTMLDivElement>({});
        const ul = new BaseComponent<HTMLUListElement>({ tagName: 'ul', classList: ['errors-list'] });
        const label = new BaseComponent<HTMLLabelElement>({
            tagName: 'div',
            text: toCapitalize(name + ':'),
            classList: ['label'],
        });

        const testFn = (event: Event) => {
            ul.clear();
            this.hasErrors = false;

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
                    ul.append([errorItem.getComponent()]);
                }
            });
        };

        const input = new Input({ name: name, event: { type: 'input', callback: testFn } });

        div.append([label.getComponent(), ul.getComponent(), input.getComponent()]);

        return div;
    }

    render() {
        this.component.setAttribute('action', '#');
        this.append([this.createField().getComponent(), this.createField('surname').getComponent()]);
    }
}
