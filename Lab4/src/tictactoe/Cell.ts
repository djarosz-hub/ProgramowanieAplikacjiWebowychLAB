import { highlightCellChoose } from "./tttDecorators/highlightDec";

export default class Cell {
    cellId: string;
    cellValue: number;
    htmlElement: HTMLElement;
    rowPos: number;
    colPos: number;
    constructor(cell: HTMLElement, rowPos: number, colPos: number) {
        this.htmlElement = cell;
        this.rowPos = rowPos;
        this.colPos = colPos;
        this.cellId = `${rowPos}${colPos}`
    }
    @highlightCellChoose()
    setCellValue(value: number): boolean {
        if (this.cellValue === 1 || this.cellValue === -1)
            return false;
        this.cellValue = value;
        console.log(this.htmlElement)
        switch (this.cellValue) {
            case -1: {
                this.htmlElement.innerHTML = "O";
                break;
            }
            case 1: {
                this.htmlElement.innerHTML = "X";
                break;
            }
            default:{
                this.htmlElement.innerHTML = "";
                break;
            }
        }
        return true;
    }
}