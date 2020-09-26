function logInBox(string) {
let firstAndLastLine = `+${'-'.repeat(string.length + 2)}+`;
let emptyLine = `|${' '.repeat(string.length + 2)}|`;
let stringLine = `| ${string} |`;

console.log(firstAndLastLine);
console.log(emptyLine);
console.log(stringLine);
console.log(emptyLine);
console.log(firstAndLastLine);

}


logInBox('');
logInBox('To boldy go where no one has gone before');

/*          i === 0 && j === length + 2 ||
          i === 4 && j === 0 ||
          i === 4 && j === length + 2 */