import { Component, OnInit } from '@angular/core';

import { Board } from '../board.model';

@Component({
  selector: 'app-board-display',
  templateUrl: './board-display.component.html',
  styleUrls: ['./board-display.component.css']
})
export class BoardDisplayComponent implements OnInit {
  public gameBoard: Board;

  constructor() { }

  ngOnInit() {
    this.gameBoard = new Board(3, 3, 50);
  }

}
