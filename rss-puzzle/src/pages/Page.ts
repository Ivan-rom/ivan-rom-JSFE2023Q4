import { BaseComponent, Params } from '../BaseComponent.ts';

export default class Page<T extends HTMLElement = HTMLElement> extends BaseComponent<T> {
    constructor(params?: Params<T>, content?: HTMLElement | BaseComponent) {
        super(params);
        if (content) this.append([content]);
    }

    render() {}
}
