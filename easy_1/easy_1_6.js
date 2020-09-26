function sum(number) {
  let sum = 0;
  for (let number = 1; number <= intGreaterThanZero; number += 1) {
    sum += number;
}
  return sum;
}

function product(number) {
  let product = 1;
  for (let number = 1; number <= intGreaterThanZero; number += 1) {
    product *= number;
}
  return product;
}

const rlSync = require('readline-sync');

let intGreaterThanZero = 0
do {
  intGreaterThanZero = parseInt(rlSync.question("Please enter an integer greater than 0:"));
  }
while (Number.isInteger(intGreaterThanZero) === false);

let choice;
do {
  choice = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product.`);
}
while (choice !== 's' && choice !== 'p');

if (choice === 's') {
  console.log(`The sum of the integers between 1 and ${intGreaterThanZero} is ${sum(intGreaterThanZero)}.`);
} else {
  console.log(`The sum of the integers between 1 and ${intGreaterThanZero} is ${product(intGreaterThanZero)}.`);
}




