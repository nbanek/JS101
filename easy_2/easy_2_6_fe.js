/*
One would need to consider a string with 1 word and an
even number of words. All other cases would return the middle word.

For a string with 1 or and even number of words one could log 
that these sentences do not have a middle word.
*/

function penultimate(string) {
  let array = string.split(' ');
  if (array.length === 1 || array.length % 2 === 0) {
    return console.log(`Sentence has no middle word!`);
  } else {
    return console.log(array[Math.ceil(array.length / 2 - 1)]);
  }
}


penultimate("last the word is cat"); // logs true
penultimate("Launch School is great!"); // logs true
