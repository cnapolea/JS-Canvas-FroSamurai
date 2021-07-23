// jshint esversion:10

const checkIntersection = (first, second) =>
  first.position.x + first.dimension.w / 2 >
    second.position.x - second.dimension.w / 2 &&
  first.position.x - first.dimension.w / 2 <
    second.position.x + second.dimension.w / 2 &&
  first.position.y + first.dimension.h / 2 >
    second.position.y - second.dimension.h / 2 &&
  first.position.y - first.dimension.h / 2 <
    second.position.y + second.dimension.h / 2;

class Hero extends Figure {
  /* Enherits from Figure class */

  constructor(x, game) {
    super(x, game);
    this.imgPath = './images/main_character/Martial Hero 2/Sprites/';
    this.idleImg = 'Idle';
    this.runningImg = 'Run';
    this.jumpingImg = 'Jump';
    this.attackingImg = 'Attack2';
    this.damageImg = 'Damage';
    this.imgSrc;
    this.direction = 1;
  }

  hitsFloor() {
    if (this.position.y > this.game.floor.position.y) {
      this.speed.y = 0;
      this.status.jumping = false;
      this.position.y = this.game.floor.position.y;
    }
  }

  jump() {
    if (!this.status.jumping) {
      this.speed.y -= 15;
      this.status.jumping = true;
    }
  }

  movement() {
    this.speed.x += this.acceleration.x;

    let newPosition = {
      x: this.position.x + this.speed.x,
      y: this.position.y + this.speed.y
    };

    if (this.speed.x > 0) {
      this.speed.x -= this.forces.resistance;
    } else if (this.speed.x < 0) {
      this.speed.x += this.forces.resistance;
    }

    this.game.commonEnemies.forEach((enemy) => {
      if (checkIntersection(this, enemy)) {
        if (!this.status.takingDamage) {
          this.status.takingDamage = true;
        }
        console.log(this.lives);
      }
    });

    this.speed.y += this.forces.gravity;

    this.game.platforms.forEach((platform) => {
      if (checkIntersection(this, platform)) {
        if (!this.status.jumping) {
          this.position.y = newPosition.y;
          this.position.x = newPosition.x;
          this.speed.y = 0;
        }
        this.status.jumping = false;
      }
    });

    this.position.y = newPosition.y;
    this.position.x = newPosition.x;
    this.hitsFloor();
  }

  move(direction, keyType) {
    if (keyType === 'keydown') {
      switch (direction) {
        case 'ArrowLeft':
        case 'a':
          this.status.moving = true;
          this.direction = 0;
          this.acceleration.x -= 1;
          break;
        case 'ArrowRight':
        case 'd':
          this.status.moving = true;
          this.direction = 1;
          this.acceleration.x += 1;
          break;
      }
    } else if (keyType === 'keyup') {
      switch (direction) {
        case 'd':
        case 'a':
        case 'ArrowRight':
        case 'ArrowLeft':
          this.status.moving = false;
          this.acceleration.x = 0;
          break;
        case 'ArrowUp':
        case ' ':
          this.acceleration.y = 0;
          break;
      }
    }
  }

  paint() {
    const heroImg = new Image();

    if (
      !this.status.moving &&
      !this.status.jumping &&
      !this.status.attacking &&
      !this.status.takingDamage
    ) {
      heroImg.src = this.direction
        ? `${this.imgPath}${this.idleImg}_right.png`
        : `${this.imgPath}${this.idleImg}_left.png`;
      this.drawImage(this.direction, heroImg, 80, 80, 200, 70, 36, 60, 70, 30);
    } else if (this.status.moving && !this.status.jumping) {
      heroImg.src = this.direction
        ? `${this.imgPath}${this.runningImg}_right.png`
        : `${this.imgPath}${this.runningImg}_left.png`;
      this.drawImage(this.direction, heroImg, 80, 80, 200, 70, 36, 60, 70, 10);
    } else if (this.status.jumping) {
      heroImg.src = this.direction
        ? `${this.imgPath}${this.jumpingImg}_right.png`
        : `${this.imgPath}${this.jumpingImg}_left.png`;
      this.drawImage(this.direction, heroImg, 80, 80, 200, 72, 50, 60, 70, 60);
    } else if (this.status.attacking) {
      heroImg.src = this.direction
        ? `${this.imgPath}${this.attackingImg}_left.png`
        : `${this.imgPath}${this.attackingImg}_right.png`;
      this.game.ctx.save();

      this.game.ctx.drawImage(
        heroImg,
        80 + 210 * Math.round(this.frame / 10),
        65,
        100,
        70,
        this.position.x - this.dimension.w / 2,
        this.position.y - this.dimension.h / 2,
        this.dimension.w,
        this.dimension.h
      );

      this.frame++;
      this.frame %= 70;
    } else if (this.status.takingDamage) {
      heroImg.src = this.direction
        ? `${this.imgPath}${this.damageImg}_left.png`
        : `${this.imgPath}${this.damageImg}_right.png`;
      this.drawImage(this.direction, heroImg, 80, 80, 200, 72, 50, 60, 70, 30);
    }
  }

  logic() {
    if (this.status.takingDamage) {
      setTimeout(() => {
        this.lives -= 0.0005;
        this.status.takingDamage = false;
      }, 2000);
    } else {
      this.movement();
    }
  }
}
