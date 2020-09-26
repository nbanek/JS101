const rlSync = require("readline-sync");

console.log('Enter the first number:');
let number1 = parseInt(rlSync.prompt());

console.log('Enter the second number:');
let number2 = parseInt(rlSync.prompt());

console.log(`${number1} + ${number2} = ${number1 + number2}`)
console.log(`${number1} - ${number2} = ${number1 - number2}`)
console.log(`${number1} * ${number2} = ${number1 * number2}`)
console.log(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`)
console.log(`${number1} % ${number2} = ${number1 % number2}`)
console.log(`${number1} ** ${number2} = ${Math.pow(number1, number2)}`)

