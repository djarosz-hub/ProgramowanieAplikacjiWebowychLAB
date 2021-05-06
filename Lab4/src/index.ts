import { Games } from "./gamesEnum";
import { Game } from "./gameModel";
import { TicTacToe } from "./tictactoe/tictactoe";
import './styles/styles.scss';
import Switcher from './switcher';
import Back from './back';
import {createGretting} from './commonUtils';
import { BattleShips } from "./battleShips/battleShips";
class App {

    constructor() {
        this.init();
    }
    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div'));
        const gameContainer = <HTMLDivElement>(document.createElement('div'));
        const menuHeader = <HTMLDivElement>(document.createElement('div'));
        const list = document.createElement('ul');

        menuContainer.setAttribute('id','menu');
        gameContainer.className = 'gameSpot';
        gameContainer.setAttribute('id', 'gameContainer');
        gameContainer.appendChild(createGretting());

        for (const gameKind of Object.keys(Games)) {
            if (isNaN(Number(gameKind)))
                continue;
            const game = gameFactory.getGame(Number(gameKind));
            if(game.available === false)
                continue;
            const item = document.createElement('li');
            item.appendChild(document.createTextNode(game.name));
            item.addEventListener("click", () => {
                const greet = document.getElementById('back');
                greet?.classList.remove('backHidden')
                menuContainer.setAttribute('hidden','true');
                gameContainer.innerHTML = "";
                gameContainer.appendChild(game.getGameElement());
            })
            list.appendChild(item);
        }
        const menuHeaderP = <HTMLElement>document.createElement('p');
        menuHeaderP.innerHTML = 'Dostępne gry:';
        menuHeader.appendChild(menuHeaderP);
        menuContainer.appendChild(menuHeader);
        menuContainer.appendChild(list);

        const main = <HTMLElement>document.createElement('main');
        main.className = 'mainContainer';
        main.appendChild(menuContainer);
        main.appendChild(gameContainer);
        document.body.appendChild(main);
        new Switcher();
        new Back();
    }
}
class GameFactory {
    getGame(game: Games): Game {
        switch (game) {
            case Games.TicTacToe:
                return new TicTacToe;
            case Games.BattleShips:
                return new BattleShips;
            default:
                throw new Error('invalid game');
        }
    }
}
let gameFactory = new GameFactory();
new App();