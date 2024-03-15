import LoginForm from '../../components/LoginForm/LoginForm';
import Page from '../Page';

import './loginPage.css';

export default class LoginPage extends Page {
    constructor() {
        super({ className: 'login-page' });

        const form = new LoginForm();

        this.append([form]);
    }
}
