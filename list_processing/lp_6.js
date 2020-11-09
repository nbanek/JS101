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

function palindromes(string) {
  
  return subStrings(string).filter( word => {
    if (word.length > 1) {
      return word === word.split('').reverse().join('');
    }
  });
}


console.log(palindromes('hello-madam-did-madam-goodbye'));