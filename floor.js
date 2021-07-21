// jshint esversion:10

class Floor {
  constructor(game) {
    this.game = game;
    this.imageUrl = './images/background/level1/';
    this.src = `${this.imageUrl}initial_floor.png`;

    this.dimension = {
      w: 133,
      h: 36
    };

    this.position = {
      x: 0,
      y: this.game.display.height - this.dimension.h
    };

    this.tiles = this.game.display.width / this.dimension.w;
  }

  paint() {
    for (let tile = 0; tile < this.tiles; tile++) {
      const floorImg = new Image();
      floorImg.src = this.src;

      this.game.ctx.drawImage(
        floorImg,
        tile * this.dimension.w,
        this.position.y + this.dimension.h / 2,
        this.dimension.w,
        this.dimension.h
      );
    }
  }
}
