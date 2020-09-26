function logInBox(string, number) {
  let length = string.length;
  

  if (length > number) {
    length = number - 4;
  }


  let firstAndLastLine = `+${'-'.repeat(length + 2)}+`;
  let emptyLine = `|${' '.repeat(length + 2)}|`;
  let stringLine = `| ${string.slice(0, length)} |`;
  let wrappedLine = `| ${string.slice(length, length * 2)} |`;
  
  console.log(firstAndLastLine);
  console.log(emptyLine);
  console.log(stringLine);
  if (string.length > number) {
    console.log(wrappedLine);
  }
  console.log(emptyLine);
  console.log(firstAndLastLine);
  
  }
  
  logInBox('To boldly go where no one has gone before', 10 );
  
  /*        i === 0 && j === length + 2 ||
            i === 4 && j === 0 ||
            i === 4 && j === length + 2 */