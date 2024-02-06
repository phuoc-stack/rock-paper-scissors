//Computer choice
function computerSelection() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
//Play one round of RPS
function playRound(playerSelection, computerSelection) {
  let playerWin = "Player wins this round!";
  let computerWin = "Computer wins this round!";
  let draw = "Draw!";
  if (computerSelection === playerSelection) {
    alert(draw);
    return(draw);
  } if (computerSelection == "rock" && playerSelection == "paper") {
    alert(playerWin);
    return(playerWin);
  } if (computerSelection == "paper" && playerSelection == "scissors") {
    alert(playerWin);
    return(playerWin);
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    alert(playerWin);
    return(playerWin);
  } else {
    alert(computerWin);
    return(computerWin);
  }
}

//Declare initial scores
let playerScore = 0;
let computerScore = 0;
let draw = 0;

//For loop for 5 rounds
for (let i = 0; i < 5; i++) {
  let playerSelection = prompt(
    "Make your choice (rock, paper, scissors)"
  ).toLowerCase();
  let playSelection = playerSelection;
  console.log("Player chose: " + playSelection);
  let compSelection = computerSelection();
  console.log("Computer chose: " + compSelection);
  let roundResult = playRound(playerSelection, compSelection);
  gameScore(roundResult);
  console.log("Round result: " + roundResult);
  console.log("Your score is: " + playerScore);
  console.log("The computer's score is: " + computerScore);
};

//Result of the total match
  if (playerScore===computerScore) {
    console.log("Overall it was a draw!");
    alert("Overall it was a draw!");
  } else if (playerScore>computerScore) {
      console.log("Congratulations! You win");
      alert("Congratulations! You win");
  } else {
        console.log("It is such a pity! You lose");
        alert("It is such a pity! You lose");
  }

  //Result of one round
function gameScore(roundResult) {
  if (roundResult === "Player wins this round!") {
    playerScore ++;
  } else if (roundResult === "Computer wins this round!") {
    computerScore ++;
  } else {
    playerScore +=draw;
    computerScore +=draw;
  }
}


