const rlSync = require('readline-sync');

let billAmount = parseFloat(rlSync.question("What is the bill?"));
let tipPercent = parseFloat(rlSync.question("What is the tip percentage?"));
let tip = billAmount * (tipPercent / 100);

console.log(`The tip is $${(tip).toFixed(2)}`);
console.log(`The total is $${(billAmount + tip).toFixed(2)}`);