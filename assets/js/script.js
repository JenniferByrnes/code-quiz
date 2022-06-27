// This is the class of the "main" html
var pageContentEl = document.querySelector("#page-content");
var quizQuestionPageEl = document.getElementById("quiz-list-wrapper");

// This answerButtonEl holds answer choices
const answerButtonsEl = document.getElementById("answer-buttons");
const questionGradeEl = document.getElementById("question-grade");

// Needed global counters
var qIndex=0;
var currentQuestion;
var playerScore = 0;

// Buttons that will be hidden or revealed in game
var startButtonEl = document.getElementById("start-quiz-btn");
var nextButtonEl = document.getElementById("next-btn");

// OnClick to startQuiz function - Hide button and get questions
function startQuiz() {
  console.log("starting quiz");

  //Make element of starting HTML and hide it.
  // This is the 1st welcome page - it should not show again
  var startQuizDivEl = document.getElementById("start-quiz-id");
  startQuizDivEl.setAttribute("class", "hide");

  //This removes the "hide" class so that quiz will display and 
  quizQuestionPageEl.classList.remove('hide');

  // Start the timer and reveal the 1st question.
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!START TIMER HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  clearHighScores();
  nextQuestion();
} // end startQuiz

startButtonEl.onclick=startQuiz;
nextButtonEl.onclick=nextQuestion;
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! When timer ends - end game !!!!!!!!!!!!!!!!

// If we have another question, display it, otherwise the game is over.
function nextQuestion() {
  clearQuestion();
  
  if ( qIndex < questions.length ) {
    displayQuestions();
  } else {
    console.log("outof questions - end game processing");
    
    quizQuestionPageEl.classList.add('hide');
    endGame();
  }
  qIndex++;
}

// This displays the question and uses a forEach method to display answer choices
function displayQuestions () {

  currentQuestion =  questions[qIndex]

  //Display the question
  var messageEl = document.getElementById("message");
  messageEl.classList.remove('hide');
  messageEl.innerHTML = currentQuestion.message;


  // ************ FOREACH LOOP ****************//
  currentQuestion.choices.forEach(function(placeHolder, choiceIndex) {

    // Create buttons for answer choices
    const choiceAnswerBtn = document.createElement("button");
    choiceAnswerBtn.textContent= choiceIndex + 1;
    choiceAnswerBtn.innerText = currentQuestion.choices[choiceIndex];
    choiceAnswerBtn.classList.add("btn");
    // Add listener for "click"
    choiceAnswerBtn.addEventListener("click", selectAnswer)
    // keep appending choices until done
    answerButtonsEl.appendChild(choiceAnswerBtn);
  });
}
// Clear form for next question
function clearQuestion() {

  // Set displayed text to blank
  questionGradeEl.innerText = "";

  // Hide the Next button until user answers question
  nextButtonEl.classList.add('hide');

  // Remove all answer choices
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
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Timer !!!!!!!!!!!!!!!!!!!
  }
  nextButtonEl.classList.remove('hide');
}