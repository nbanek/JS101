function swap(string) {
  let stringArr = string.split(' ');
  let stringArr2 = []

  stringArr2 = (stringArr.map(item => swapchar(item)));
  

  return console.log(stringArr2.join(' '));
}

function swapchar(string){
  let s2;
  for (let i = 0; i < string.length; i += 1) {
    if (string.length === 1) {
      return string;
    }

    let last = string.slice(-1);
    let first = string.slice(0, 1);
    s2 = last + string.slice(1, -1) + first;
  }
  return s2;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"