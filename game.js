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

        }
        this.hero = new Hero(0, 0, this);
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
            // this.hero.logic();
            this.run();
        });
    }

    paint() {
        this.hero.paint();
    }

    enableControls() {
        window.addEventListener('keypress', (e) => {
            switch (e.key) {
                case "d":
                    this.hero.movemetX(e.key);
                    break;
                case "a":
                    this.hero.movemetX(e.key);
                    break;

                default:
                    break;
            }
        });
    }

    logic() {

    }



}