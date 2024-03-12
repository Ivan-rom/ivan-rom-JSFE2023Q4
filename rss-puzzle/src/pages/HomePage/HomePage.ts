import { Page } from '../Page';

export class HomePage extends Page {
    user: { name: string; surname: string } | null;

    constructor() {
        super();

        this.user = JSON.parse(localStorage.getItem('user') as string);
    }
}
