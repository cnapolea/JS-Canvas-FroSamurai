// jshint esversion:10

class Figure {
  /* Main class for game figures. It takes a position X and Y in relation to the canvas. */

  constructor(x, game) {
    this.game = game;
    this.floorY = this.game.floor.position.y;
    this.lives = 1;
    this.frame = 0;

    this.dimension = {
      w: 49,
      h: 45
    };

    this.position = {
      x: x,
      y: this.floorY
    };

    this.speed = {
      x: 0,
      y: 0
    };

    this.acceleration = {
      x: 0,
      y: 0,
      g: 0
    };

    this.forces = {
      gravity: 0.5,
      resistance: 0.5
    };

    this.status = {
      jumping: false,
      moving: false
    };
  }
}
