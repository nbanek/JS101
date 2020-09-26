function computeSum(array) {
  return array.reduce( (a, b) => a + b, 0);
}

function computeProduct(array) {
  return array.reduce( (a, b) => a * b, 1);
}

const rlSync = require('readline-sync');

//get input from user, only accepts integer values;
let intGreaterThanZero = 0
do {
  intGreaterThanZero = parseInt(rlSync.question("Please enter an integer greater than 0:"));
  }
while (Number.isInteger(intGreaterThanZero) === false);

//push all values to array to send to compute function
let valuesArray = []
for (let value = 1; value <= intGreaterThanZero; value += 1) { 
  valuesArray.push(value);
}

//gets input from user, only accepts 's' or 'p'
let choice;
do {
  choice = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product.`);
}
while (choice !== 's' && choice !== 'p');

//log to console computed sum or product
if (choice === 's') {
  console.log(`The sum of the integers between 1 and ${intGreaterThanZero} is ${computeSum(valuesArray)}.`);
} else {
  console.log(`The sum of the integers between 1 and ${intGreaterThanZero} is ${computeProduct(valuesArray)}.`);
}




