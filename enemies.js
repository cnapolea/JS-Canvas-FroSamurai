// jshint esversion:10

class Skeleton extends Figure {
  /* Enherits from Figure class */

  constructor(x, game) {
    super(x, game);
    this.imgPath = './images/enemies/Skeleton enemy/';
    this.imgLeftDirection = 'skeleton_left.png';
    this.imgRightDirection = 'skeleton_right.png';
    this.imgSrc;
    this.direction;
  }

  horizontalMovement() {
    if (this.position.x < this.dimension.w / 2) {
      this.direction = 0;
      this.imgSrc = `${this.imgPath}${this.imgRightDirection}`;

      this.speed.x = 1.5;
    } else if (
      this.position.x >=
      this.game.display.width - this.dimension.w / 2
    ) {
      this.direction = 1;
      this.imgSrc = `${this.imgPath}${this.imgLeftDirection}`;
      this.speed.x = -1.5;
    }
    this.position.x += this.speed.x;
  }

  paint() {
    const game = this.game;
    const ctx = game.ctx;

    const enemyRunningImg = new Image();
    enemyRunningImg.src = `${this.imgSrc}`;

    ctx.save();
    if (this.direction) {
      ctx.drawImage(
        enemyRunningImg,
        85 + 65 * Math.round(this.frame / 11),
        140,
        36,
        36,
        this.position.x - this.dimension.w / 2,
        this.position.y - this.dimension.h / 2,
        this.dimension.w,
        this.dimension.h
      );
    } else {
      ctx.drawImage(
        enemyRunningImg,
        0 + 65 * Math.round(this.frame / 11),
        140,
        36,
        36,
        this.position.x - this.dimension.w / 2,
        this.position.y - this.dimension.h / 2,
        this.dimension.w,
        this.dimension.h
      );
    }

    ctx.restore();
    this.frame++;
    this.frame %= 70;
  }

  logic() {
    this.horizontalMovement();
  }
}
