import Cell from "./Cell";
export default class Board {
    cells: Cell[];
    currentSymbol: number;
    tableSize: number;
    constructor(size: number) {
        this.currentSymbol = 1;
        this.cells = new Array(size);
        this.tableSize = size;
        let table = <HTMLTableElement>document.getElementById("tictactoe");
        let i = 0;
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = "cell";
                const newCell = new Cell(cell, r, c);
                this.cells[i] = newCell;
                cell.addEventListener("click", () => this.makeMove(newCell), false);
                i++;
            }
        }
    }
    setHeaderValue(currSymbol: number): void {
        const header = <HTMLElement>document.getElementById('header');
        let val: string = "";
        switch (currSymbol) {
            case 1: {
                val = 'Ruch: krzyżyk';
                break;
            }
            case -1: {
                val = 'Ruch: kółko';
                break;
            }
            case 10: {
                val = 'Wygrywa krzyżyk';
                break;
            }
            case -10: {
                val = 'Wygrywa kółko';
                break;
            }
            case 0: {
                val = 'Remis!';
                break;
            }
        }
        header.innerHTML = val;
    }
    makeMove(cell: Cell): void {
        if (cell.setCellValue(this.currentSymbol)) {
            if (this.checkForGameFinish()) {
                return;
            }
            this.currentSymbol *= -1;
            this.setHeaderValue(this.currentSymbol);
        }
    }

    checkForGameFinish(): boolean {
        const size = this.tableSize;
        if (this.rowCheck(size)) {
            this.setHeaderValue(this.currentSymbol * 10);
            return true;
        }
        if (this.columnCheck(size)) {
            this.setHeaderValue(this.currentSymbol * 10);
            return true;
        }
        if (this.diagonalCheck(size)) {
            this.setHeaderValue(this.currentSymbol * 10);
            return true;
        }
        if (this.tieCheck(size)) {
            this.setHeaderValue(0);
            return true;
        }
        return false;
    }
    rowCheck(size: number): boolean {
        const cells = this.cellsWithActualSymbol();
        if (cells.length < size) {
            return false;
        }
        for (let r = 0; r < size; r++) {
            let correctCellsInRow = 0;
            for (let c = 0; c < size; c++) {
                for (const cell of cells) {
                    if (cell.colPos === c && cell.rowPos === r) {
                        correctCellsInRow++;
                    }
                }
            }
            if (correctCellsInRow === size) {
                return true;
            }
        }
        return false;
    }
    columnCheck(size: number): boolean {
        const cells = this.cellsWithActualSymbol();
        if (cells.length < size) {
            return false;
        }
        for (let c = 0; c < size; c++) {
            let correctCellsInColumn = 0;
            for (let r = 0; r < size; r++) {
                for (const cell of cells) {
                    if (cell.colPos === c && cell.rowPos === r) {
                        correctCellsInColumn++;
                    }
                }
            }
            if (correctCellsInColumn === size) {
                return true;
            }
        }
        return false;
    }
    diagonalCheck(size: number): boolean {
        const cells = this.cellsWithActualSymbol();
        if (cells.length < size) {
            return false;
        }
        let correctCellsDiagonally: number = 0;
        for (let d = 0; d < size; d++) {
            for (const cell of cells) {
                if (cell.rowPos === d && cell.colPos === d ||
                    cell.colPos === size - 1 - d && cell.rowPos === d) {
                    correctCellsDiagonally++;
                }
            }
        }
        if (correctCellsDiagonally === size) {
            return true;
        }
        return false;
    }
    tieCheck(size: number): boolean {
        return false;

    }
    cellsWithActualSymbol(): Cell[] {
        const correctCells: Cell[] = [];
        for (const cell of this.cells) {
            if (cell.cellValue === this.currentSymbol)
                correctCells.push(cell);
        }
        return correctCells;
    }
}
