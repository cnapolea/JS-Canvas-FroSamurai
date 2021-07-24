// jshint esversion:10

class Live {
  constructor(game, character) {
    this.game = game;
    this.character = character;
    this.heartImg = './images/lives.png';
  }

  paint() {
    const heart = new Image();
    heart.src = this.heartImg;

    this.character.lives.forEach((life, i) => {
      this.game.ctx.drawImage(
        heart,
        23,
        20,
        20,
        20,
        this.character.position.x - this.character.dimension.h / 2 + 20 * i,
        this.character.position.y - 20 - this.character.dimension.h / 2,
        20,
        20
      );
    });
  }
}
