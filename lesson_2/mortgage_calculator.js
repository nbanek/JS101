const rlSync = require("readline-sync");
const MONTHS_IN_YEAR = 12;

// FUNCTIONS
function prompt(string) {
  console.log(`=> ${string}`)
}

function validateInput(number) {
  number = number.replace(',', '');

  while (Number.isNaN(Number(number)) || number < 0 || number == '') {
    console.log('Please enter a valid number.');
    number = rlSync.prompt();
  }
    return Number(number);
}

function calculatePayment(loanAmount, apr, loanDuration) {
  let mpr = apr / (MONTHS_IN_YEAR * 100);
  if (mpr === 0 ) {
    return (loanAmount /(loanDuration));
  }
    return (loanAmount * (mpr / (1 - Math.pow((1 + mpr), (-loanDuration)))));
}

function requestAnotherCalculation() {
  let userResponse = rlSync.question('Y or N?').toUpperCase();

  while (userResponse !== 'Y' && userResponse !== 'N') {
    prompt('Enter either Y or N.')
    userResponse = rlSync.prompt().toUpperCase();
  }

  if (userResponse === 'N') {
    return false;
  }

  return true;
}

// MAIN PROGRAM CODE

let programIsRunning = true;

while (programIsRunning) {

prompt('Mortgage / Car Loan Calculator');
prompt('------------------------------')

prompt('Enter a loan amount (non-negative)')
const loanAmount = validateInput(rlSync.prompt());

prompt('Enter an annual percentage rate (APR) (non-negative).')
const apr = validateInput(rlSync.prompt());

prompt('Enter the loan duration in months.')
const loanDuration = validateInput(rlSync.prompt());

const payment = calculatePayment(loanAmount, apr, loanDuration);

prompt(`The loan payment is $${payment.toFixed(2)} per month.`)


prompt('\nWould you like to perform another calculation?')
programIsRunning = requestAnotherCalculation();
}
