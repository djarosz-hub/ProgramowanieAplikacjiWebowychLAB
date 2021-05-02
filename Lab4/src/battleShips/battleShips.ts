import { Game } from "../gameModel";
import { disabled } from "../commonDecorators/disabled";
import { logGameRun } from "../commonDecorators/logGameRun";

@disabled
export class BattleShips implements Game {
    name: string;
    available: boolean;
    constructor() {
        this.available = true;
        this.name = "Statki";
    }
    @logGameRun
    getGameElement(): HTMLElement {
        const container = document.createElement('div');
        container.setAttribute('id', 'battleShips');
        container.innerHTML = "statki tu";
        return container;
    }
}