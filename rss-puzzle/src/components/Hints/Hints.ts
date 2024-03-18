import Api from '../../API/api';
import { BaseComponent } from '../../BaseComponent';
import Button from '../Button/Button';

import './hints.css';

export default class Hints extends BaseComponent {
    translationHint: BaseComponent;

    audioHint: Button;

    isTranslation: boolean;

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

        const hints = new BaseComponent({ className: 'hints-content' }, [this.translationHint, this.audioHint]);
        const buttons = new BaseComponent({ className: 'hints-buttons' }, [translationButton, audioButton]);

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
}
