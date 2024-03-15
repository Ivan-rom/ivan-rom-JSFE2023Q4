import { BaseComponent } from '../../BaseComponent.ts';
import Button from '../../components/Button/Button.ts';
import Page from '../Page.ts';

import './homePage.css';

export default class HomePage extends Page {
    user: { name: string; surname: string } | null;

    constructor() {
        super({ className: 'home' });

        this.user = JSON.parse(localStorage.getItem('user') as string);

        this.clear();
        this.append([this.createContent()]);
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
            window.location.hash = 'game/1_01';
        };

        const button = new Button('Start', clickHandler, 'start-button');

        return new BaseComponent({ className: 'home-content' }, [h1, greeting, ...text, button]);
    }
}
