function hexToDec(string) {
  let decimal = string.split('');
  let converted = 0;

  for (let i = 0; i < decimal.length; i += 1) {
    converted += code[decimal[i]] * (Math.pow(16, (decimal.length - 1) - i));
  }
  return converted;
}

let code = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}

console.log(hexToDec('F7D'));