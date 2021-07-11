// jshint esversion:10

class Game {
  /* Main class to be use for running the game and its logic*/
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.gameDisplay = {
      width: this.canvas.width,
      height: this.canvas.height
    };
    this.status = {
      running: true,
      gameOver: false,
      pause: false
    };
    this.hero = new Hero(
      this.gameDisplay.width / 6,
      this.gameDisplay.height / 1.5,
      this
    );
    // this.enemy = new enemy.CommonEnemy();
    this.enableControls();
  }

  run() {
    if (this.status.running) this.loop();
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.gameDisplay.width, this.gameDisplay.height);

      this.paint();
      this.hero.logic();
      this.run();
    });
  }

  paint() {
    this.hero.paint();
  }

  enableControls() {
    window.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'ArrowUp') {
        this.hero.jump();
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'd':
          this.hero.move(e.key);
          break;

        case 'a':
        case 'ArrowLeft':
          this.hero.move(e.key);
          break;
        case 'a':
        case 'ArrowLeft':
          this.hero.move(e.key);
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
          this.hero.accelerationX = 0;
          break;

        case 'ArrowUp':
        case ' ':
          this.hero.accelerationY = 0;
          break;

        default:
          break;
      }
    });
  }

  logic() {}
}
