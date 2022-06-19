

// Not sure that these are needed....
var formEl = document.querySelector("#quiz-form");
var quizQuestionEl = document.querySelector("#quiz-question");

// This is the class of the "main" html
var pageContentEl = document.querySelector("#page-content");

// This CAN HOLD ANSWER CHOICES!!!
var answerChoicesEl = document.querySelector("#answer-choices");
var i=0;

// Good variables from here.

var startButton = document.getElementById("start-quiz-btn");
var choices = document.getElementById("choices");

// OnClick to startQuiz function - Hide button and get questions
function startQuiz() {
  console.log("starting quiz");

  //Make HTML startElementForm - jkb
  var quizStartEl = document.getElementById("start-quiz-id");

  quizStartEl.setAttribute("class", "hide");
  displayQuestions();
} // end startButton

startButton.onclick=startQuiz;

// This uses a forEach method to cycle through answer choices
function displayQuestions () {
  var currentQuestion =  questions[i]
  console.log("in displayQuestions");
  console.log(currentQuestion);
  console.log("starting foreach loop");

  // choiceValues - doesn't seem to matter - what it is?
  currentQuestion.choices.forEach(function(choiceValues, choiceIndex){
 
    var choiceAnswer = document.createElement("button");
    choiceAnswer.setAttribute("class", "choiceIndex");
    choiceAnswer.setAttribute("value", choiceIndex);
    choiceAnswer.textContent= i + 1 + choiceIndex;

    console.log("choiceAnswer=",choiceAnswer);

    answerChoicesEl.appendChild(choiceAnswer);
  });
}