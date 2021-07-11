// jshint esversion:10

class Hero extends Figure {
  /* Enherits from Figure class */

  constructor(x, y, game) {
    super(x, y, game);
  }

  paint() {
    const game = this.game;
    const ctx = game.ctx;
    ctx.fillRect(this.x, this.y, 49, 45);
  }

  logic() {
    this.movemetX();
    this.verticalMovement();
  }
}
