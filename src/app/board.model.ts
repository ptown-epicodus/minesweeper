import { Cell } from './cell.model';

export class Board {
  private grid: Cell[][];

  constructor(height: number, width: number) {
    this.grid = [];
    for (let j = 0; j < height; j++) {
      let row: Cell[] = [];
      for (let i = 0; i < width; i++) {
        let bomb: boolean = false;
        row.push(new Cell(bomb));
      }
      this.grid.push(row);
    }
  }

  debug() {
    let debugString: string = '';
    this.grid.forEach(function(row) {
      row.forEach(function(cell) {
        debugString += cell.bomb ? 'X' : '+';
      });

      debugString += "\n";
    });
    console.log(debugString);
  }
}
