import { BaseComponent } from '../../BaseComponent';
import Button from '../../components/Button/Button';
import { StatisticType, User, Word } from '../../types';
import Page from '../Page';

import './statistic.css';

export default class Statistic extends Page {
    data: StatisticType;

    constructor() {
        super({ className: 'statistic' });
        this.data = JSON.parse(localStorage.getItem('statistic')!);
    }

    render() {
        super.render();
        this.component.innerHTML = '';
        this.data = JSON.parse(localStorage.getItem('statistic')!);
        const content = new BaseComponent({ className: 'statistic-content' });
        const knownWords = this.data.words.filter((word) => !word.isSkipped);
        const unknownWords = this.data.words.filter((word) => word.isSkipped);

        const button = new Button(
            'Continue',
            () => {
                window.location.hash = `game/${(JSON.parse(localStorage.getItem('user')!) as User).lastRound}`;
            },
            'continue'
        );
        content.append([this.createList(knownWords), this.createList(unknownWords, true), button]);
        this.append([content]);
    }

    createList(words: (Word & { isSkipped: boolean })[], isSkipped: boolean = false): BaseComponent {
        const title = new BaseComponent({
            className: 'list-title',
            textContent: isSkipped ? "I don't know" : 'I know',
        });
        const ul = new BaseComponent({ tag: 'ul', className: 'words' });
        words.forEach((word) => {
            const wordComponent = new BaseComponent({
                tag: 'li',
                className: 'sentence',
                textContent: word.textExample,
            });
            ul.append([wordComponent]);
        });
        const wrapper = new BaseComponent({ className: 'list-wrapper' }, [title, ul]);
        return wrapper;
    }
}
