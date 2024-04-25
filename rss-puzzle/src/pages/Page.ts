import { BaseComponent, Params } from '../BaseComponent';

import './page.css';

export default class Page<T extends HTMLElement = HTMLElement> extends BaseComponent<T> {
    constructor(params: Params<T> = {}) {
        const newParams = Object.assign(params, { className: `${params.className} main` });
        super(newParams);
    }

    render() {
        this.component.classList.remove('out');
        this.component.classList.add('in');
        document.body.appendChild(this.component);
        this.component.onanimationend = () => {
            this.component.classList.remove('in');
            this.component.onanimationend = null;
        };
    }
}
