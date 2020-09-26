function logInBox(string, number) {
  let length = string.length;

  if (length > number) {
    length = number - 4;
  }

  let firstAndLastLine = `+${'-'.repeat(length + 2)}+`;
  let emptyLine = `|${' '.repeat(length + 2)}|`;
  let stringLine = `| ${string.slice(0, length)} |`;
  
  console.log(firstAndLastLine);
  console.log(emptyLine);
  console.log(stringLine);
  console.log(emptyLine);
  console.log(firstAndLastLine);
  
  }
  
  logInBox('To boldy go where no one has gone before', 10 );
  
  /*        i === 0 && j === length + 2 ||
            i === 4 && j === 0 ||
            i === 4 && j === length + 2 */