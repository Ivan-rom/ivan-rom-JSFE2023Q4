export function toCapitalize(str: string): string {
    const last = str.slice(1);
    return str[0].toUpperCase() + last;
}

export function randomizeArray<T>(arr: Array<T>): Array<T> {
    return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

export function updateRoundId(levelId: number, roundId: number): string {
    return [levelId, String(roundId).padStart(2, '0')].join('_');
}
