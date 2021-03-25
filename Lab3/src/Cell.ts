export default class Cell{
cellValue: number;
htmlElement: HTMLElement;
constructor(cell: HTMLElement) {
    this.htmlElement = cell;
}

setCellValue(value: number) {
    if(this.cellValue === 1 || this.cellValue === -1)
        return;
    this.cellValue = value;
    switch(this.cellValue){
        case -1:{
            this.htmlElement.innerHTML = "O";
            break;
        }
        case 1:{
            this.htmlElement.innerHTML = "X";
            break;
        }
    }
}
}