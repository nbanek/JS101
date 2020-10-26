let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesTotal = Object.values(ages).reduce((sum, age) => sum + age, 0);

console.log(agesTotal);