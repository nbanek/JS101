let number = 1;
const rlSync = require("readline-sync");
let limit = rlSync.question("Choose a numerical limit!");

while (number < limit) {
  console.log(number)
  number += 2;
}