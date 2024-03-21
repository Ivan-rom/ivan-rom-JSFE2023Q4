import Api from '../../API/api';
import { BaseComponent } from '../../BaseComponent';
import { Round, User, Word } from '../../types';
import { randomizeArray, toCapitalize, updateRoundId } from '../../utils/utils';
import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import Hints from '../Hints/Hints';
import WordComponent from '../WordComponent/WordComponent';

import './Game.css';

export default class Game extends BaseComponent {
    data?: Round;

    answer?: Answer;

    answers: BaseComponent;

    dataSource?: BaseComponent;

    button?: Button;

    skipButton?: Button;

    sentence?: Word;

    words?: WordComponent[];

    currentWord: number = 0;

    levelId: string;

    roundId: string;

    roundsCount: number;

    current?: HTMLElement;

    page: BaseComponent;

    dropElement?: HTMLElement;

    touches?: { pageX: number; pageY: number };

    hints: Hints;

    imageSrc?: string;

    buttons: BaseComponent;

    roundTransition: (id: string) => void;

    constructor(
        levelId: string,
        roundId: string,
        page: BaseComponent,
        roundTransition: (id: string) => void,
        roundsCount: number
    ) {
        super({ className: 'game' });
        this.buttons = new BaseComponent({ className: 'buttons' });
        this.page = page;
        this.levelId = levelId;
        this.roundId = roundId;
        this.roundsCount = roundsCount;
        this.hints = new Hints(this.page, this.buttons);
        this.answers = new BaseComponent({ className: 'answers' });
        this.roundTransition = roundTransition;
        this.append([this.hints, this.answers]);
    }

    renderGame(data: Round) {
        this.data = data;
        this.sentence = data.words[this.currentWord];

        this.imageSrc = this.data.levelData.imageSrc;

        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);

        this.dataSource = new BaseComponent({ className: 'data-source' }, this.words);

        this.button = new Button('Check', () => {}, 'check', true);
        this.updateButton();

        this.skipButton = this.createSkipButton();

        this.buttons.append([this.button, this.skipButton]);
        this.answers.append([this.answer]);
        this.append([this.answers, this.dataSource, this.buttons]);
        this.words.forEach((word) => word.setWidth(this.imageSrc!, this.currentWord));
        const arr = this.dataSource.getComponent().childNodes as unknown as Node[];

        this.hints.setText(this.sentence.textExampleTranslate);
        this.hints.setAudio(this.sentence.audioExample);
        this.hints.setWords(this.words);
        this.hints.showImage();
        this.hints.showAudio();
        this.hints.showTranslation();

