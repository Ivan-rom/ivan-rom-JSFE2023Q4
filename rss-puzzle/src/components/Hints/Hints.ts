import Api from '../../API/api';
import { BaseComponent } from '../../BaseComponent';
import Button from '../Button/Button';
import WordComponent from '../WordComponent/WordComponent';

import './hints.css';

export default class Hints extends BaseComponent {
    translationHint: BaseComponent;

    audioHint: Button;

    words?: WordComponent[];

    isTranslation: boolean;

    isImage: boolean;

    isAudio: boolean;

    audio?: HTMLAudioElement;

    parent: BaseComponent;

    constructor(parent: BaseComponent) {
        super({ className: 'hints' });
        this.parent = parent;
        this.translationHint = new BaseComponent({ className: 'hint translation' });
        const audioCallback = () => {
            this.audio?.play();
            this.audioHint.getComponent().classList.add('playing');
            this.audioHint.setDisabled(true);
        };
        this.audioHint = new Button('play', audioCallback, 'hint audio');

        this.isTranslation = false;
        const translationButton = this.createTranslationButton();

        this.isAudio = false;
        const audioButton = this.createAudioButton();

        this.isImage = false;
        const ImageButton = this.createImageButton();

        const hints = new BaseComponent({ className: 'hints-content' }, [this.translationHint, this.audioHint]);
        const buttons = new BaseComponent({ className: 'hints-buttons' }, [
            translationButton,
            audioButton,
            ImageButton,
        ]);

        this.append([buttons]);
        this.parent.append([hints]);
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
        console.log(this.audio);

        this.audio?.addEventListener('ended', () => {
            this.audioHint.getComponent().classList.remove('playing');
            this.audioHint.setDisabled(false);
        });
    }

    setWords(words: WordComponent[]) {
        console.log(words);

        this.words = words;
    }

    createTranslationButton(): Button {
        const callback = () => {
            this.isTranslation = !this.isTranslation;
            this.showTranslation();
        };
        const button = new Button('Translation hint', callback, 'hint-button');

        return button;
    }

    createAudioButton(): Button {
        const callback = () => {
            this.isAudio = !this.isAudio;
            this.showAudio();
        };
        const button = new Button('Audio hint', callback, 'audio-button');

        return button;
    }

    createImageButton(): Button {
        const callback = () => {
            this.isImage = !this.isImage;
            this.showImage();
        };
        const button = new Button('Image hint', callback, 'image-button');

        return button;
    }
}
