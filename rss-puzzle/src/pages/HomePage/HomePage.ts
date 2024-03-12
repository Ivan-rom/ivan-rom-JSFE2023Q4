import { Header } from '../../components/Header/Header';
import { Page } from '../Page';

export class HomePage extends Page {
    user: { name: string; surname: string } | null;

    constructor() {
        super({ className: 'home' });

        this.user = JSON.parse(localStorage.getItem('user') as string);

        const header = new Header();

        this.append([header]);
    }

    render() {
        document.body.innerHTML = '';
        document.body.append(this.getComponent());
    }
}
