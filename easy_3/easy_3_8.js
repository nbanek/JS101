function getGrade(score1, score2, score3) {
  let avgScore = (Array.prototype.slice.call(arguments).reduce( (a, b) => a + b)) / arguments.length;
  
  if (avgScore >= 90 && avgScore <= 100) {
    return 'A';
  } else if (avgScore >= 80 && avgScore <= 90) {
    return 'B';
  } else if (avgScore >= 70 && avgScore <= 80) {
    return 'C';
  } else if (avgScore >= 60 && avgScore <= 70) {
    return 'D';
  } else if (avgScore >= 0 && avgScore <= 60) {
    return 'F';
}
}

getGrade(95, 90, 93);    // "A"
(getGrade(50, 50, 95));    // "D"