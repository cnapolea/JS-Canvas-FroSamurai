// jshint esversion:10

class Figure {
  /* Main class for game figures. It takes a position X and Y in relation to the canvas. */

  constructor(x, game) {
    this.game = game;
    this.width = 49;
    this.height = 45;
    this.initialY = this.game.background.floor.positionY - this.height / 2;
    this.x = x;
    this.y = this.initialY;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.3;
    this.accelerationX = 0;

    this.lives = 1;
    this.jumping = false;
    this.moving = false;
  }
}
