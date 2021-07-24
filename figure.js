// jshint esversion:10

class Figure {
  /* Main class for game figures. It takes a position X and Y in relation to the canvas. */

  constructor(x, game) {
    this.game = game;
    this.floorY = this.game.floor.position.y;
    this.health = 1;
    this.lives = [
      new Live(game, this),
      new Live(game, this),
      new Live(game, this)
    ];
    this.frame = 0;
    this.weapon = new Weapon(game, this, 40, 5);

    this.dimension = {
      w: 49,
      h: 60
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
      moving: false,
      attacking: false,
      takingDamage: false
    };
  }

  drawImage(
    direction,
    imageSource,
    sx1,
    sx2,
    imgDistance,
    sy,
    sw,
    sh,
    frame,
    refreshDominator
  ) {
    this.game.ctx.save();

    if (direction) {
      this.game.ctx.drawImage(
        imageSource,
        sx1 + imgDistance * Math.round(this.frame / refreshDominator),
        sy,
        sw,
        sh,
        this.position.x - this.dimension.w / 2,
        this.position.y - this.dimension.h / 2,
        this.dimension.w,
        this.dimension.h
      );
    } else {
      this.game.ctx.drawImage(
        imageSource,
        sx2 + imgDistance * Math.round(this.frame / refreshDominator),
        sy,
        sw,
        sh,
        this.position.x - this.dimension.w / 2,
        this.position.y - this.dimension.h / 2,
        this.dimension.w,
        this.dimension.h
      );
    }

    this.game.ctx.restore();
    this.frame++;
    this.frame %= frame;
  }

  removeLife() {
    if (this.health > 0.3 && this.health <= 0.3 * 2) {
      this.lives = [new Live(this.game, this), new Live(this.game, this)];
    } else if (this.health <= 0.3 && this.health > 0) {
      this.lives = [new Live(this.game, this)];
    } else if (this.health <= 0) {
      this.lives.pop();
    }
  }
}
