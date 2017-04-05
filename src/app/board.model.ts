import { Cell } from './cell.model';

export class Board {
  private grid: Cell[][];

  constructor(
    private height: number,
    private width: number,
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

  cellAt(x: number, y: number) {
    x = Math.floor(x);
    y = Math.floor(y);

    if (x >= this.width || x < 0)
      return null;
    if (y >= this.height || y < 0)
      return null;

    return this.grid[y][x];
  }

  adjacentBombsTo(x: number, y: number) {
    let numberOfBombs: number = 0;
    let beginningX = Math.max(x - 1, 0);
    let beginningY = Math.max(y - 1, 0);
    let endX = Math.min(x + 1, this.width - 1);
    let endY = Math.min(y + 1, this.height - 1);

    for (let i = beginningX; i <= endX; i++) {
      for (let j = beginningY; j <= endY; j++) {
        if (i == x && j == y)
          continue;
        if (this.cellAt(i,j).bomb) {
          numberOfBombs++;
        }
      }
    }

    return numberOfBombs;
  }

  exposeCellAt(x: number, y: number) {
    this.cellAt(x, y).exposed = true;
  }

  debug() {
    let debugString: string = '';
    this.grid.forEach(function(row) {
      row.forEach(function(cell) {
        debugString += cell.bomb ? 'X ' : '+ ';
      });

      debugString += "\n";
    });
    console.log(debugString);
  }

  debugWithBombNumbers() {
    let debugString: string = '';

    for (let j = 0; j < this.height; j++) {
      for (let i = 0; i < this.width; i++) {
        debugString += (this.cellAt(i,j).bomb ? 'X' : this.adjacentBombsTo(i,j)) + ' ';
      }
      debugString += "\n";
    }

    console.log(debugString);
  }
}
