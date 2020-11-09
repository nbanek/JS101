function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    case 3:
      return arr.slice(0, arr.length -1).join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

let arr = [1, 2, 3];
console.log(joinOr(arr));

