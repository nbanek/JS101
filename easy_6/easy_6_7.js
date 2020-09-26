function swapName(string) {
  return console.log(string.split(' ').reverse().join(', '));
}

swapName('Joe Roberts');    // "Roberts, Joe"