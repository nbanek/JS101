let numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);

console.log(numbers);

let numbers2 = [1, 2, 3, 4];
for (let idx = numbers2.length; idx > 0; idx -= 1) {
  numbers2.pop();
}

console.log(numbers2);

let numbers3 = [1, 2, 3, 4];
for (let idx = numbers3.length; idx > 0; idx -= 1) {
  numbers3.shift();
}

console.log(numbers3);