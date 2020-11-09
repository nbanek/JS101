function leadingSubstrings(string) {

  let subStrings = [];

  for (let index = 1; index <= string.length; index += 1) {
    subStrings.push(string.substring(0, index));
  }
  return subStrings;
  
}

function subStrings(string) {
  let combined = [];
    for (let index = 0; index < string.length; index += 1) {
    combined = combined.concat(leadingSubstrings(string.slice(index)));
  }

  return combined;
}



console.log(subStrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]