import { BaseComponent } from '../../BaseComponent';
import Button from '../Button/Button';

import './hints.css';

export default class Hints extends BaseComponent {
    translationHint: BaseComponent;

    isTranslation: boolean;

    TranslationButton: Button;

    constructor(translationHint: BaseComponent) {
        super({ className: 'hints' });
        this.translationHint = translationHint;
        this.isTranslation = false;
        this.TranslationButton = this.createTranslationButton();

        this.append([this.TranslationButton]);
    }

    showTranslation(isForced: boolean = false) {
        if (this.isTranslation || isForced) this.translationHint.getComponent().classList.add('shown');
        else this.translationHint.getComponent().classList.remove('shown');
    }

    createTranslationButton(): Button {
        const callback = () => {
            this.isTranslation = !this.isTranslation;
            this.showTranslation();
        };
        const button = new Button('Translation hint', callback, 'hint-button');

        return button;
    }
}
