function swap(string) {
  let stringArr = string.split(' ');
  let stringArr2 = [];

  for (let i = 0; i < stringArr.length; i += 1) {
    if (stringArr[i].length === 1) {
      stringArr2.push(stringArr[i]);
      continue;
    }

    let last = stringArr[i].slice(-1);
    let first = stringArr[i].slice(0, 1);
    stringArr2.push(last + stringArr[i].slice(1, -1) + first);
    
  }

  return console.log(stringArr2.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"