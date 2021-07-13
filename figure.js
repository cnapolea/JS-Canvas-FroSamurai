// jshint esversion:10

class Figure {
  /* Main class for game figures. It takes a position X and Y in relation to the canvas. */

  constructor(x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 49;
    this.height = 45;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.3;
    this.accelerationX = 0;

    this.lives = 1;
    this.jumping = false;
    this.moving = false;
  }
}
