// false, according to MDN NaN cannot be compared to NaN with == or ===.

let array = [NaN];

console.log(Number.isNaN(array[0]));