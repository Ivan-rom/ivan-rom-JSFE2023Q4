import { BaseComponent } from '../../BaseComponent';
import { toCapitalize } from '../../utils/utils';

export default class Selector extends BaseComponent {
    currentRound: number;

    currentLevel: number;

    constructor(currentRound: number = 1, currentLevel: number = 1) {
        super({ className: 'selector' });

        this.currentRound = currentRound;
        this.currentLevel = currentLevel;

        this.append([this.createSelector(), this.createSelector('levels', 45)]);
    }

    createSelector(name: 'levels' | 'rounds' = 'rounds', count: number = 6): BaseComponent {
        const wrapper = new BaseComponent({ className: 'selector-wrapper', textContent: `${toCapitalize(name)}:` });
        const selector = new BaseComponent<HTMLSelectElement>({ tag: 'select', className: `select ${name}` });
        for (let i = 1; i <= count; i += 1) {
            selector.append([
                new BaseComponent<HTMLOptionElement>({
                    tag: 'option',
                    className: 'option',
                    value: `${i}`,
                    textContent: `${i}`,
                    selected: name === 'rounds' ? i === this.currentRound : i === this.currentLevel,
                }),
            ]);
        }
        wrapper.append([selector]);
        return wrapper;
    }
}
