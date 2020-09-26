const rlSync = require("readline-sync");

let numbers = [];

numbers.push(rlSync.question("Enter the 1st number: "));
numbers.push(rlSync.question("Enter the 2nd number: "));
numbers.push(rlSync.question("Enter the 3rd number: "));
numbers.push(rlSync.question("Enter the 4th number: "));
numbers.push(rlSync.question("Enter the 5th number: "));
const last = (rlSync.question("Enter the last number: "));

if (numbers.includes(last)) {
  console.log(`The number ${last} appears in ${numbers}.`);
} else {
  console.log(`The number ${last} does not appear in ${numbers}.`);
}

