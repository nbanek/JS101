function century(number) {
  let digits = 0;

  if (number % 100 === 0) {
    digits = number / 100;
  } else {
    digits = Math.floor(number / 100 + 1);
  }

  let suffix = digits % 100;
  
  if (suffix % 10 === 0 | suffix === 11 || suffix === 12 || suffix === 13) {
    return `${digits}th`;
  }

  switch (suffix % 10) {
    case 1: return `${digits}st`;
    case 2: return `${digits}nd`;
    case 3: return `${digits}rd`;
    default: return `${digits}th`;
  }
  }




  


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"