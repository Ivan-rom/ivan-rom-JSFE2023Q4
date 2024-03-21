import Api from '../../API/api';
import { BaseComponent } from '../../BaseComponent';
import Game from '../../components/Game/Game';
import Selector from '../../components/Selector/Selector';
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

    roundsCount?: number;

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
                this.levelId!,
                this.roundId!,
                this.content!,
                this.roundTransition.bind(this),
                this.roundsCount!
            );
            this.content!.append([
                this.game,
                new Selector(this.roundsCount!, this.roundTransition.bind(this), +this.levelId!, +this.roundId!),
            ]);
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
        const { rounds, roundsCount }: GameData = await this.api.getRounds();
        this.roundsCount = roundsCount;
        const roundId = this.hash.split('/')[1];
        [this.levelId, this.roundId] = roundId.split('_');
        if (+this.levelId > 6 || +this.levelId < 1) {
            window.location.hash = `game/1_01`;
            this.hash = `game/1_01`;
            return this.getRound();
        }
        if (+this.roundId > roundsCount) {
            window.location.hash = `game/${+this.levelId + 1}_01`;
            this.hash = `game/${+this.levelId + 1}_01`;
            return this.getRound();
        }
        const round = rounds.find((el) => el.levelData.id === roundId);
        return round as Round;
    }
}
