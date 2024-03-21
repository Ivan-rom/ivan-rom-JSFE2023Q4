export type ComponentEvent = {
    type: string;
    callback: (() => void) | ((event: Event) => void);
};

export type Word = {
    id: number;
    word: string;
    wordTranslate: string;
    audioExample: string;
    textExample: string;
    textExampleTranslate: string;
};

export type Round = {
    levelData: {
        id: string;
        name: string;
        imageSrc: string;
        cutSrc: string;
        author: string;
        year: string;
    };
    words: Word[];
};

export type GameData = {
    rounds: Round[];
    roundsCount: number;
};

export type HintsType = {
    isImage: boolean;
    isAudio: boolean;
    isTranslation: boolean;
};

export type User = {
    name: string;
    surname: string;
    hints: HintsType;
    completedRounds: {
        [key: number]: {
            roundsCount: number;
            rounds: number[];
        };
    };
    lastRound: string;
};
