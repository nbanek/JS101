function average(array) {
  let avg = array.reduce((a, b) => {
    return a + b;
  },0)

  console.log(Math.floor(avg/array.length));
}



average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40