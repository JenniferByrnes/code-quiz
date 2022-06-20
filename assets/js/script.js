
/* This variable is for the endgame */
var formEl = document.querySelector("#quiz-form");

//var quizQuestionEl = document.querySelector("#quiz-question");

// This is the class of the "main" html
var pageContentEl = document.querySelector("#page-content");

// This CAN HOLD ANSWER CHOICES!!!
const answerButtonsEl = document.getElementById("answer-buttons");
// This one didn't work - wasnt used
// var choiseAnswersEL = document.getElementById("choices");

// This index might go better elsewhere.....
var qIndex=0;
var currentQuestion;

// Buttons that will be hidden or revealed in game
var startButtonEl = document.getElementById("start-quiz-btn");
var nextButtonEl = document.getElementById("next-btn");


// OnClick to startQuiz function - Hide button and get questions
function startQuiz() {
  console.log("starting quiz");

  //Make element of starting HTML
  var quizStartEl = document.getElementById("start-quiz-id");

  quizStartEl.setAttribute("class", "hide");

  //This removes the "hide" class so that it will display
  var quizQuestionPageEl = document.getElementById("quiz-list-wrapper");
  quizQuestionPageEl.setAttribute("class", "answers list-title");

  nextQuestion();
} // end startQuiz

startButtonEl.onclick=startQuiz;
nextButtonEl.onclick=nextQuestion;

function nextQuestion() {
  resetForm();
  displayQuestions();
  qIndex++;
}
// This uses a forEach method to cycle through answer choices
function displayQuestions () {

  currentQuestion =  questions[qIndex]

  //Display the question
  var messageEl = document.getElementById("message");
  messageEl.setAttribute("class", "answers list-title");
  //messageEl.classlist.remove('hide'); Did not work.

  messageEl.innerHTML = currentQuestion.message;

  console.log("in displayQuestions");
  console.log(currentQuestion);
  console.log("starting foreach loop");

  // choiceValues - doesn't seem to matter - what it is?
  // ************ FOREACH LOOP ****************//
  currentQuestion.choices.forEach(function(choiceValues, choiceIndex){
 
    // Create button for answer choices
    const choiceAnswerBtn = document.createElement("button");
    choiceAnswerBtn.textContent= choiceIndex + 1;
    choiceAnswerBtn.innerText = currentQuestion.choices[choiceIndex];
    choiceAnswerBtn.classList.add("btn");

    console.log("choiceAnswerBtn=",choiceAnswerBtn);
    choiceAnswerBtn.addEventListener("click", selectAnswer)

    answerButtonsEl.appendChild(choiceAnswerBtn);
  });
}

function resetForm() {
  console.log("nextButtonEl= ", nextButtonEl);
  console.log("answerButtonsEl= ", answerButtonsEl);
  
  nextButtonEl.classList.add('hide');
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

// When answer is selected, if correct - add to score, else deduct from time
function selectAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton.innerHTML == currentQuestion.correctAnswer) {

    console.log("Yes! your score goes up!");
  } else {
    console.log("Oops!  you lose time!");
  }
  nextButtonEl.classList.remove('hide');
}