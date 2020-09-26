function union (array1, array2) {
  let unifiedArr = array1.concat(array2);
  let filtered = []

  for (let i = 0; i < unifiedArr.length; i += 1) {
    if (!filtered.includes(unifiedArr[i])) {
      filtered.push(unifiedArr[i]);
    }
  }
return console.log(filtered);
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]