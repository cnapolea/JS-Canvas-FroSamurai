// jshint esversion:10

class Weapon {
  constructor(game, character, width, height) {
    this.game = game;
    this.character = character;
    this.swordDisplacement = 0;
    this.position = {
      x: 0,
      y: 0
    };
    this.dimension = {
      w: width,
      h: height
    };
    this.characterCenterX;
    this.characterCenterY;
  }

  logic() {
    this.game.commonEnemies.forEach((enemy) => {
      if (this.character.status.attacking) {
        if (checkIntersection(this, enemy)) {
          if (!enemy.status.takingDamage) {
            enemy.status.takingDamage = true;
          }
        }
      }
    });
  }

  paint() {
    const ctx = this.game.ctx;
    if (this.character.direction) {
      this.position.x =
        this.character.position.x -
        this.dimension.w / 2 +
        this.swordDisplacement;
    } else {
      this.position.x =
        this.character.position.x +
        -this.dimension.w / 2 +
        this.swordDisplacement;
    }

    this.position.y = this.character.position.y;

    ctx.save();

    ctx.fillStyle = 'transparent';
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.dimension.w,
      this.dimension.h
    );

    this.game.ctx.restore();
  }
}
