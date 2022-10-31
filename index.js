var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('Tell me your Name ? ');
console.log('Hello ', userName);

var questions = [
  {
    question : 'Where do i live ? ',
    answer : 'jalandhar'
  },
  {
    question: 'What is my hobby ? ',
    answer: 'reading books'
  },
  {
    question: 'What is my favourite drink ? ',
    answer: 'coffee'
  },
  {
    question: 'What is my favourite movie ? ',
    answer: 'the pursuit of happyness'
  },
  {
    question: 'What is my favourite tv show ? ',
    answer: 'tmkoc'
  }
];

function checkAnswer(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log('Yay, You are right.');
    score++;
    console.log('Your Score is : ', score);
  }
  else{
    console.log('Sorry, You are wrong.');
    score--;
    console.log('Your Score is : ', score);
  }
}

function checking(){
  for(var i = 0; i < questions.length; i++){
    var objectQuestions = questions[i];
    checkAnswer(objectQuestions.question, objectQuestions.answer);
  }
}
checking();

console.log('Your final score is : ', score);