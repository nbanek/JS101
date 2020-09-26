const rlSync = require("readline-sync");

let numbers = [];

numbers.push(rlSync.question("Enter the 1st number: "));
numbers.push(rlSync.question("Enter the 2nd number: "));
numbers.push(rlSync.question("Enter the 3rd number: "));
numbers.push(rlSync.question("Enter the 4th number: "));
numbers.push(rlSync.question("Enter the 5th number: "));
const last = (rlSync.question("Enter the last number: "));

const even = (item) => item < last;

if (numbers.some(even)) {
  console.log(`The number ${last} is greater than ${numbers}.`);
} else {
  console.log(`The number ${last} is not greater than ${numbers}.`);
}

