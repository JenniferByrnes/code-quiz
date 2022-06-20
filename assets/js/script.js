/* 
display question
display answers
display button to submit and get next question
score it
*/

/* This variable is for the endgame */
var formEl = document.querySelector("#quiz-form");
var quizQuestionEl = document.querySelector("#quiz-question");

// This is the class of the "main" html
var pageContentEl = document.querySelector("#page-content");

// This CAN HOLD ANSWER CHOICES!!!
var answerChoicesEl = document.querySelector("#answer-choices");
var i=0;

var startButton = document.getElementById("start-quiz-btn");
var choices = document.getElementById("choices");

// OnClick to startQuiz function - Hide button and get questions
function startQuiz() {
  console.log("starting quiz");

  //Make element of starting HTML
  var quizStartEl = document.getElementById("start-quiz-id");

  quizStartEl.setAttribute("class", "hide");

  //This removes the "hide" class so that it will display
  var quizQuestionPageEl = document.getElementById("quiz-list-wrapper");
  quizQuestionPageEl.setAttribute("class", "answers list-title");

  displayQuestions();
} // end startButton

startButton.onclick=startQuiz;

// This uses a forEach method to cycle through answer choices
function displayQuestions () {
  
  var currentQuestion =  questions[i]

  //Display the question
  var messageEl = document.getElementById("message");
  //messageEl.setAttribute("class", "answers list-title");
  messageEl.classlist.remove('hide');

  messageEl.innerHTML = currentQuestion.message;

  console.log("in displayQuestions");
  console.log(currentQuestion);
  console.log("starting foreach loop");

  // choiceValues - doesn't seem to matter - what it is?
  currentQuestion.choices.forEach(function(choiceValues, choiceIndex){
 
    var choiceAnswer = document.createElement("button");
    choiceAnswer.setAttribute("class", "choiceIndex");
    choiceAnswer.setAttribute("value", choiceIndex);
    choiceAnswer.textContent= choiceIndex + 1;

    console.log("choiceAnswer=",choiceAnswer);
    console.log("choices[]=",questions[i].choices[choiceIndex]);

  answerChoicesEl.appendChild(choiceAnswer);
  });
}

function selectAnswer() {

}