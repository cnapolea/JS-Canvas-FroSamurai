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
  }
}
