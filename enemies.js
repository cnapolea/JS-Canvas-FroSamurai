// jshint esversion:10

class Skeleton extends Figure {
  /* Enherits from Figure class */

  constructor(x, y, game) {
    super(x, y, game);
  }

  horizontalMovement() {
    if (this.x <= 0) {
      this.speedX = 3;
    } else if (this.x >= this.game.display.width - 49) {
      this.speedX = -3;
    }
    this.x += this.speedX;
    console.log(this.x);
  }

  paint() {
    const game = this.game;
    const ctx = game.ctx;
    ctx.save();

    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }

  logic() {
    this.horizontalMovement();
  }
}
