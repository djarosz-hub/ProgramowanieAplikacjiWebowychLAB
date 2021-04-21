export const createGretting = ():HTMLDivElement =>{
    const greeting = document.createElement('div');
        greeting.setAttribute('id', 'greeting');
        greeting.innerHTML = 'Wybierz giere wariacie ( ͡° ͜ʖ ͡°)';
        return greeting;
}