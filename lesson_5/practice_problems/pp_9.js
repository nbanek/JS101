let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sorted = arr.map( subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort( (a, b) => a - b);
  }
})

console.log(sorted);