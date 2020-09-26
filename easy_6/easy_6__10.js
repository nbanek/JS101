function reverseWords(string) {
  let array = string.split(' ')
  
  for (let i = 0; i < array.length; i += 1){
    if (array[i].length >= 5) {
      array[i] = reverseWord(array[i]);
    }
  }
  console.log(array.join(' '));
}

function reverseWord(string) {
  return string.split('').reverse().join('');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"