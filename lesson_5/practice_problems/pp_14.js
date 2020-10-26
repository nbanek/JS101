let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

for (let food in obj) {
  if (obj[food]['type'] === 'fruit') {
    arr.push(
      (obj[food]['colors']).map(item => (item[0].toUpperCase()) + item.slice(1))
      );
  }
  if (obj[food]['type'] === 'vegetable') {
    arr.push(
      (obj[food]['size']).toUpperCase()
      );
  }
}

console.log(arr);