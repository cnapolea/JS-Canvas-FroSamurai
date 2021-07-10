// jshint esversion:10

class Figure {

    /* Main class for game figures. It takes a position X and Y in relation to the canvas. */

    constructor(x, y, game) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 0;
        this.acceleration = 0;
        this.resistence = 0.01;
        this.lives = 1;
        this.movemet = {};
    }
    
    movemetX() {
        
        this.speedX += this.acceleration;

        if (this.speedX > 0) {
            this.speedX -= this.resistence;
        } else if (this.speedX < 0) {
            this.speedX += this.resistence;
        }

        this.x += this.speedX;
    }

    changeAcceleration(keyPressed, figureAcceleration) {
        switch (keyPressed) {
            case 'd':
                this.acceleration += figureAcceleration;
                break;
            case 'a':
                this.acceleration -= figureAcceleration;
                break;
        }    
    }
}
