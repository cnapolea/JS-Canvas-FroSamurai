// jshint esversion:10

class Game {
  /* Main class to be use for running the game and its logic*/
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.display = {
      width: this.canvas.width,
      height: this.canvas.height,
      startingPositionY: this.canvas.height / 1.5
    };
    this.status = {
      running: true,
      gameOver: false,
      pause: false
    };
    this.background = new Background(this);
    this.platforms = [];
    this.hero = new Hero(this.display.width / 6, this);
    this.commonEnemies = [];
    this.enableControls();
  }

  run() {
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

    this.platforms.forEach((platform) => {
      platform.paint();
    });
    this.hero.paint();
    this.commonEnemies[0].paint();
  }

  enableControls() {
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
          this.hero.jump();
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
    if (this.commonEnemies.length < 1) {
      this.makeEnemy();
    }
    if (this.platforms.length < 1) {
      this.makePlatform();
    } else if (this.platforms.length < 2) {
      let newPlatformHeight = this.platforms[0].y - 100;
      let newPlatformWidth = this.platforms[0].x + 200;
      this.makePlatform(newPlatformWidth, newPlatformHeight);
    }

    if (this.hero.checkInteration(this.commonEnemies[0]))
      console.log('intersect');
    this.hero.logic();
    this.commonEnemies[0].logic();
  }
}
