function swapName(string) {
  let stringArray = string.split(' ');
  let firstName = stringArray.pop() + ', ';
  let remainingName = stringArray.join(' ');

  return firstName + remainingName;
}

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
