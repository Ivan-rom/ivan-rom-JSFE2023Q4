import { BaseComponent } from '../../BaseComponent';
import { Round, Word } from '../../types';
import { randomizeArray, updateRoundId } from '../../utils/utils';
import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import WordComponent from '../WordComponent/WordComponent';

import './Game.css';

export default class Game extends BaseComponent {
    data?: Round;

    answer?: Answer;

    answers: BaseComponent;

    dataSource?: BaseComponent;

    continueButton?: Button;

    checkButton?: Button;

    sentence?: Word;

    words?: WordComponent[];

    currentWord: number = 0;

    levelId: string;

    roundId: string;

    constructor(levelId: string, roundId: string) {
        super({ className: 'game' });
        this.levelId = levelId;
        this.roundId = roundId;
        this.answers = new BaseComponent({ className: 'answers' });
        this.append([this.answers]);
    }

    renderGame(data: Round) {
        this.data = data;
        this.sentence = data.words[this.currentWord];
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);

        this.dataSource = new BaseComponent({ className: 'data-source' }, this.words);

        this.continueButton = this.createContinueButton();
        this.checkButton = this.createCheckButton();

        this.answers.append([this.answer]);
        this.append([this.answers, this.dataSource, this.continueButton, this.checkButton]);

        this.words.forEach((word) => word.setWidth());
    }

    createWords(sentence: Word): WordComponent[] {
        const clickHandler = (e: Event) => this.moveWord(e.target as HTMLElement);
        const words = sentence.textExample.split(' ').map((word) => new WordComponent(word, { onclick: clickHandler }));
        const randomizedWords = randomizeArray<WordComponent>(words);
        return randomizedWords;
    }

    createAnswer(length: number, sentence: string): Answer {
        const answer = new Answer(length, sentence);
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
        this.checkButton?.setDisabled(this.dataSource?.getComponent().childNodes.length !== 0);
    }

    nextSentence() {
        this.answer?.getComponent().classList.add('disabled');
        this.sentence = (this.data as Round).words[this.currentWord];
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);
        this.answers.append([this.answer]);
        this.dataSource?.append(this.words);
        this.words.forEach((word) => word.setWidth());
        this.continueButton?.setDisabled(true);
        this.checkButton?.setDisabled(true);
    }

    nextLevel() {
        const newHash = `game/${updateRoundId(+this.levelId, +this.roundId + 1)}`;
        window.location.hash = newHash;
    }

    createContinueButton(): Button {
        const callback = () => {
            this.currentWord += 1;
            if (this.currentWord === 10) {
                this.nextLevel();
            } else {
                this.nextSentence();
            }
        };
        const button = new Button('Continue', callback, 'continue', true);
        return button;
    }

    createCheckButton(): Button {
        const callback = () => {
            this.continueButton?.setDisabled(!this.answer?.isSolved());
        };
        const button = new Button('Check', callback, 'check', true);
        return button;
    }
}
