function multiplicativeAverage(array) {
  let array2 = array.reduce((a, b) => {
    return (a * b);
  }, 1)

  return String((array2 / array.length).toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"