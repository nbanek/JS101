function sequence(number) {
  let array = [];
  for (let i = 1; i <= number; i += 1){
    array.push(i);
  }
  console.log(array);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]