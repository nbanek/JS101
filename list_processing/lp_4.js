
function leadingSubstrings(string) {

  let subStrings = [];

  for (let index = 1; index <= string.length; index += 1) {
    subStrings.push(string.substring(0, index));
  }

  console.log(subStrings);
}




leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]