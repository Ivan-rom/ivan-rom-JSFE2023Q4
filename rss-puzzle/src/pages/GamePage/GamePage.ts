import { Api } from '../../API/api';
import { Game } from '../../components/Game/Game';
import { GameData } from '../../types';
import { Page } from '../Page';

export class GamePage extends Page {
    api: Api;

    constructor() {
        super();

        this.api = new Api();
        this.getGame();
    }

    async getGame() {
        const { rounds }: GameData = await this.api.getRounds();

        const round = rounds.find((el) => el.levelData.id === '1_01');

        if (!round) {
            console.log('There is no such round');
        } else {
            this.append([new Game(round)]);
        }
    }
}