        this.dataSource.getComponent().append(...randomizeArray([...arr]));
    }

    createWords(sentence: Word): WordComponent[] {
        const words = sentence.textExample.split(' ').map((word, i, arr) => {
            const wordComponent = new WordComponent(word, {
                onclick: this.clickHandler.bind(this),
                ondragstart: this.dragStart.bind(this),
                ontouchmove: this.dragMove.bind(this),
                ontouchend: this.dragDrop.bind(this),
                ontouchstart: this.touchStart.bind(this),
            });
            if (i === 0) wordComponent.getComponent().classList.add('first');
            else if (i === arr.length - 1) wordComponent.getComponent().classList.add('last');
            return wordComponent;
        });
        return words;
    }

    createAnswer(length: number, sentence: string): Answer {
        const answer = new Answer(length, sentence, this.dragoverHandler.bind(this), this.dropHandler.bind(this));
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
        this.answer?.disable();
        this.words?.forEach((word) => word.disable());
        this.sentence = (this.data as Round).words[this.currentWord];
        this.words = this.createWords(this.sentence);
        this.answer = this.createAnswer(this.words.length, this.sentence.textExample);
        this.answers.append([this.answer]);
        this.dataSource?.append(this.words);
        this.words.forEach((word) => word.setWidth(this.imageSrc!, this.currentWord));
        const arr = this.dataSource!.getComponent().childNodes as unknown as Node[];
        this.dataSource!.getComponent().append(...randomizeArray([...arr]));
        this.button?.setDisabled(true);
        this.updateButton();
        this.hints.setText(this.sentence.textExampleTranslate);
        this.hints.setAudio(this.sentence.audioExample);
        this.hints.setWords(this.words!);
        this.hints.showImage();
        this.hints.showAudio();
        this.hints.showTranslation();
    }

    nextLevel() {
        const newHash = `game/${updateRoundId(+this.levelId, +this.roundId + 1)}`;
        window.location.hash = newHash;
        this.roundTransition(newHash);
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

    clickHandler(e: Event) {
        this.moveWord(e.target as HTMLElement);
    }

    checkHandler() {
        if (this.answer?.isSolved()) {
            if (this.currentWord === 9) {
                const user = JSON.parse(localStorage.getItem('user')!) as User;
                if (!user.completedRounds[+this.levelId]) {
                    user.completedRounds[+this.levelId] = {
                        rounds: [+this.roundId],
                        roundsCount: this.roundsCount,
                    };
                } else {
                    user.completedRounds[+this.levelId].rounds.push(+this.roundId);
                    const arr = Array.from(new Set(user.completedRounds[+this.levelId].rounds));
                    user.completedRounds[+this.levelId].rounds = arr;
                }
                user.completedRounds[+this.levelId].rounds.sort((a, b) => a - b);
                user.lastRound = `${this.levelId}_${(+this.roundId + 1).toString().padStart(2, '0')}`;
                localStorage.setItem('user', JSON.stringify(user));
                const info = new BaseComponent({
                    className: 'info',
                    textContent: `${this.data?.levelData.name} - ${this.data?.levelData.author} (${this.data?.levelData.year} y.)`,
                });
                this.dataSource!.append([info]);
                this.answers.getComponent().style.backgroundImage = `url("${Api.path}images/${this.data!.levelData.imageSrc}")`;
                this.answers.getComponent().childNodes.forEach((answer, i) => {
                    setTimeout(() => {
                        (answer as HTMLElement).classList.add('completed');
                        if (i === 9) info.getComponent().classList.add('reveal');
                    }, 50 * i);
                });
            }
            this.skipButton?.setDisabled(true);
            this.updateButton(true);
            this.words?.forEach((word) => word.setWidth(this.imageSrc!, this.currentWord));
            this.hints.showTranslation(true);
            this.hints.showImage(true);
        }
    }

    continueHandler() {
        this.hints.showTranslation();
        this.skipButton?.setDisabled(false);
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
            this.words?.forEach((word) => word.disable());
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
            this.checkHandler();
            this.answer?.getComponent().classList.add('skipped');
        };
        return new Button("I don't know", callback, 'skip');
    }

    dragStart(ev: DragEvent) {
        const target = ev.target as HTMLElement;
        this.current = target;
    }

    dragoverHandler(ev: DragEvent, straightTarget?: HTMLElement) {
        ev.preventDefault();
        let target = ev.target as HTMLElement;
        if (straightTarget) target = straightTarget;
        if (target.className === 'field' && target.children.length === 0) {
            const width = this.current?.dataset.width;
            target.setAttribute('style', `width: ${width}px`);
        }
    }

    dropHandler(ev: DragEvent) {
        ev.preventDefault();

        const target = ev.target as HTMLElement;
        if (target.className === 'field') {
            if (this.current!.parentElement?.className === 'field') {
                const currentId = this.current!.parentElement!.dataset.index!;
                this.answer?.removeWord(currentId);
            }
            this.answer?.appendWord(this.current!, target.dataset.index!);
        } else {
            if (target.classList.contains('disabled')) return;
            const targetId = target.parentElement!.dataset.index!;
            this.answer?.removeWord(targetId);

            if (this.current!.parentElement?.className === 'field') {
                const currentId = this.current!.parentElement!.dataset.index!;

                this.answer?.removeWord(currentId);
                this.answer?.appendWord(target, currentId);
            } else {
                this.dataSource?.append([target]);
            }

            this.answer?.appendWord(this.current!, targetId);
        }
        this.button?.setDisabled(this.dataSource?.getComponent().childNodes.length !== 0);
    }

    touchStart(e: TouchEvent) {
        const { pageX, pageY } = e.changedTouches[0];
        this.touches = { pageX, pageY };
    }

    dragMove(e: TouchEvent) {
        e.preventDefault();
        const word = e.target as HTMLElement;
        this.current = word;

        const { pageX, pageY } = e.changedTouches[0];

        word.style.position = 'absolute';
        word.style.pointerEvents = 'none';

        word.style.top = `${pageY - word.offsetHeight / 2}px`;
        word.style.left = `${pageX - word.offsetWidth / 2}px`;

        const dropElement = document.elementFromPoint(pageX, pageY) as HTMLElement;
        if (this.dropElement !== dropElement) this.dropElement = dropElement;

        if (this.dropElement?.className === 'field') {
            this.dragoverHandler(e as unknown as DragEvent, this.dropElement as HTMLElement);
            this.answer?.clearFields(this.dropElement);
        }
    }

    dragDrop(e: TouchEvent) {
        e.preventDefault();
        const word = e.target as HTMLElement;
        word.style.position = 'static';
        word.style.pointerEvents = 'auto';
        word.style.top = `0`;
        word.style.left = `0`;

        const newX = e.changedTouches[0].pageX;
        const newY = e.changedTouches[0].pageY;

        if (newX === this.touches?.pageX && newY === this.touches?.pageY) {
            this.clickHandler(e);
            return;
        }
        this.answer?.clearFields();

        if (this.current) {
            if (this.current.parentElement?.className === 'field') {
                const currentId = this.current!.parentElement!.dataset.index!;
                this.answer?.removeWord(currentId);
            }
            if (this.dropElement?.className === 'field') {
                this.answer?.appendWord(this.current, this.dropElement?.dataset.index);
            } else if (
                this.dropElement?.classList.contains('word') &&
                this.dropElement?.parentElement?.className === 'field'
            ) {
                const targetId = this.dropElement.parentElement!.dataset.index!;

                if (this.current!.parentElement?.className === 'field') {
                    const currentId = this.current!.parentElement!.dataset.index!;
                    this.answer?.appendWord(this.dropElement, currentId);
                } else {
                    this.dataSource?.append([this.dropElement]);
                }

                this.answer?.removeWord(targetId);
                this.answer?.appendWord(this.current!, targetId);
            } else {
                this.dataSource?.append([this.current]);
            }
        }
        this.button?.setDisabled(this.dataSource?.getComponent().childNodes.length !== 0);
    }
}
