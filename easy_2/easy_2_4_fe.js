function multiply(number1, number2) {
  return number1 * number2;
}

function power(number1, number2) {
  let compute = multiply(number1, number1);
  while (number2 - 2 > 0){
    compute *= number1;
    number2 -=1; 
  }
  return compute;
}

console.log(power(5, 4));
console.log(power(-8, 5));

