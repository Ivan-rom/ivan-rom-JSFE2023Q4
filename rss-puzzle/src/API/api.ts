import { GameData } from '../types';

export default class Api {
    static path: string;

    static currentLevel: number = 1;

    constructor() {
        Api.path = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/';
    }

    async getRounds(): Promise<GameData> {
        const levelId = +window.location.hash.split('/')[1].split('_')[0];
        if (levelId <= 6 && levelId >= 1) Api.currentLevel = levelId;
        const file = `wordCollectionLevel${Api.currentLevel}.json`;
        const folder = 'data/';
        const rounds = await fetch(Api.path + folder + file)
            .then((response) => response.json())
            .then((json) => json)
            .catch((err) => new Error(err));

        return rounds;
    }
}
