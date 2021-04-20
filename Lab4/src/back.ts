class Back {

    constructor() {
        this.init();
    }
    init(): void {
        const back = <HTMLElement>document.createElement('div');
        back.classList.add('backHidden');
        back.innerHTML = "Powrót";
        back.setAttribute('id', 'back');
        back.addEventListener('click', () => {
            const backer = document.getElementById('back');
            backer?.classList.add('backHidden');

            const menu = document.getElementById('menu');
            menu?.removeAttribute('hidden');

            const greeting = document.createElement('div');
            greeting.setAttribute('id', 'greeting');
            greeting.innerHTML = 'Wybierz giere wariacie ( ͡° ͜ʖ ͡°)';

            const gameSpot = <HTMLElement>document.getElementById('gameContainer');
            gameSpot.innerHTML = "";
            gameSpot.appendChild(greeting);

        })
        document.body.appendChild(back);
    }
}
export default Back;