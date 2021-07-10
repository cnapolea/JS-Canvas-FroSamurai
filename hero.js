// jshint esversion:10

class Hero extends Figure {
    /* Enherits from Figure class */

    constructor(x, y, game) {
        super(x, y, game);
        this.ACCELERATION = 0.02;
    }
    
    paint(){
        const ctx = this.game.ctx;
        ctx.fillRect(this.x, this.y, 49, 45);
    }

    logic(){
        this.movemetX();
    }
}
