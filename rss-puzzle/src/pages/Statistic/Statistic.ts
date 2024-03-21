import { BaseComponent } from '../../BaseComponent';
import Button from '../../components/Button/Button';
import { StatisticType, User } from '../../types';
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
        this.data = JSON.parse(localStorage.getItem('statistic')!);
        const content = new BaseComponent({ className: 'statistic-content' });
        const ul = new BaseComponent({ tag: 'ul', className: 'words' });
        this.data.words.forEach((word) => {
            const wordComponent = new BaseComponent({
                tag: 'li',
                className: 'sentence',
                textContent: word.textExample,
            });
            ul.append([wordComponent]);
        });
        const button = new Button(
            'Continue',
            () => {
                window.location.hash = `game/${(JSON.parse(localStorage.getItem('user')!) as User).lastRound}`;
            },
            'continue'
        );
        content.append([ul, button]);
        this.append([content]);
    }
}
