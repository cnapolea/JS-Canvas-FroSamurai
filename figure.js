// jshint esversion:10

class Figure {
  /* Main class for game figures. It takes a position X and Y in relation to the canvas. */

  constructor(x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.3;
    this.accelerationX = 0;

    this.lives = 1;
    this.jumping = false;
    this.moving = false;
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

  move(direction) {
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
  }

  verticalMovement() {
    this.y += this.speedY;

    if (this.y < this.game.gameDisplay.height / 1.5) {
      this.speedY += this.gravity;
      this.jumping = true;
    } else {
      this.speedY = 0;
      this.jumping = false;
    }
  }
}
