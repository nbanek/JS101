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
console.log(integerToString(0));
console.log(integerToString(4321));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"