// jshint esversion:10

class Hero extends Figure {
  /* Enherits from Figure class */

  constructor(x, game) {
    super(x, game);
  }

  movemetX() {
    this.speedX += this.accelerationX;
    this.x += this.speedX;

    const resistance = 0.5;

    if (this.speedX > 0) {
      this.speedX -= resistance;
    } else if (this.speedX < 0) {
      this.speedX += resistance;
    }
  }

  jump() {
    if (!this.jumping) {
      this.speedY = -10;
      this.jumping = true;
    }
  }

  move(direction, keyType) {
    if (keyType === 'keydown') {
      switch (direction) {
        case 'ArrowLeft':
        case 'a':
          this.accelerationX -= 1;
          break;
        case 'ArrowRight':
        case 'd':
          this.accelerationX += 1;
          break;
      }
    } else if (keyType === 'keyup') {
      switch (direction) {
        case 'd':
        case 'a':
        case 'ArrowRight':
        case 'ArrowLeft':
          this.accelerationX = 0;
          break;
        case 'ArrowUp':
        case ' ':
          this.accelerationY = 0;
          break;
      }
    }
  }

  verticalMovement() {
    this.y += this.speedY;

    if (this.y < this.initialY) {
      this.speedY += this.gravity;
      this.jumping = true;
    } else {
      this.speedY = 0;
      this.jumping = false;
    }
  }

  checkInteration(obj) {
    return this.x + this.width / 2 >= obj.x - obj.width / 2; //Need Jose explanation
  }

  paint() {
    const game = this.game;
    const ctx = game.ctx;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  logic() {
    this.movemetX();
    this.verticalMovement();
  }
}
