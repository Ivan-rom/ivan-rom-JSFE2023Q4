import { BaseComponent } from '../../BaseComponent';
import { StatisticType } from '../../types';
import Page from '../Page';

export default class Statistic extends Page {
    data: StatisticType;

    constructor() {
        super({ className: 'statistic' });
        this.data = JSON.parse(localStorage.getItem('statistic')!);

        this.createContent();
    }

    createContent() {
        this.data = JSON.parse(localStorage.getItem('statistic')!);
        const content = new BaseComponent({ className: 'statistic-content' });
        const ul = new BaseComponent({ tag: 'ul', className: 'words' });
        this.data.words.forEach((word) => {
            const wordComponent = new BaseComponent({ tag: 'li', className: 'word', textContent: word.textExample });
            ul.append([wordComponent]);
        });
        content.append([ul]);
        this.append([content]);
    }
}
