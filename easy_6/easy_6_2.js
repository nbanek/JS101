function doubleConsonants(string) {
  let stringArr = []

  for (let i = 0; i < string.length; i += 1) {
    stringArr.push(string[i]);
    if (string[i].match(/[b-df-hj-np-tv-z]/ig)) {
    stringArr.push(string[i]);
  }
  

}

  return console.log(stringArr.join(''));
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""