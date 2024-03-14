import { BaseComponent } from '../../BaseComponent';
import { Round, Word } from '../../types';
import { randomizeArray } from '../../utils/utils';
import { Answer } from '../Answer/Answer';
import { WordComponent } from '../WordComponent/WordComponent';

import './Game.css';

export class Game extends BaseComponent {
    data: Round;
    answer?: Answer;
    dataSource?: BaseComponent;

    constructor(data: Round) {
        super({ className: 'game' });

        this.data = data;
        this.createDataSource(data.words[0]);
    }

    createDataSource(sentence: Word) {
        const clickHandler = (e: Event) => {
            const component = e.target as HTMLElement;
            this.moveWord(component, component.parentElement?.className as string);
        };

        const randomizedWords = randomizeArray<string>(sentence.textExample.split(' ')).map(
            (word) => new WordComponent(word, { onclick: clickHandler })
        );

        this.createAnswer(randomizedWords.length);

        const dataSource = new BaseComponent({ className: 'data-source' }, randomizedWords);
        this.dataSource = dataSource;
        this.append([dataSource]);
    }

    createAnswer(length: number) {
        const answer = new Answer(length);
        this.answer = answer;
        this.append([answer]);
    }

    moveWord(component: HTMLElement, parent: string) {
        if (parent === 'data-source') {
            this.answer?.appendWord(component);
        }
    }
}
