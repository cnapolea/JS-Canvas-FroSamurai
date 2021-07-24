// jshint esversion:10

const canvasElement = document.querySelector('canvas');
const startMenu = document.querySelector('#display-start');
const playingDisplay = document.querySelector('#display-playing');
const gameOverDisplay = document.querySelector('#display-game-over');

const startBtn = startMenu.children[1];
const tryAgainBtn = gameOverDisplay.children[1];

const afroSamurai = new Game(
  canvasElement,
  startMenu,
  playingDisplay,
  gameOverDisplay
);

startBtn.addEventListener('click', () => {
  startMenu.style.display = 'none';
  playingDisplay.style.display = 'flex';
  afroSamurai.run();
});
