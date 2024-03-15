import Api from '../../API/api.ts';
import Game from '../../components/Game/Game.ts';
import { GameData, Round } from '../../types.ts';
import Page from '../Page.ts';

export default class GamePage extends Page {
    api: Api;

    game?: Game;

    round?: Round;

    levelId?: string;

    roundId?: string;

    constructor() {
        super();

        this.api = new Api();
    }

    render(): void {
        this.component.innerHTML = '';
        this.getRound().then((round) => {
            this.round = round;
            this.game = new Game(this.levelId as string, this.roundId as string);
            this.append([this.game]);
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
