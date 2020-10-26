let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let filtered = arr.map( item => {
  return item.filter( subitem => {
    return subitem % 3 === 0;
  })
})

console.log(filtered);