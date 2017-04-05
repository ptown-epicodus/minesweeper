# Minesweeper

This minesweeper game was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" without detonating any of them, with help from clues about the number of neighboring mines in each field. The game originates from the 1960s, and has been written for many computing platforms in use today. It has many variations and offshoots.

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
|User begins game by clicking a field in the grid| C4 | 2 |
|User chooses a mined field and loses. | D2 | "you lose"|
|User chooses only clear fields and wins | A1 | "you win"|
|User restarts the game | "restart" | fresh start! |

# To-Do
* When revealed, cells with no bomb-neighbors recursively reveal their neighbors
* Total bomb countdown
* Stopwatch for gameplay
* Right-clicking on revealed cell that has correct # of neighbors marked reveals rest of neighbors
* Bomb-neighbor count in cells is color-coded
* Game board is setup with form for width, height, difficulty


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
