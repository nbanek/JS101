let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => String(Number(a) - Number(b)));

console.log(arr);