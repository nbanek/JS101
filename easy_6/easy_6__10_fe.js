function reverseWords(string) {
  let array = string.split(' ')
  array = array.map(item => item.length >=5 ? item.split('').reverse().join('') : item)

  console.log(array.join(' '));
}



reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"