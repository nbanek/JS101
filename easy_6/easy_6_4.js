function centerOf(string) {
  let newString = ''
  for (let i = Math.round(string.length / 2) - 1; i <= string.length / 2; i += 1) {
    newString += string[i];
  }
  console.log(newString);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"