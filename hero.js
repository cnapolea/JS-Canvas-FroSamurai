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
    this.idleRightImg = 'Idle_right.png';
    this.idleLeftImg = 'Idle_left.png';
    this.runningImg = 'Run.png';
    this.jumpingImg = 'Jump.png';
    this.fallingImg = 'Fall.png';
    this.imgLeftDirection = 'skeleton_left.png';
    this.imgRightDirection = 'skeleton_right.png';
    this.imgSrc;
    this.direction = 1;
  }

  movemetX() {
    this.speed.x += this.acceleration.x;

    this.game.platforms.forEach((platform) => {
      if (checkIntersection(this, platform)) {
      }
    });

    this.game.commonEnemies.forEach((enemy) => {
      if (checkIntersection(this, enemy)) {
      }
    });

    if (this.speed.x > 0) {
      this.speed.x -= this.forces.resistance;
    } else if (this.speed.x < 0) {
      this.speed.x += this.forces.resistance;
    }

    this.position.x += this.speed.x;
  }

  jump() {
    this.speed.y -= 15;
  }

  hitsFloor() {
    if (this.position.y > this.game.floor.position.y) {
      this.speed.y = 0;
      this.position.y = this.game.floor.position.y;
    }
  }

  movementY() {
    let newPosition = {
      x: this.position.x + this.speed.x,
      y: this.position.y + this.speed.y
    };

    this.speed.y += this.forces.gravity;

    this.game.platforms.forEach((platform) => {
      if (checkIntersection(this, platform)) {
        this.speed.y = 0;
        newPosition.y = this.position.y;
      }
    });

    this.position.y = newPosition.y;
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

    if (!this.status.moving) {
      heroImg.src = this.direction
        ? `${this.imgPath}${this.idleRightImg}`
        : `${this.imgPath}${this.idleLeftImg}`;
      this.drawImage(this.direction, heroImg, 80, 80, 200, 70, 36, 60, 70, 30);
    } else if (this.status.moving) {
      heroImg.src = `${this.imgPath}${this.idleRightImg}`;
      this.drawImage(this.direction, heroImg, 80, 80, 200, 70, 36, 60, 70, 30);
    }
    // ctx.fillRect(
    //   this.position.x - this.dimension.w / 2,
    //   this.position.y - this.dimension.h / 2,
    //   this.dimension.w,
    //   this.dimension.h
    // );
  }

  logic() {
    this.movemetX();
    this.movementY();
  }
}
