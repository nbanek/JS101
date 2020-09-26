function stringToInteger(string) {
  let integers = 0;
  
  for (let index = 0; index < string.length; index += 1) {
    integers += (intCodes[string[index]] * Math.pow(10, (string.length-1) - index));
}
  return integers;
}

let intCodes = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}

let string = '502232321';
console.log(stringToInteger(string));