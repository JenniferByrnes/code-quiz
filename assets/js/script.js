// This is the class of the "main" html
var pageContentEl = document.querySelector("#page-content");
var quizQuestionPageEl = document.getElementById("quiz-list-wrapper");

// This answerButtonEl holds answer choices
const answerButtonsEl = document.getElementById("answer-buttons");
const questionGradeEl = document.getElementById("question-grade");

// This index might go better elsewhere.....
var qIndex=0;
var currentQuestion;
var playerScore = 0;

// Buttons that will be hidden or revealed in game
var startButtonEl = document.getElementById("start-quiz-btn");
var nextButtonEl = document.getElementById("next-btn");

// The view div element is not needed during the quiz
var viewDivEl = document.getElementById("view-high-score-div");


// OnClick to startQuiz function - Hide button and get questions
function startQuiz() {
  console.log("starting quiz");
  console.log("viewScoresEl=", viewScoresEl);

  //Make element of starting HTML and hide it.
  // This is the 1st welcome page - it will not show again
  var startQuizDivEl = document.getElementById("start-quiz-id");
  startQuizDivEl.setAttribute("class", "hide");

  //This removes the "hide" class so that it will display and adds it to View High Scores in case this is a replay
  quizQuestionPageEl.setAttribute("class", "answers list-title");

  /*viewDivEl.setAttribute("class", "hide");*/
  viewDivEl.classList.add('hide');
  clearHighScores();

  nextQuestion();
} // end startQuiz

startButtonEl.onclick=startQuiz;
nextButtonEl.onclick=nextQuestion;

function nextQuestion() {
  resetForm();
  if ( qIndex < questions.length ) {
    displayQuestions();
  } else {
    console.log("outof questions - end game processing");
    /*quizQuestionPageEl.setAttribute("class", "hide answers list-title");*/
    quizQuestionPageEl.classList.add('hide');
    endGame();
  }
  qIndex++;
}
// This uses a forEach method to cycle through answer choices
function displayQuestions () {

  currentQuestion =  questions[qIndex]

  //Display the question
  var messageEl = document.getElementById("message");
  /* messageEl.setAttribute("class", "answers list-title");*/
  messageEl.classList.remove('hide');

  messageEl.innerHTML = currentQuestion.message;

  console.log("in displayQuestions");
  console.log(currentQuestion);
  console.log("starting foreach loop");

  // ************ FOREACH LOOP ****************//
  currentQuestion.choices.forEach(function(placeHolder, choiceIndex) {

    // Create button for answer choices
    const choiceAnswerBtn = document.createElement("button");
    choiceAnswerBtn.textContent= choiceIndex + 1;
    choiceAnswerBtn.innerText = currentQuestion.choices[choiceIndex];
    choiceAnswerBtn.classList.add("btn");

    choiceAnswerBtn.addEventListener("click", selectAnswer)

    answerButtonsEl.appendChild(choiceAnswerBtn);
  });
}
// Clear form for next question
function resetForm() {

  questionGradeEl.innerText = "";
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
    playerScore = playerScore + 10;
      // Tell player that they are right
    questionGradeEl.innerText = "Congrats - you got that right!";
  } 
  else {
    // Tell player that they are wrong
    questionGradeEl.innerText = "Better luck next time...";
  }
  nextButtonEl.classList.remove('hide');
}