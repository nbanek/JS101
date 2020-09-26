function wordSizes(string) {
  let obj = {};
  string = string.replace(/[^a-z\s]/ig, '');
  let wordArray = string.split(' ')

  for (let i = 0; i < wordArray.length; i += 1) {
    let size = wordArray[i].length;
    if (size === 0) {
      continue;
    }

    if (!obj[size]) {
      obj[size] = 0;
    }
      obj[size] += 1;
  }

  console.log(obj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}