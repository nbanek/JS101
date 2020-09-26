function asciiValue(string) {
  let sum = 0;
  
  for (let charIndex = 0; charIndex < string.length; charIndex += 1) {
    sum += string.charCodeAt(charIndex);
  }
  return sum;
}


asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0