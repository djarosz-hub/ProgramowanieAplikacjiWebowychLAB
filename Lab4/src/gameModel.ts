export interface Game {
    available: boolean;
    name: string;
    getGameElement(): HTMLElement;
}