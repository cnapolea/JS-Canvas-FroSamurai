// jshint esversion:10

class Game {
  /* Main class to be use for running the game and its logic*/
  constructor(canvas, startDisplay, playingDisplay, gameOverDisplay) {
    this.canvas = canvas;
    this.startDisplay = startDisplay;
    this.playingDisplay = playingDisplay;
    this.gameOverDisplay = gameOverDisplay;
    this.ctx = this.canvas.getContext('2d');
    this.display = {
      width: this.canvas.width,
      height: this.canvas.height,
      startingPositionY: this.canvas.height / 1.5
    };
    this.status = {
      running: false,
      gameOver: false,
      pause: false
    };
    this.background = new Background(this);
    this.floor = new Floor(this);
    this.platforms = [];
    this.hero = new Hero(this.display.width / 6, this);
    this.commonEnemies = [];
    this.enableControls();
  }

  run() {
    this.status.running = true;
    if (this.status.running) this.loop();
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.display.width, this.display.height);

      this.logic();
      this.paint();
      this.run();
    });
  }

  paint() {
    this.background.paint();
    this.floor.paint();
    this.platforms.forEach((platform) => {
      platform.paint();
    });
    this.commonEnemies.forEach((enemy) => {
      enemy.paint();
      enemy.weapon.paint();
      enemy.lives.forEach((life) => life.paint());
    });
    this.hero.paint();
    this.hero.lives.forEach((life) => life.paint());
    this.hero.weapon.paint();
  }

  enableControls() {
    if (!this.hero.status.takingDamage) {
      window.addEventListener('click', (e) => {
        if (!this.hero.status.attacking) {
          if (this.hero.direction) {
            this.hero.status.attacking = true;
            this.hero.weapon.swordDisplacement += 35;
            setTimeout(() => {
              this.hero.weapon.swordDisplacement -= 35;
            }, 400);
            setTimeout(() => {
              this.hero.status.attacking = false;
            }, 1000);
          } else {
            this.hero.status.attacking = true;
            this.hero.weapon.swordDisplacement -= 33;

            setTimeout(() => {
              this.hero.weapon.swordDisplacement += 33;
            }, 400);

            setTimeout(() => {
              this.hero.status.attacking = false;
            }, 1000);
          }
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'd':
          this.hero.move(e.key, e.type);
          break;

        case 'a':
        case 'ArrowLeft':
          this.hero.move(e.key, e.type);
          break;
        case ' ':
        case 'ArrowUp':
          if (!this.hero.status.jumping) {
            this.hero.jump();
          }
          break;
        default:
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'd':
        case 'a':
        case 'ArrowRight':
        case 'ArrowLeft':
          this.hero.move(e.key, e.type);
          break;

        case 'ArrowUp':
        case ' ':
          this.hero.move(e.key, e.type);
          break;

        default:
          break;
      }
    });
  }

  makeEnemy() {
    this.commonEnemies.push(new Skeleton(this.display.width + 100, this));
  }

  makePlatform(width, height) {
    this.platforms.push(new Platform(this, width, height));
  }

  logic() {
    if (this.status.gameOver) {
      this.status.running = false;
    }
    if (this.commonEnemies.length < 1) {
      this.makeEnemy();
    }
    if (this.platforms.length < 1) {
      this.makePlatform();
    } else if (this.platforms.length < 2) {
      let newPlatformHeight = this.platforms[0].position.y - 100;
      let newPlatformWidth = this.platforms[0].position.x + 200;
      this.makePlatform(newPlatformWidth, newPlatformHeight);
    }

    this.hero.logic();
    this.commonEnemies[0].logic();
    this.hero.weapon.logic();
  }
}
