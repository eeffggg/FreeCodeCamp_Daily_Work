//grade application
function getAverage(grades) {
  let sum = 0;
  for (let x of grades) {
    sum += x;
  }
  return sum / grades.length;
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

function getGrade(grade) {
  switch (true) {
    case grade < 60:
      return "F";
      break;
    case grade < 70:
      return "D";
      break;
    case grade < 80:
      return "C";
      break;
    case grade < 90:
      return "B";
      break;
    case grade < 100:
      return "A";
      break;
    default:
      return "A+";
  }
}
console.log(getGrade(37));

function hasPassingGrade(grade) {
  if (getGrade(grade) !== "F") {
    return true;
  }
  return false;
}
console.log(hasPassingGrade(37));

function studentMsg(arr, grade) {
  if (hasPassingGrade(grade)) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(grade)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(grade)}. You failed the course.`;
  }
}
studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);
//Class average: 71.7. Your grade: F. You failed the course.
