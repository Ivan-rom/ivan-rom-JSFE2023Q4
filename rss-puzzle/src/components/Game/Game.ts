import { BaseComponent } from '../../BaseComponent';
import { Round, Word } from '../../types';
import { randomizeArray } from '../../utils/utils';
import { Answer } from '../Answer/Answer';
import { Button } from '../Button/Button';
import { WordComponent } from '../WordComponent/WordComponent';

import './Game.css';

export class Game extends BaseComponent {
    data?: Round;
    answer?: Answer;
    answers: BaseComponent;
    dataSource?: BaseComponent;
    continueButton?: Button;
    sentence?: Word;
    words?: WordComponent[];

    constructor() {
        super({ className: 'game' });
        this.answers = new BaseComponent({ className: 'answers' });
        this.append([this.answers]);
    }

    renderGame(data: Round) {
        this.data = data;
        this.sentence = data.words[0];
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length);

        this.dataSource = new BaseComponent({ className: 'data-source' }, this.words);

        this.continueButton = this.createContinueButton();

        this.answers.append([this.answer]);
        this.append([this.answers, this.dataSource, this.continueButton]);

        this.words.forEach((word) => word.setWidth());
    }

    createWords(sentence: Word): WordComponent[] {
        const clickHandler = (e: Event) => this.moveWord(e.target as HTMLElement);
        const words = sentence.textExample.split(' ').map((word, i) => {
            const wordComponent = new WordComponent(word, { onclick: clickHandler });
            wordComponent.setDataset('index', i.toString());
            return wordComponent;
        });
        const randomizedWords = randomizeArray<WordComponent>(words);
        return randomizedWords;
    }

    createAnswer(length: number): Answer {
        const answer = new Answer(length);
        this.answer = answer;
        return answer;
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

    createContinueButton(): Button {
        const callback = (e: Event) => {
            if (this.answer?.isSolved()) {
                console.log('next');
            } else {
                console.log('no');
            }
        };
        const button = new Button('Continue', callback, 'continue', true);
        return button;
    }
}
