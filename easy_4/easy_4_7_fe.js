function runningTotal(array) {
  array2 = [];
  let total = 0;

  array2 = array.map( item => total += item);

  console.log(array2);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []