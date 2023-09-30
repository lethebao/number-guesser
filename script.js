let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 9);
}

function compareGuesses(userGuess, computerGuess, secretTargetNum) {
  if (
    Math.abs(userGuess - secretTargetNum) <
    Math.abs(computerGuess - secretTargetNum)
  ) {
    return true;
  } else if (
    Math.abs(userGuess - secretTargetNum) ===
    Math.abs(computerGuess - secretTargetNum)
  ) {
    return true;
  } else return false;
}

function updateScore(string) {
  if (string === "human") {
    humanScore++;
  }
  if (string === "computer") {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
