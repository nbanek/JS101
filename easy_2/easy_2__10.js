function stringToInteger(string) {
  let integers = 0;
  
  for (let index = 0; index < string.length; index += 1) {
    integers += (intCodes[string[index]] * Math.pow(10, (string.length-1) - index));
  }

  return integers;
}

function stringToSignedInteger(string) {
    if (string.charAt(0) === '+') {
      return stringToInteger(string.slice(1,))
    } else if (string.charAt(0) === '-') {
      return -stringToInteger(string.slice(1,))
    } else {
      return stringToInteger(string);
    }
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
  9: 9,
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true