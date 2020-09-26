function reverse(array) {
  array2 = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    array2.push(array[i]);
  }
  return array2;
}

console.log(reverse([1,2,3,4]))