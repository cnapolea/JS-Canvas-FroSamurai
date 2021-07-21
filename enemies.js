// jshint esversion:10

class Skeleton extends Figure {
  /* Enherits from Figure class */

  constructor(x, game) {
    super(x, game);
  }

  horizontalMovement() {
    if (this.position.x < this.dimension.w / 2) {
      this.speed.x = 3;
    } else if (
      this.position.x >=
      this.game.display.width - this.dimension.w / 2
    ) {
      this.speed.x = -3;
    }
    this.position.x += this.speed.x;
  }

  paint() {
    const game = this.game;
    const ctx = game.ctx;
    ctx.save();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(
      this.position.x - this.dimension.w / 2,
      this.position.y - this.dimension.h / 2,
      this.dimension.w,
      this.dimension.h
    );
    ctx.restore();
  }

  logic() {
    this.horizontalMovement();
  }
}
