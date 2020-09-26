function reverseSentence(string) {
  return console.log(string.split(' ').reverse().join(' '));
}


reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"