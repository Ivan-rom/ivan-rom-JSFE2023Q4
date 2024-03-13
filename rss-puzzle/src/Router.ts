import { Header } from './components/Header/Header';
import { GamePage } from './pages/GamePage/GamePage';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Page } from './pages/Page';

type Route<T extends Page = Page> = {
    path: string;
    page: T;
};

const routes: Route[] = [
    {
        path: 'login',
        page: new LoginPage(),
    },
    {
        path: 'home',
        page: new HomePage(),
    },
    {
        path: 'game',
        page: new GamePage(),
    },
];

export class Router {
    routes: Route[];
    hash: string;

    constructor() {
        this.routes = routes;
        this.hash = window.location.hash.slice(1);

        this.render();

        window.addEventListener('hashchange', this.hashChangeHandler);
    }

    hashChangeHandler = (e: Event) => {
        this.render();
    };

    render() {
        this.hash = window.location.hash.slice(1);
        const user = JSON.parse(localStorage.getItem('user') as string);

        if (!this.hash || (user && this.hash === 'login')) {
            window.location.hash = 'home';
        }

        if (!user) {
            window.location.hash = 'login';
        }

        const currentPage = this.routes.find((route) => route.path === this.hash);

        document.body.innerHTML = '';

        window.location.hash.slice(1) != 'login' && document.body.append(new Header().getComponent());
        document.body.append(currentPage?.page.getComponent() as Node);
    }
}
