export type ComponentEvent = {
    type: string;
    callback: (() => void) | ((event: Event) => void);
};
