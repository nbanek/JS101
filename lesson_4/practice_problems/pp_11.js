let statement = "The Flintstones Rock";
let frequency = {};

let statementArr = statement.replace(/\s/g, '').split('');

statementArr.forEach(item => {
  frequency[item] = frequency[item] || 0;
  frequency[item] += 1;
  
});

console.log(frequency);