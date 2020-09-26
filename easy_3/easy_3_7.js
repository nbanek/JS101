function twice(number) {
  numString = String(number);
  numFirstHalf = (numString.slice(0, (numString.length / 2)));
  numSecHalf = (numString.slice(numString.length / 2, numString.length));

  if (numString.length % 2 === 0 && numFirstHalf === numSecHalf) {
    return console.log(number);
  } else {
    return console.log(number * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676