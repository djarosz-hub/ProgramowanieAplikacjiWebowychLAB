import { Games } from "./gamesEnum";
import { Game } from "./gameModel";
import { TicTacToe } from "./tictactoe/tictactoe";
import './styles/styles.scss';
import Switcher from './switcher';
class App {

    constructor() {
        this.init();
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div'));
        const gameContainer = <HTMLDivElement>(document.createElement('div'));
        const menuHeader = <HTMLDivElement>(document.createElement('div'));
        const list = document.createElement('ul');

        menuContainer.className = 'menu';
        gameContainer.className ='gameSpot';


        for(const gameKind of Object.keys(Games)){
            if(isNaN(Number(gameKind)))
                continue;
            const game = gameFactory.getGame(Number(gameKind));
            const item = document.createElement('li');
            item.appendChild(document.createTextNode(game.name));
            item.addEventListener("click", ()=>{
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
    }
}
class GameFactory {
    getGame(game: Games): Game {
        switch (game) {
            case Games.TicTacToe:
                return new TicTacToe;
            default:
                throw new Error('invalid game');
        }
    }
}
let gameFactory = new GameFactory();
new App();