// jshint esversion:10

class Backgorund {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.game = game;
  }

  paint() {
    this.game.ctx.fillRect(this.x, this.y);
  }
}
