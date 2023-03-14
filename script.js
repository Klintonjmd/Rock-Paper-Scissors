function getComputerChoice() {
  let val = Math.floor(Math.random() * 3) + 1;
  let res = "Scissors";
  if (val === 2) {
    res = "Rock";
  } else if (val === 3) {
    res = "Paper";
  }
  return res;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
    return 1;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("You win! Rock beats Scissors");
      return 1;
    } else {
      console.log("You lose! Paper beats Rock");
      return 0;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You win! Paper beats Rock");
      return 1;
    } else {
      console.log("You lose! Scissors beats Paper");
      return 0;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      console.log("You win! Scissors beats Paper");
      return 1;
    } else {
      console.log("You lose! Rock beats Scissors");
      return 0;
    }
  }
}

function match() {
  let playerWins = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What is your choice?");
    playerWins += playRound(playerSelection, getComputerChoice());
    console.log(playerWins);
  }
  if (playerWins >= 3) {
    console.log("You won the match!");
  } else {
    console.log("You lost the match");
  }
}

console.log(match());
