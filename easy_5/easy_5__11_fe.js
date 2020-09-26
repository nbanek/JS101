function getDay(number) {
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = daysOfWeek[0];

  if (number > 1440) {
    day = daysOfWeek[Math.floor(number / 1440)];
  } else if (number < -1440) {
    day = daysOfWeek[daysOfWeek.length + Math.floor(number / 1440)];
  } else if (number < 0 && number > -1440) {
    day = daysOfWeek[daysOfWeek.length - 1];
  }
  return day;
}

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(day, hours, minutes) {
  return `${day} ${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(number) {
  let normNum;
  let day = getDay(number);
  
  if (number < 0) {
    normNum = (number % 1440) + 1440;
  } else {
    normNum = number % 1440;
  }


  let hours = Math.floor(normNum / 60);
  let minutes = normNum % 60;

  return formatTime(day, hours, minutes);
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

