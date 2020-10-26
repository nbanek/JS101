let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let arrFilter = arr.sort( (a, b) => {
  a = a.filter( item => item % 2 != 0);
  b = b.filter( item => item % 2 != 0);

  return a.reduce((a, b) => a + b)
    - b.reduce((a, b) => a + b);
})

  

console.log(arrFilter);