function findFibonacciIndexByLength(number) {
  let first = 1;
  let second = 1;
  let index = 2;
  let total = 0;

  do{
    total = first + second;
    first = second;
    second = total;
    index += 1;
  }
  while(String(total).length < number);

  return index;

}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
