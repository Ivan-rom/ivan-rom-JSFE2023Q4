import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Page } from '../Page';

import './loginPage.css';

export class LoginPage extends Page {
    constructor() {
        super(new LoginForm(), ['login-page']);
    }

    render() {
        console.log('login');

        document.body.innerHTML = '';
        document.body.append(this.getComponent());
    }
}
