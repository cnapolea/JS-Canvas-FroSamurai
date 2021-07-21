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
    const enemyRunningImg = new Image();
    enemyRunningImg.src = `${this.imgSrc}`;

    this.drawImage(
      this.direction,
      enemyRunningImg,
      85,
      0,
      65,
      140,
      36,
      41,
      70,
      11
    );
  }

  logic() {
    this.horizontalMovement();
  }
}
