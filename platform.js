// jshint esversion:10

class Platform {
  constructor(game, width, height) {
    this.game = game;
    this.width = 77;
    this.height = 42;
    this.x = width || Math.floor(Math.random() * 300) + 100;

    this.y = height || 230;

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
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
