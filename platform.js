// jshint esversion:10

class Platform {
  constructor(game) {
    this.game = game;
    this.width = 77;
    this.height = 42;
    this.platformImage = './images/background/level1/mainlevbuild.png';
  }

  paint() {
    const ctx = this.game.ctx;

    const platformImg = new Image();
    platformImg.src = this.platformImage;
    ctx.drawImage(
      platformImg,
      571,
      177,
      this.width,
      this.height,
      100,
      230,
      this.width,
      this.height
    );
  }
}
