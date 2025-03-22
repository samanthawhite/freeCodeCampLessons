// Gradebook
// A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

/////////////////////////////////
// Functions
/////////////////////////////////

// Define a function to get an average
function getAverage(scores) {
  let finalScore = 0;
  for (let i = 0; i < scores.length; i++){
    finalScore = finalScore + scores[i];
  }
  finalScore = finalScore/scores.length;
  return finalScore;
}

// Define a function to convert the average to a letter grade
function getGrade(score) {
  if(score===100){
    return "A++";
  } else if (score>=90) {
    return "A";
  } else if (score>=80) {
    return "B";
  } else if (score>=70) {
    return "C";
  } else if (score>=60) {
    return "D";
  } else {
    return "F";
  }
}

// Define a function to check if a student has a passing grade
function hasPassingGrade(score) {
  if (getGrade(score)!="F") {
    return true;
  } else {
    return false;
  }
}

// Create a function to message the student with the results
function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore)) { // if true
    return "Class average: "+ getAverage(totalScores) +". Your grade: "+ getGrade(studentScore) +". You passed the course."
  } else {
    return "Class average: "+ getAverage(totalScores) +". Your grade: "+ getGrade(studentScore) +". You failed the course."
  }
}

/////////////////////////////////
// Tests
/////////////////////////////////
// Test the getAverage function
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// test getGrade
console.log(getGrade(34))

// test hasPassingGrade
console.log(hasPassingGrade(74))

// test studentMsg
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));