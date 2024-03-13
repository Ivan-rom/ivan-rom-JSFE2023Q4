import { BaseComponent } from '../../BaseComponent';
import { Round, Word } from '../../types';
import { randomizeArray } from '../../utils/utils';

export class Game extends BaseComponent {
    data: Round;

    constructor(data: Round) {
        super({ className: 'game' });

        this.data = data;

        this.createDataSource(data.words[0]);
    }

    createDataSource(sentence: Word) {
        const randomizedWords = randomizeArray<string>(sentence.textExample.split(' ')).map(
            (word) => new BaseComponent({ className: 'word', textContent: word })
        );
        const dataSource = new BaseComponent({ className: 'data-source' }, randomizedWords);
        this.append([dataSource]);

        console.log(randomizedWords);
    }
}
