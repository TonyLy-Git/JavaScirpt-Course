'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
*/

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // no input
  if (!guess) {
    displayMsg('Not a number!');
    // player wins
  } else if (guess === secretNum) {
    displayMsg('Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // too high
  } else if (guess > secretNum) {
    displayMsg('Too high');
    score--;
    document.querySelector('.score').textContent = score;
    // too low
  } else if (guess < secretNum) {
    displayMsg('Too low');
    score--;
    document.querySelector('.score').textContent = score;
  }
  // score becomes 0
  if (score === 0) {
    displayMsg('Game Over');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMsg('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
