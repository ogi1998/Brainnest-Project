let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return 'paper';
  if (randomNumber === 2) return 'rock';
  if (randomNumber === 3) return 'scissors';
}
function playerPlay() {
  let play = prompt('Please enter your move (rock, paper or scissors)');
  while (
    play.trim().toLowerCase() !== 'paper' &&
    play.trim().toLowerCase() !== 'rock' &&
    play.trim().toLowerCase() !== 'scissors'
  ) {
    play = prompt('Please enter your move again(rock, paper or scissors)');
  }
  return play;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.trim().toLowerCase();

  console.log(`Computer played ${computerSelection}`);
  console.log(`Player played ${playerSelection}`);

  // Check for Tie
  if (playerSelection === computerSelection) return "It's a tie!";

  // Check for Rock play
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      computerScore++;
      return 'You lose! Paper beats Rock!';
    } else {
      playerScore++;
      return 'You Win! Rock beats Scissors!';
    }
  }

  // Check for Paper play
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      computerScore++;
      return 'You lose! Scissors beat Paper!';
    } else {
      playerScore++;
      return 'You win! Paper beats Rock!';
    }
  }

  // Check for Scissors play
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'You lose! Rock beats Scissors!';
    } else {
      playerScore++;
      return 'You win! Scissors beat paper!';
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    console.log(playRound(playerPlay(), computerPlay()));
  }
  if (computerScore > playerScore) {
    console.log(`Computer Won! Result is: ${computerScore} - ${playerScore}`);
  } else if (computerScore < playerScore) {
    console.log(`Player Won! Result is: ${playerScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie! Result is: ${playerScore} - ${computerScore}`);
  }
}
game();
