import Header from './components/Header/Header';
import GamePage from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Page from './pages/Page';

type Routes<T extends Page = Page> = {
    login: T;
    home: T;
    game: T;
};

const routes: Routes = {
    login: new LoginPage(),
    home: new HomePage(),
    game: new GamePage(),
};

export default class Router {
    routes: Routes;

    hash: string;

    header: Header;

    currentPage?: Page;

    constructor() {
        this.header = new Header();
        document.body.appendChild(this.header.getComponent());
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

        if (!user || (user && this.hash === 'login')) {
            this.setHash('login');
            this.header.getComponent().classList.add('hidden');
            this.updatePage('login');
        } else {
            this.header.getComponent().classList.remove('hidden');
            if (this.hash === 'home') {
                this.updatePage('home');
            }
            if (this.hash.startsWith('game')) {
                this.updatePage('game');
            } else {
                this.setHash('home');
            }
        }
    }

    setHash(hash: string) {
        window.location.hash = hash;
        this.hash = hash;
    }

    updatePage(pageName: 'login' | 'home' | 'game') {
        if (this.currentPage === this.routes[pageName]) return;
        this.currentPage?.clear();
        this.currentPage = this.routes[pageName];
        this.currentPage.render();
    }
}
