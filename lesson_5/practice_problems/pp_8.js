let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

//console.log(Object.values(obj));


Object.values(obj).forEach(value => {
  value.forEach(word => {
    word.split('').forEach(letter => {
      if (letter.match(/[aeiou]/ig)) {
        console.log(letter);
      }
    })
    
  })
})
