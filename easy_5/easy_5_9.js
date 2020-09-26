function countOccurrences(array) {
  let counts = {};

  array.forEach(item => {
    if (!counts[item]){
      counts[item] = 1;
    } else {
      counts[item] += 1;
    }
  })

  return console.log(counts);
}



let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);