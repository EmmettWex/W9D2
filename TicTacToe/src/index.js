const View = require("./ttt-view")
const Game = require("../ttt_node/game")

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  
  const figure = document.getElementsByClassName("ttt");
  const view = new View(game, figure);

  view.setupBoard();
});
