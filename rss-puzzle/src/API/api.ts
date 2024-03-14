import { GameData } from '../types';

export class Api {
    static path: string;
    constructor() {
        Api.path = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/';
    }

    async getRounds(file: string = 'wordCollectionLevel1.json', folder: string = 'data/'): Promise<GameData> {
        return await fetch(Api.path + folder + file)
            .then((response) => response.json())
            .then((json) => json)
            .catch((err) => new Error(err));
    }
}