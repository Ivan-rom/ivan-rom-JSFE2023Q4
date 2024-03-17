import Api from '../../API/api';
import { BaseComponent } from '../../BaseComponent';
import Game from '../../components/Game/Game';
import { GameData, Round } from '../../types';
import Page from '../Page';

import './gamePage.css';

export default class GamePage extends Page {
    api: Api;

    game?: Game;

    round?: Round;

    levelId?: string;

    roundId?: string;

    content: BaseComponent;

    constructor() {
        super({ className: 'game-page' });

        this.content = new BaseComponent({ className: 'content' });

        this.api = new Api();
    }

    render(): void {
        this.component.innerHTML = '';
        this.append([this.content]);

        this.getRound().then((round) => {
            this.round = round;
            this.game = new Game(this.levelId as string, this.roundId as string, this.content);
            this.content.append([this.game]);
            this.game.renderGame(this.round);
        });
    }

    async getRound(): Promise<Round> {
        const { rounds }: GameData = await this.api.getRounds();
        const roundId = window.location.hash.split('/')[1];
        const round = rounds.find((el) => el.levelData.id === roundId);
        [this.levelId, this.roundId] = roundId.split('_');
        return round as Round;
    }
}
