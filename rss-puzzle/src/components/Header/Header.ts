import { BaseComponent } from '../../BaseComponent';
import { Button } from '../Button/Button';

import './header.css';

export class Header extends BaseComponent {
    constructor() {
        super({ tag: 'header', className: 'header' });

        const clickHandler = () => {
            localStorage.removeItem('user');
            location.hash = 'login';
        };

        const logoutButton = new Button('Log out', clickHandler, 'logout-button');
        const logo = new BaseComponent<HTMLAnchorElement>({
            tag: 'a',
            href: '#home',
            text: 'RSS Puzzle',
            className: 'logo',
        });

        this.append([logo, logoutButton]);
    }
}
