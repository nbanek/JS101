function digitList(number) {
  let numberStringArray = String(number).split('');
  let numberArray = [];

  numberArray = numberStringArray.map(item => {
    return parseInt(item, 10);
  })



  return console.log(numberArray);

}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]