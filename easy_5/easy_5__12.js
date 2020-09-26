function getMinutes(array) {
  return (array[0] * 60) + array[1];
}

function afterMidnight(string) {
  let timeArray = string.split(':').map(item => Number(item));
  let minutes = getMinutes(timeArray);

  return minutes % 1440;
}

function beforeMidnight(string) {
  let timeArray = string.split(':').map(item => Number(item));
  let minutes = 1440 - getMinutes(timeArray);

  return minutes % 1440;
}




console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);