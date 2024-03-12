import { BaseComponent } from '../../BaseComponent';
import { Button } from '../Button/Button';

export class Header extends BaseComponent {
    logoutButton: Button;

    constructor() {
        super({ tag: 'header', className: 'header' });

        const clickHandler = () => {
            localStorage.removeItem('user');
            location.hash = 'login';
        };

        this.logoutButton = new Button('Log out', clickHandler, 'logout-button');

        this.append([this.logoutButton]);
    }
}
