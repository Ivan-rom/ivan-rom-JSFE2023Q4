import { DataSources, DataArticles } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources') as NonNullable<HTMLDivElement>;
        sources.addEventListener('click', (e) =>
            this.controller.getNews<DataArticles>(e, (data: DataArticles) => this.view.drawNews(data))
        );
        this.controller.getSources<DataSources>((data: DataSources): void => this.view.drawSources(data));
    }
}

export default App;
