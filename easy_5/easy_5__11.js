function timeOfDay(number) {
  let normNum;

  if (number < 0) {
    normNum = (number % 1440) + 1440;
  } else {
    normNum = number % 1440;
  }

  let hours = Math.floor(normNum / 60);
  let minutes = normNum % 60;

  return formatTime(hours, minutes);
}

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");