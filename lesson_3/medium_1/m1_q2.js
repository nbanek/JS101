let munstersDescription = "The Munsters are creepy and spooky.";

let munstersDescriptionFlip = munstersDescription.split('').map( char => {
  return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}).join('');

console.log(munstersDescriptionFlip);