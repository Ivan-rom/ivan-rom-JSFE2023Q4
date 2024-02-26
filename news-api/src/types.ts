export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    description: string;
}

export interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export type DataArticles = {
    articles: Article[];
    status: 'ok' | number;
    totalResults: number;
};

export type DataSources = {
    sources: Source[];
    status: 'ok' | number;
};
