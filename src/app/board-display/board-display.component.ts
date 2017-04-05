import { Component, OnInit } from '@angular/core';

import { Board } from '../board.model';
import { Cell } from '../cell.model';

@Component({
  selector: 'app-board-display',
  templateUrl: './board-display.component.html',
  styleUrls: ['./board-display.component.css']
})
export class BoardDisplayComponent implements OnInit {
  public gameBoard: Board;

  constructor() { }

  ngOnInit() {
    this.gameBoard = new Board(5, 5, 50);
  }

  revealCellAt(x: number, y: number) {
    this.gameBoard.exposeCellAt(x, y);
    if (this.gameBoard.cellAt(x, y).bomb) {
      alert('You lose!');
    }
  }

}
