import { BaseComponent } from '../../BaseComponent';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Page } from '../Page';

import './homePage.css';

export class HomePage extends Page {
    user: { name: string; surname: string } | null;

    constructor() {
        super({ className: 'home' });

        this.user = JSON.parse(localStorage.getItem('user') as string);

        const header = new Header();

        this.append([header, this.createContent()]);
    }

    createContent(): BaseComponent {
        const h1 = new BaseComponent({ tag: 'h1', textContent: 'RSS Puzzle Game', className: 'heading' });
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

        const clickHandler = (event: Event) => {};

        const button = new Button('Start', clickHandler, 'start-button');

        return new BaseComponent({ className: 'home-content' }, [h1, ...text, button]);
    }

    render() {
        document.body.innerHTML = '';
        document.body.append(this.getComponent());
    }
}
