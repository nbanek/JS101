function sequence(count, start) {
  let array = [];
  for (let i = 1; i <= count; i += 1) {
    array.push(start * i);
  }
  console.log(array);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []