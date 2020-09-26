function stringy(number) {
return (`${'10'.repeat(number / 2)}${'1'.repeat(number % 2)}`);
}


console.log(stringy(6));    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"