class Switcher {

    constructor() {
        this.init();
    }
    init(): void {
        const switcher = <HTMLElement>document.createElement('div');
        switcher.className = 'switcher';
        switcher.addEventListener('click', () => {
            if(document.body.hasAttribute('dark-theme')){
                document.body.removeAttribute('dark-theme');
            }
            else{
                document.body.setAttribute('dark-theme', 'dark');
            }
        })
        document.body.appendChild(switcher);
    }
}
export default Switcher;