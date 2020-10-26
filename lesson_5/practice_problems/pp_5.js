let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let ageTotal = 0;

Object.values(munsters).forEach(item => {
  if (item['gender'] === 'male'){
    ageTotal += item['age'];
  };
});

console.log(ageTotal);