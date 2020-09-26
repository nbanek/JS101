function interleave(array1, array2) {
  let newArray = [];
  
  
  array1.forEach( (item, index) => {
    newArray.push(item, array2[index]);
  })


  return console.log(newArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]