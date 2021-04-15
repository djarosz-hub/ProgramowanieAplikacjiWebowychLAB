import { Games } from "./gamesEnum";
import { Game } from "./gameModel";
import { TicTacToe } from "./tictactoe/tictactoe";
import './styles/styles.scss';

class App {

    constructor() {
        this.init();
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div'));
        const gameContainer = <HTMLDivElement>(document.createElement('div'));
        const list = document.createElement('ul');
        menuContainer.setAttribute("id","gameList");
        gameContainer.setAttribute("id","gameSpot");

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
        menuContainer.appendChild(list);
        const main = document.createElement('main');
        main.setAttribute('id','mainContainer');
        main.appendChild(menuContainer);
        main.appendChild(gameContainer);
        document.body.appendChild(main);
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