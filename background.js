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
    this.prisonImg = `${this.imageUrl}prison1.png`;
    this.princessImg = `${this.imageUrl}princess.png`;
    this.frame = 0;
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

    const princess = new Image();
    princess.src = this.princessImg;
    this.game.ctx.save();

    this.game.ctx.drawImage(
      princess,
      565 + 125 * Math.round(this.frame / 50),
      15,
      25,
      25,
      this.game.display.width - 100,
      this.game.display.height - 68,
      30,
      50
    );

    this.game.ctx.restore();
    this.frame++;
    this.frame %= 70;

    const prison = new Image();
    prison.src = this.prisonImg;
    this.game.ctx.drawImage(
      prison,
      100,
      100,
      151,
      151,
      this.game.display.width - 150,
      this.game.display.height - 165,
      151,
      151
    );
  }
}
