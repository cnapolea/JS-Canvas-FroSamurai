// jshint esversion:10

class Platform {
  constructor(game, width, height) {
    this.game = game;
    this.dimension = {
      w: 77,
      h: 42
    };

    this.position = {
      x: width || Math.floor(Math.random() * 300) + 100,
      y: height || 300
    };

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
      this.dimension.w,
      this.dimension.h,
      this.position.x - this.dimension.w / 2,
      this.position.y - this.dimension.h / 2,
      this.dimension.w,
      this.dimension.h
    );
  }
}
