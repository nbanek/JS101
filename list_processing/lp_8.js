function buyFruit(array) {
  let fruits = [];

  array.forEach( subArray => {
    for (let index = 0; index < subArray[1]; index += 1) {
      fruits.push(subArray[0]);
    }
  })
  return fruits
}




console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]