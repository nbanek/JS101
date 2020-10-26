let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let numIsEven = number => number % 2 === 0


arr2 = arr.filter( obj => {
  return Object.values(obj).every( subArr => {
    return subArr.every(num => num % 2 === 0);
    })
  }
  );


console.log(arr2);

//check if each number in value is even
//get values of objects
//filter arr
