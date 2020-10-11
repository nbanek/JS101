let numbers = [1, 2, 3, 4, 5];

let numbersReversed = numbers.slice(0).reverse();

console.log(numbersReversed);


let numbers2 = [1, 2, 3, 4, 5];

let numbers2sorted = [...numbers2].sort((num1, num2) => num2 - num1);

console.log(numbers2sorted);

let numbers3 = [1, 2, 3, 4, 5];
let numbers3reversed = [];

numbers3.forEach((number) => {
  numbers3reversed.unshift(number);
});

console.log(numbers3reversed);
