function wordSizes(string) {
  let obj = {};
  let wordArray = string.split(' ');

  for (let i = 0; i < wordArray.length; i += 1) {
    let size = wordArray[i].length;
    if (!obj[size]) {
      obj[size] = 0;
    }
      obj[size] += 1;
  }

  console.log(obj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}