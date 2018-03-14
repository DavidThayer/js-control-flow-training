console.log("security_questions.js loaded");

//var questionNumber = {"What is your favorite color?", "What day is it?", "What is your quest?"};
//var answerKey = {"Blue", "Tuesday", "Holy Grail"}

var securityQuestions = [
{
  questions: 'What is your favorite color?',
  expectedAnswer: 'Blue'
},
{
  questions: 'What day is it?',
  expectedAnswer: 'Tuesday'
},
{
  questions: 'What is your quest?',
  expectedAnswer: 'Holy Grail'
}
];

// while (secAnswer != securityQuestions[i].expectedAnswer) {

for (var i = 0; i < securityQuestions.length; i++){
  let secAnswer = prompt (securityQuestions[i].questions);
  if (secAnswer !== securityQuestions[i].expectedAnswer) { //why don't we need another if here to prompt another answer?
    alert("Wrong answer");
    break;
    // let answerInput = prompt ("That is not the correct answer. " + securityQuestions[i].questions);
  }
}


/*
// numIterations ensures this while loop doesn't go on forever
var numIterations = 0;
while (true && numIterations < 100){
  console.log('still going!');
  numIterations++;
}

for (var i = 0; i < questionNumber.length; i++){

}
*/
