function runningTotal(array) {
  array2 = [];
  let total = 0;

  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
    array2.push(total);
  }

  console.log(array2);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []