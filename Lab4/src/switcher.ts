class Switcher {

    constructor() {
        this.init();
    }
    init(): void {
        const switcher = <HTMLElement>document.createElement('div');
        switcher.className = 'switcher';
        // <i class="fas fa-lightbulb"></i>
        const icon = document.createElement('i');
        icon.className = 'fas fa-lightbulb';

        switcher.appendChild(icon);
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