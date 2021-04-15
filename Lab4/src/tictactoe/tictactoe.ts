import { Game } from "../gameModel";
import Board from "./Board";

export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
        const container = document.createElement('div');

        const header = document.createElement('div');
        header.setAttribute('id','tttHeader');

        const table = document.createElement('table');
        table.setAttribute('id','tictactoe');

        container.appendChild(document.createTextNode("Hello TicTacToe"));
        container.appendChild(header);
        container.appendChild(table);
        let tableSize: number = 3;
        setTimeout(() => new Board(tableSize), 1);
        return container;
    }
}