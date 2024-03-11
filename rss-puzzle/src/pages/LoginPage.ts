import { LoginForm } from '../components/LoginForm/LoginForm';
import { Page } from './Page';

export class LoginPage extends Page {
    constructor() {
        super(new LoginForm().getComponent());
    }
}
