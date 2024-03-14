import { BaseComponent } from '../../BaseComponent';
import { Round, Word } from '../../types';
import { randomizeArray } from '../../utils/utils';
import { Answer } from '../Answer/Answer';
import { WordComponent } from '../WordComponent/WordComponent';

import './Game.css';

export class Game extends BaseComponent {
    data: Round;
    answer?: Answer;
    answers: BaseComponent;
    dataSource?: BaseComponent;

    constructor(data: Round) {
        super({ className: 'game' });

        this.answers = new BaseComponent({ className: 'answers' });
        this.append([this.answers]);

        this.data = data;
    }

    createDataSource(sentence: Word) {
        const clickHandler = (e: Event) => {
            const component = e.target as HTMLElement;
            this.moveWord(component, component.parentElement?.className as string);
        };

        const words = sentence.textExample.split(' ').map((word, i) => {
            const wordComponent = new WordComponent(word, { onclick: clickHandler });
            wordComponent.setDataset('index', i.toString());
            return wordComponent;
        });

        const randomizedWords = randomizeArray<WordComponent>(words);

        this.createAnswer(randomizedWords.length);

        const dataSource = new BaseComponent({ className: 'data-source' }, randomizedWords);
        this.dataSource = dataSource;
        this.append([dataSource]);

        words.map((word) => word.setDataset('width', word.getComponent().offsetWidth.toString()));
        words.map((word) => word.getComponent().setAttribute('style', `width: ${word.getComponent().dataset.width}px`));
    }

    createAnswer(length: number) {
        const answer = new Answer(length);
        this.answer = answer;
        this.answers.append([answer]);
    }

    moveWord(component: HTMLElement, parent: string) {
        if (parent === 'data-source') {
            this.answer?.appendWord(component);
        } else {
            this.dataSource?.append([component]);
        }
    }
}
