import { Article, Source } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    protected news: News;
    protected sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: { articles: Article[] }): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: { sources: Source[] }): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;