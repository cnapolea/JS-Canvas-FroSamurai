// jshint esversion:10

class Skeleton extends Figure {
  /* Enherits from Figure class */

  constructor(x, game) {
    super(x, game);
  }

  horizontalMovement() {
    if (this.x <= 0) {
      this.speedX = 3;
    } else if (this.x >= this.game.display.width - 49) {
      this.speedX = -3;
    }
    this.x += this.speedX;
  }

  paint() {
    const game = this.game;
    const ctx = game.ctx;
    ctx.save();

    ctx.fillStyle = 'yellow';
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.restore();
  }

  logic() {
    this.horizontalMovement();
  }
}
