function isBalanced(string) {
  let leftParenthesis =  0;
  let rightParenthesis = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (rightParenthesis > leftParenthesis) {
      return false;
    } else if (string[index] === '(') {
      leftParenthesis += 1;
    } else if (string[index] === ')') {
      rightParenthesis += 1;
    }
  }
  return leftParenthesis === rightParenthesis;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);