export function toCapitalize(str: string): string {
    const last = str.slice(1);
    return str[0].toUpperCase() + last;
}
