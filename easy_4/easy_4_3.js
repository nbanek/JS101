const rlSync = require("readline-sync");

let date = new Date();
let currentYear = date.getFullYear();

const age = rlSync.question("What is your age? ");
const retireAge = rlSync.question("At what age would you like to retire? ");

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retireAge - age)}. `);
console.log(`You have only ${retireAge - age} years of work to go!`);