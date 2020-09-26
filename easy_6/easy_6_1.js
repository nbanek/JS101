function repeater(string) {
  let stringArr = []

  for (let i = 0; i < string.length; i += 1) {
    stringArr.push(string[i], string[i]);
  }

  return console.log(stringArr.join(''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""