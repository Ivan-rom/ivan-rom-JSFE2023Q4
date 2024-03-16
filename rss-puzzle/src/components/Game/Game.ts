import { BaseComponent } from '../../BaseComponent';
import { Round, Word } from '../../types';
import { randomizeArray, toCapitalize, updateRoundId } from '../../utils/utils';
import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import WordComponent from '../WordComponent/WordComponent';

import './Game.css';

export default class Game extends BaseComponent {
    data?: Round;

    answer?: Answer;

    answers: BaseComponent;

    dataSource?: BaseComponent;

    button?: Button;

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

        this.button = new Button('Check', () => this.answer?.isSolved() && this.updateButton(true), 'check', true);

        this.answers.append([this.answer]);
        this.append([this.answers, this.dataSource, this.button, this.createSkipButton()]);

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
        this.button?.setDisabled(this.dataSource?.getComponent().childNodes.length !== 0);
    }

    nextSentence() {
        this.answer?.getComponent().classList.add('disabled');
        this.sentence = (this.data as Round).words[this.currentWord];
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);
        this.answers.append([this.answer]);
        this.dataSource?.append(this.words);
        this.words.forEach((word) => word.setWidth());
        this.button?.setDisabled(true);
        this.updateButton();
    }

    nextLevel() {
        const newHash = `game/${updateRoundId(+this.levelId, +this.roundId + 1)}`;
        window.location.hash = newHash;
    }

    updateButton(isContinue: boolean = false) {
        let text: string = 'check';
        let callback = this.checkHandler;

        if (isContinue) {
            text = 'continue';
            callback = this.continueHandler;
        }
        (this.button as Button).getComponent().textContent = toCapitalize(text);
        (this.button as Button).getComponent().className = `button ${text}`;
        (this.button as Button).getComponent().onclick = callback.bind(this);
    }

    checkHandler() {
        if (this.answer?.isSolved()) this.updateButton(true);
    }

    continueHandler() {
        this.currentWord += 1;
        if (this.currentWord === 10) {
            this.nextLevel();
        } else {
            this.nextSentence();
        }
    }

    createSkipButton(): Button {
        const callback = () => {
            this.checkHandler();
            const wrongWords = this.words?.filter((word) => word.getComponent().classList.contains('wrong'));
            const filteredWords = this.words?.filter((word) => !word.getComponent().classList.contains('correct'));

            wrongWords?.forEach((word) => this.moveWord(word.getComponent()));

            this.sentence?.textExample.split(' ').forEach((text) => {
                const wordIndex = filteredWords?.findIndex((word) => word.getComponent().textContent === text);
                const word = (filteredWords as WordComponent[])[wordIndex as number];
                if (word) {
                    this.moveWord(word.getComponent());
                    filteredWords?.splice(wordIndex as number, 1);
                }
            });

            this.updateButton(true);
        };
        return new Button("I don't know", callback, 'skip');
    }
}
