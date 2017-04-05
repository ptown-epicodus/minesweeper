import { Cell } from './cell.model';

export class Board {
  private grid: Cell[][];

  constructor(
    height: number,
    width: number,
    difficulty: number  // approximate percentage of cells that should have bombs
  ) {
    this.grid = [];
    for (let j = 0; j < height; j++) {
      let row: Cell[] = [];
      for (let i = 0; i < width; i++) {
        let num: number = Math.floor(Math.random() * 100/difficulty);
        let bomb: boolean = !num;
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
