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

    this.neighborsAt(x,y).forEach(function(cell) {
      if (cell.bomb)
        numberOfBombs++;
    });

    return numberOfBombs;
  }

  exposeCellAt(x: number, y: number) {
    this.cellAt(x, y).exposed = true;
  }

  neighborsAt(x: number, y: number) {
    let neighbors: Cell[] = [];

    let beginningX = Math.max(x - 1, 0);
    let beginningY = Math.max(y - 1, 0);
    let endX = Math.min(x + 1, this.width - 1);
    let endY = Math.min(y + 1, this.height - 1);

    for (let i = beginningX; i <= endX; i++) {
      for (let j = beginningY; j <= endY; j++) {
        if (i == x && j == y)
          continue;
        neighbors.push(this.cellAt(i,j));
      }
    }

    return neighbors;
  }

  revealNeighborsAt(x: number, y: number) {
    let unmarkedNeighbors: Cell[] =
      this.neighborsAt(x,y).filter(function(cell) {
        return ! cell.marked;
      });
    let markedNeighbors: Cell[] =
      this.neighborsAt(x,y).filter(function(cell) {
        return cell.marked;
      });

    if (this.adjacentBombsTo(x,y) == markedNeighbors.length) {
      unmarkedNeighbors.forEach(function(cell) {
        cell.exposed = true;
      });
    }
  }

  completed() {
    return this.grid.every(function(row) {
      return row.every(function(cell) {
        return cell.exposed || cell.bomb;
      });
    });
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
