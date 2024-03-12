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
];

export class Router {
    routes: Route[];
    hash: string;

    constructor() {
        this.routes = routes;
        this.hash = window.location.hash.slice(1);

        window.addEventListener('hashchange', this.hashChangeHandler);
    }

    hashChangeHandler = (e: Event) => {
        this.render();
    };

    render() {
        const user = JSON.parse(localStorage.getItem('user') as string);

        if (!user) {
            window.location.hash = 'login';
        }

        const currentPage = this.routes.find((route) => route.path === this.hash);
        currentPage?.page.render();
    }
}
