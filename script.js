const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");

let computerScore = 0;
let playerScore = 0;
score.textContent = playerScore + " - " + computerScore;

rock.addEventListener("click", function (e) {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", function (e) {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", function (e) {
  playRound("scissors", getComputerChoice());
});

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
    return;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  }
  score.innerText = playerScore + " - " + computerScore;
  checkWinner(playerScore, computerScore);
  return;
}
function checkWinner(playerScore, computerScore) {
  var div = document.createElement("div");

  scoreDisplay.appendChild(div);
  if (playerScore == 5) {
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Player wins!";
  }
  if (computerScore == 5) {
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Computer wins!";
  }
}
