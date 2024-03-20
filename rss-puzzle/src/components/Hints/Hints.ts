import Api from '../../API/api';
import { BaseComponent } from '../../BaseComponent';
import Button from '../Button/Button';
import WordComponent from '../WordComponent/WordComponent';

import './hints.css';

export type HintsType = {
    isImage: boolean;
    isAudio: boolean;
    isTranslation: boolean;
};

export default class Hints extends BaseComponent {
    translationHint: BaseComponent;

    audioHint: Button;

    words?: WordComponent[];

    isTranslation: boolean;

    isImage: boolean;

    isAudio: boolean;

    audio?: HTMLAudioElement;

    page: BaseComponent;

    user: {
        name: string;
        surname: string;
        hints: HintsType;
    };

    translationButton: Button;

    audioButton: Button;

    imageButton: Button;

    constructor(page: BaseComponent, parent: BaseComponent) {
        super({ className: 'hints' });

        this.user = JSON.parse(localStorage.getItem('user') as string);
        this.isTranslation = this.user.hints.isTranslation;
        this.isAudio = this.user.hints.isAudio;
        this.isImage = this.user.hints.isImage;

        this.page = page;
        this.translationHint = new BaseComponent({ className: 'hint translation' });
        const audioCallback = () => {
            this.audio?.play();
            this.audioHint.getComponent().classList.add('playing');
            this.audioHint.setDisabled(true);
        };
        this.audioHint = new Button('', audioCallback, 'hint audio');
        this.audioHint.append([new BaseComponent({ className: 'image' })]);

        this.translationButton = this.createTranslationButton();
        this.audioButton = this.createAudioButton();
        this.imageButton = this.createImageButton();

        const hints = new BaseComponent({ className: 'hints-content' }, [this.translationHint, this.audioHint]);
        const buttons = new BaseComponent({ className: 'hints-buttons' }, [
            this.translationButton,
            this.audioButton,
            this.imageButton,
        ]);

        parent.append([buttons]);
        this.page.append([hints]);
    }

    showTranslation(isForced: boolean = false) {
        if (this.isTranslation || isForced) this.translationHint.getComponent().classList.add('shown');
        else this.translationHint.getComponent().classList.remove('shown');
    }

    showAudio() {
        if (this.isAudio) this.audioHint.getComponent().classList.add('shown');
        else this.audioHint.getComponent().classList.remove('shown');
    }

    showImage(isForced: boolean = false) {
        if (this.isImage || isForced) this.words?.forEach((word) => word.getComponent().classList.add('shown'));
        else this.words?.forEach((word) => word.getComponent().classList.remove('shown'));
    }

    setText(text: string) {
        this.translationHint.getComponent().textContent = text;
    }

    setAudio(audioPath: string) {
        this.audio = new Audio(`${Api.path}${audioPath}`);
        this.audio?.addEventListener('ended', () => {
            this.audioHint.getComponent().classList.remove('playing');
            this.audioHint.setDisabled(false);
        });
    }

    setWords(words: WordComponent[]) {
        this.words = words;
    }

    createTranslationButton(): Button {
        const callback = () => {
            this.isTranslation = !this.isTranslation;
            this.translationButton.getComponent().classList.toggle('active');
            this.saveHints();
            this.showTranslation();
        };
        const button = new Button('', callback, 'hint-button');
        button.append([new BaseComponent({ className: 'image' })]);
        if (this.isTranslation) button.getComponent().classList.add('active');

        return button;
    }

    createAudioButton(): Button {
        const callback = () => {
            this.isAudio = !this.isAudio;
            this.audioButton.getComponent().classList.toggle('active');
            this.saveHints();
            this.showAudio();
        };
        const button = new Button('', callback, 'audio-button');
        button.append([new BaseComponent({ className: 'image' })]);
        if (this.isAudio) button.getComponent().classList.add('active');

        return button;
    }

    createImageButton(): Button {
        const callback = () => {
            this.isImage = !this.isImage;
            this.imageButton.getComponent().classList.toggle('active');
            this.saveHints();
            this.showImage();
        };
        const button = new Button('', callback, 'image-button');
        button.append([new BaseComponent({ className: 'image' })]);
        if (this.isImage) button.getComponent().classList.add('active');

        return button;
    }

    saveHints() {
        this.user.hints.isAudio = this.isAudio;
        this.user.hints.isImage = this.isImage;
        this.user.hints.isTranslation = this.isTranslation;
        localStorage.setItem('user', JSON.stringify(this.user));
    }
}
