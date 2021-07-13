// jshint esversion:10

class Background {
  constructor(game) {
    this.game = game;
    this.imageUrl = './images/background/level1/';
    this.backgroundImages = [
      `${this.imageUrl}bakcground_night1.png`,
      `${this.imageUrl}bakcground_night2.png`,
      `${this.imageUrl}bakcground_night3.png`
    ];

    this.floor = {
      width: 133,
      height: 36,
      tiles: this.game.display.width / 133,
      src: `${this.imageUrl}initial_floor.png`,
      positionY: this.game.display.height - 36
    };
  }

  paint() {
    for (let path of this.backgroundImages) {
      const layer1 = new Image();
      layer1.src = path;
      this.game.ctx.drawImage(
        layer1,
        0,
        this.game.display.height / 3.5,
        this.game.display.width,
        this.game.display.height
      );
    }
    // console.log(this.floor.tiles);

    for (let tile = 0; tile < this.floor.tiles; tile++) {
      const floorImg = new Image();
      floorImg.src = this.floor.src;

      this.game.ctx.drawImage(
        floorImg,
        tile * this.floor.width,
        this.floor.positionY,
        this.floor.width,
        this.floor.height
      );
    }
  }
}
