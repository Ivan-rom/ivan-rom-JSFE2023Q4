import Api from '../../API/api';
import { BaseComponent } from '../../BaseComponent';
import Button from '../../components/Button/Button';
import { StatisticType, User, Word } from '../../types';
import Page from '../Page';

import './statistic.css';

export default class Statistic extends Page {
    data: StatisticType;

    constructor() {
        super({ className: 'statistic' });
        this.data = JSON.parse(localStorage.getItem('statistic')!);
    }

    render() {
        super.render();
        this.component.innerHTML = '';
        this.data = JSON.parse(localStorage.getItem('statistic')!);
        const content = new BaseComponent({ className: 'statistic-content' });
        const knownWords = this.data.words.filter((word) => !word.isSkipped);
        const unknownWords = this.data.words.filter((word) => word.isSkipped);

        const button = new Button(
            'Continue',
            () => {
                window.location.hash = `game/${(JSON.parse(localStorage.getItem('user')!) as User).lastRound}`;
            },
            'continue'
        );
        content.append([this.createImage(), this.createList(knownWords), this.createList(unknownWords, true), button]);
        this.append([content]);
    }

    createList(words: (Word & { isSkipped: boolean })[], isSkipped: boolean = false): BaseComponent {
        const title = new BaseComponent({
            className: 'list-title',
            textContent: isSkipped ? "I don't know" : 'I know',
        });
        const ul = new BaseComponent({ tag: 'ul', className: 'words' });
        words.forEach((word) => {
            const audio = new Audio(`${Api.path}${word.audioExample}`);
            const button = new Button('', () => {}, 'audio');
            audio.addEventListener('ended', () => {
                button.getComponent().classList.remove('playing');
                button.setDisabled(false);
            });

            const callback = () => {
                audio.play();
                button.getComponent().classList.add('playing');
                button.setDisabled(true);
            };
            button.getComponent().onclick = callback;
            button.append([new BaseComponent({ className: 'image' })]);
            const sentence = new BaseComponent({ className: 'sentence', textContent: word.textExample });
            const li = new BaseComponent({ tag: 'li', className: 'element' }, [button, sentence]);
            ul.append([li]);
        });
        const wrapper = new BaseComponent({ className: 'list-wrapper' }, [title, ul]);
        return wrapper;
    }

    createImage(): BaseComponent {
        const text = `${this.data.levelData.name} - ${this.data.levelData.author} (${this.data.levelData.year})`;

        const information = new BaseComponent({ className: 'artwork-information', textContent: text });
        const image = new BaseComponent<HTMLImageElement>({
            tag: 'img',
            className: 'artwork',
            src: `${Api.path}images/${this.data.levelData.cutSrc}`,
            alt: text,
        });

        const wrapper = new BaseComponent({ className: 'artwork-wrapper' }, [image, information]);

        return wrapper;
    }
}
