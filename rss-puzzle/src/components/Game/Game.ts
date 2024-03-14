import { BaseComponent } from '../../BaseComponent';
import { Round, Word } from '../../types';
import { randomizeArray } from '../../utils/utils';
import { Answer } from '../Answer/Answer';
import { Button } from '../Button/Button';
import { WordComponent } from '../WordComponent/WordComponent';

import './Game.css';

export class Game extends BaseComponent {
    data: Round;
    answer?: Answer;
    answers: BaseComponent;
    dataSource?: BaseComponent;
    continueButton?: Button;

    constructor(data: Round) {
        super({ className: 'game' });

        this.answers = new BaseComponent({ className: 'answers' });
        this.append([this.answers]);

        this.data = data;
    }

    createDataSource(sentence: Word) {
        const clickHandler = (e: Event) => this.moveWord(e.target as HTMLElement);
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

        this.createContinueButton();
    }

    createAnswer(length: number) {
        const answer = new Answer(length);
        this.answer = answer;
        this.answers.append([answer]);
    }

    moveWord(component: HTMLElement) {
        const parent = component.parentElement as HTMLElement;
        if ((parent.className as string) === 'data-source') {
            this.answer?.appendWord(component);
        } else {
            this.answer?.removeWord(parent?.dataset.index as string);
            this.dataSource?.append([component]);
        }
        this.continueButton?.setDisabled(this.dataSource?.getComponent().childNodes.length !== 0);
    }

    createContinueButton() {
        const callback = (e: Event) => {
            if (this.answer?.isSolved()) {
                console.log('next');
            } else {
                console.log('no');
            }
        };
        const button = new Button('Continue', callback, 'continue', true);
        this.continueButton = button;
        this.append([button]);
    }
}
