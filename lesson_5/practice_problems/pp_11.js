let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


let obj = arr.map( item => {
  let ob = {}
  for (let key in item) {
    ob[key] = item[key] + 1;
  }
  return ob;
})

console.log(obj);
console.log(arr);