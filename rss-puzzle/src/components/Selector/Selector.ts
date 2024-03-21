import { BaseComponent } from '../../BaseComponent';
import { User } from '../../types';
import { toCapitalize } from '../../utils/utils';

import './selector.css';

export default class Selector extends BaseComponent {
    currentRound: number;

    currentLevel: number;

    roundsCount: number;

    roundTransition: (hash: string) => void;

    constructor(
        roundsCount: number,
        roundTransition: (hash: string) => void,
        currentRound: number = 1,
        currentLevel: number = 1
    ) {
        super({ className: 'selector' });

        this.roundsCount = roundsCount;
        this.currentRound = currentRound;
        this.currentLevel = currentLevel;
        this.roundTransition = roundTransition;

        this.append([this.createSelector(), this.createSelector('levels', 45)]);
    }

    createSelector(name: 'levels' | 'rounds' = 'rounds', count: number = 6): BaseComponent {
        const wrapper = new BaseComponent({
            className: 'selector-wrapper',
            textContent: `${toCapitalize(name)}:`,
            onchange: this.changeHandler.bind(this),
        });
        const selector = new BaseComponent<HTMLSelectElement>({ tag: 'select', className: `select ${name}`, name });
        const optionsCount = name === 'rounds' ? count : this.roundsCount;
        const { completedRounds } = JSON.parse(localStorage.getItem('user')!) as User;
        const rounds = completedRounds[this.currentRound];
        for (let i = 1; i <= optionsCount; i += 1) {
            let className = 'option';
            if (rounds) {
                if (name === 'levels') {
                    className += rounds.rounds.includes(i) ? ' completed' : '';
                } else if (completedRounds[i]) {
                    className +=
                        completedRounds[i]?.roundsCount === completedRounds[i]?.rounds.length ? ' completed' : '';
                }
            }
            selector.append([
                new BaseComponent<HTMLOptionElement>({
                    tag: 'option',
                    className,
                    value: `${i}`,
                    textContent: `${i}`,
                    selected: name === 'rounds' ? i === this.currentRound : i === this.currentLevel,
                }),
            ]);
        }
        wrapper.append([selector]);
        return wrapper;
    }

    changeHandler(e: Event) {
        const target = e.target as HTMLSelectElement;
        if (target.name === 'rounds') {
            const newHash = `game/${target.value}_01`;
            window.location.hash = newHash;
            this.roundTransition(newHash);
        } else {
            const newHash = `game/${this.currentRound}_${target.value.padStart(2, '0')}`;
            window.location.hash = newHash;
            this.roundTransition(newHash);
        }
    }
}
