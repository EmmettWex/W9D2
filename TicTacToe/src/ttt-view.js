class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    const grid = document.createElement('ul');
    grid.className = "grid";

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let cell = document.createElement('li');
        cell.className = "cell";
        cell.dataset.position = [i,j]; // this is so sick
        grid.appendChild(cell);
      }
    }
    
    this.el[0].appendChild(grid);
  }
  
  bindEvents() {}

  handleClick(e) {
    e.addEventListener('click');
  }

  makeMove(square) {}

}

module.exports = View;
