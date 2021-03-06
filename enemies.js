// jshint esversion:10

class Skeleton extends Figure {
  /* Enherits from Figure class */

  constructor(x, game) {
    super(x, game);
    this.imgPath = './images/enemies/Skeleton enemy/';
    this.imgLeftDirection = 'skeleton_left.png';
    this.imgRightDirection = 'skeleton_right.png';
    this.attackRight = 'Attack_right.png';
    this.attackLeft = 'Attack_left.png';
    this.imgSrc;
    this.direction;
    this.difficulty = 0;
  }

  horizontalMovement() {
    if (this.position.x < this.dimension.w / 2) {
      this.direction = 0;
      this.imgSrc = `${this.imgPath}${this.imgRightDirection}`;

      this.speed.x = 1.5 + this.difficulty;
    } else if (
      this.position.x >=
      this.game.display.width - this.dimension.w / 2
    ) {
      this.direction = 1;
      this.imgSrc = `${this.imgPath}${this.imgLeftDirection}`;
      this.speed.x = -1.5 - this.difficulty;
    }

    if (!this.status.takingDamage) {
      this.position.x += this.speed.x;
    }
  }

  paint() {
    const img = new Image();
    img.src = `${this.imgSrc}`;

    if (!this.status.takingDamage && !this.status.attacking) {
      this.drawImage(this.direction, img, 85, 0, 65, 140, 36, 41, 70, 11);
    } else if (this.status.takingDamage && !this.status.attacking) {
      this.drawImage(this.direction, img, 593, 9, 60, 270, 39, 41, 70, 30);
    } else if (this.status.attacking && !this.status.takingDamage) {
      this.drawImage(this.direction, img, 15, 15, 60, 15, 60, 34, 70, 18);
    }
  }

  logic() {
    if (!this.lives.length) {
      this.game.gameOverDisplay.children[0].innerHTML = `You Won! You have saved your partner and soon you both will keep fighting together the forces of the underworld!`;
      this.game.status.gameOver = true;
      this.game.playingDisplay.style.display = 'none';
      this.game.gameOverDisplay.style.display = 'flex';
    }

    const distanceHeroEnemyX = this.position.x - this.game.hero.position.x;
    const distanceHeroEnemyY = this.position.y - this.game.hero.position.y;

    if (
      Math.abs(distanceHeroEnemyX) <= 150 &&
      Math.abs(distanceHeroEnemyY) <= 100
    ) {
      this.status.attacking = true;
    } else {
      this.status.attacking = false;
    }

    if (this.status.takingDamage) {
      this.health -= 0.0008;
      setTimeout(() => {
        this.status.takingDamage = false;
      }, 4000);
    } else {
      this.horizontalMovement();
    }

    this.removeLife();
  }
}
