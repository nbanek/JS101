// if Math.round were to be used, we would not need the +1 in age calculation

function ageGenerator(min, max) {
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }
  let age = (Math.random() * (max - min) + min);
  return Math.round(age);
}


let age = ageGenerator(25, 10);
console.log(`Teddy is ${age} years old!`);