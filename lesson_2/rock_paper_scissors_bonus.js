const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  spock:    ['rock',     'scissors'],
  lizard:   ['paper',    'spock']
}
let playerScore = 0;
let computerScore = 0;
let victorDeclared = false;

function prompt(message) {
  console.log(`=> ${message}`);
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore += 1;
  } else {
    computerScore += 1;
  }

  prompt(`Your score: ${playerScore}. Computer score: ${computerScore}\n`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    updateScore('player');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
    updateScore();
}
}
prompt(`---------------------------------------------------`)
prompt(`Welcome to 'rock, paper, scissors, lizard, spock'.`);
prompt(`A victor is declared at 5 wins. Good luck!`);
prompt(`---------------------------------------------------`)

while(true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  if (playerScore === 5) {
    prompt('You are the victor!!!');
    victorDeclared = true;
  } else if (computerScore === 5) {
    prompt('Computer is the victor!!!');
    victorDeclared = true;
  }

  if (victorDeclared){
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;
  }
}
