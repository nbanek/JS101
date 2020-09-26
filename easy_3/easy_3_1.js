function crunch(string) {
  let noDupes = '';
  
  for (let i = 1; i <= string.length; i++) {
    if (string[i - 1] != string[i]){
      noDupes += string[i - 1];
    }
  }
  
  return noDupes;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""