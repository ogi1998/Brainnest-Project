import {
  hideModal,
  showModal,
  showStatusText,
  updateRound,
  updateScore,
} from './ui.js';

// Buttons for Rock, Paper and Scissors
const gameButtons = document.querySelectorAll('.game__button-item');

// UI text components showing what computer and user played
const textComputerPlay = document.querySelector('#computer-play');
const textPlayerPlay = document.querySelector('#player-play');

// UI Text component showing current status (score) and current round
const gameStatus = document.querySelector('#status-text');
const gameRound = document.querySelector('#game-round');

// UI Components connected to modal
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modal-text');
const btnPlayAgain = document.querySelector('#btn-play-again');

// Vars representing scores and current round
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let round = 1;

// Click event for every game button
gameButtons.forEach((button) =>
  button.addEventListener('click', function () {
    // Function to play round
    playRound(this.getAttribute('data-play'), computerPlay());

    // function to update the score in UI
    updateScore(gameStatus, playerScore, computerScore, drawScore);

    // Check for winning conditions
    if (round === 6 && playerScore > computerScore) {
      showModal(modal, modalText, 'Player Won!');
      return;
    } else if (round === 6 && playerScore < computerScore) {
      showModal(modal, modalText, 'Computer Won!');
      return;
    } else if (round === 6 && playerScore === computerScore) {
      showModal(modal, modalText, 'Its a draw!');
      return;
    }
    // Function to update the current round in the UI
    updateRound(gameRound, round, gameButtons);
  })
);

// Function when "Play Again" button is clicked in modal to reset everything
btnPlayAgain.addEventListener('click', function () {
  hideModal(modal);
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  round = 1;
  gameRound.innerText = 'Round 1';
  gameStatus.innerText = 'Won = 0 | Lost = 0 | Draw = 0';
});

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return 'paper';
  if (randomNumber === 2) return 'rock';
  if (randomNumber === 3) return 'scissors';
}

function playRound(playerSelection, computerSelection) {

  // Show Status Text About who played what
  showStatusText(textComputerPlay, `Computer played ${computerSelection}`);
  showStatusText(textPlayerPlay, `Player played ${playerSelection}`);

  round++;

  // Check for Tie
  if (playerSelection === computerSelection) {
    drawScore++;
    return;
  }

  // Check for Rock play
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return;
  } else if (playerSelection === 'rock' && computerSelection !== 'paper') {
    playerScore++;
    return;
  }

  // Check for Paper play
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return;
  } else if (playerSelection === 'paper' && computerSelection !== 'scissors') {
    playerScore++;
    return;
  }

  // Check for Scissors play
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return 'You lose! Rock beats Scissors!';
  } else if (playerSelection === 'scissors' && computerSelection !== 'rock') {
    playerScore++;
    return 'You win! Scissors beat paper!';
  }
}
