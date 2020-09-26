function ageGenerator(min, max) {
  let age = (Math.random() * (max - min + 1) + min);
  return Math.floor(age);
}


let age = ageGenerator(20, 120);
console.log(`Teddy is ${age} years old!`);