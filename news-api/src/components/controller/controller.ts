import { Endpoint } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources<ArgType>(callback: (data: ArgType) => void): void {
        super.getResp<ArgType>(
            {
                endpoint: Endpoint.SOURCES,
            },
            callback
        );
    }

    public getNews<ArgType>(e: Event, callback: (data: ArgType) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<ArgType>(
                        {
                            endpoint: Endpoint.EVERYTHING,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
