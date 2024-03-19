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

    hash: string;

    levelId?: string;

    roundId?: string;

    content?: BaseComponent;

    constructor() {
        super({ className: 'game-page' });

        this.api = new Api();

        this.hash = window.location.hash;
    }

    render(isRoundTransition: boolean = false): void {
        this.hash = window.location.hash;
        if (!isRoundTransition) super.render();
        this.content = new BaseComponent({ className: 'content' });
        this.append([this.content]);

        this.getRound().then((round) => {
            this.game?.getComponent().remove();
            this.round = round;
            this.game = new Game(
                this.levelId as string,
                this.roundId as string,
                this.content!,
                this.roundTransition.bind(this)
            );
            this.content!.append([this.game]);
            this.game.renderGame(this.round);
            this.content!.render(this.component);
        });
    }

    clear(): void {
        super.clear();
        this.component.onanimationend = () => {
            this.component.innerHTML = '';
            this.component.remove();
        };
    }

    roundTransition(newHash: string = 'game/1_01') {
        if (newHash !== this.hash) {
            const content = this.content!;
            content.clear();
            content.getComponent().onanimationend = () => {
                content.getComponent().innerHTML = '';
                content.getComponent().remove();
                this.hash = newHash;
                this.render(true);
            };
        }
    }

    async getRound(): Promise<Round> {
        const { rounds }: GameData = await this.api.getRounds();
        const roundId = this.hash.split('/')[1];
        const round = rounds.find((el) => el.levelData.id === roundId);
        [this.levelId, this.roundId] = roundId.split('_');
        return round as Round;
    }
}
