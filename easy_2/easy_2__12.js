function integerToString(number) {
  let numString = []

  do {
    let ones = number % 10;
    number  = (number - ones) / 10; 
    numString.unshift(ones);
  }
  while(number > 0);

  return numString.join('');
}

function signedIntegerToString(number) {
  if (number < 0) {
    return '-' + integerToString(-number);
  } else if (number > 0) {
    return '+' + integerToString(number);
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));