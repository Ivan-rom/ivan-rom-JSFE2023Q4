import { BaseComponent } from '../../BaseComponent';
import Button from '../../components/Button/Button';
import { User } from '../../types';
import Page from '../Page';

import './homePage.css';

export default class HomePage extends Page {
    user?: User;

    constructor() {
        super({ className: 'home' });

        this.user = JSON.parse(localStorage.getItem('user') as string);

        this.clear();
    }

    createContent(): BaseComponent {
        this.user = JSON.parse(localStorage.getItem('user') as string);

        const h1 = new BaseComponent({ tag: 'h1', textContent: 'RSS Puzzle Game', className: 'heading' });

        const greeting = new BaseComponent<HTMLParagraphElement>({
            tag: 'p',
            className: 'greeting',
            innerHTML: `
            Hello, <span class="name">${this.user?.name} ${this.user?.surname}</span>!
        `,
        });

        const text = [
            new BaseComponent({
                tag: 'p',
                className: 'description',
                textContent: 'Click on words, collect phrases.',
            }),
            new BaseComponent({
                tag: 'p',
                className: 'description',
                textContent: 'Words can drag and drop. Select tooltip in the menu.',
            }),
        ];

        const clickHandler = () => {
            const { lastRound } = JSON.parse(localStorage.getItem('user')!) as User;
            window.location.hash = `game/${lastRound}`;
        };

        const button = new Button('Start', clickHandler, 'start-button');

        return new BaseComponent({ className: 'home-content' }, [h1, greeting, ...text, button]);
    }

    render() {
        this.append([this.createContent()]);
        super.render();
    }
}
