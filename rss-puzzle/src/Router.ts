import Header from './components/Header/Header';
import GamePage from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Page from './pages/Page';

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

export default class Router {
    routes: Route[];

    hash: string;

    constructor() {
        this.routes = routes;
        this.hash = window.location.hash.slice(1);

        window.addEventListener('hashchange', this.hashChangeHandler);
    }

    hashChangeHandler = () => {
        this.render();
    };

    render() {
        this.hash = window.location.hash.slice(1);
        const user = JSON.parse(localStorage.getItem('user') as string);

        if (!this.hash || (user && this.hash === 'login')) {
            this.setHash('home');
        }

        if (!user) {
            this.setHash('login');
        }

        let currentPage;
        if (this.hash.startsWith('game')) {
            currentPage = this.routes.find((route) => route.path === 'game');
            currentPage?.page.render();
        } else {
            currentPage = this.routes.find((route) => route.path === this.hash);
        }

        document.body.innerHTML = '';

        if (window.location.hash.slice(1) !== 'login') document.body.append(new Header().getComponent());
        document.body.append(currentPage?.page.getComponent() as Node);
    }

    setHash(hash: string) {
        window.location.hash = hash;
        this.hash = hash;
    }
}
