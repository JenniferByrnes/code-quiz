// This is the class of the "main" html
var pageContentEl = document.querySelector("#page-content");
var quizQuestionPageEl = document.getElementById("quiz-list-wrapper");

// Set the countdown timer
var timeLeft;
var timeInterval;

// This is an h2 element from html
var timerEl = document.getElementById('countdown');

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
var startQuiz = function() {
  console.log("starting quiz");

  //Make element of starting HTML and hide it.
  // This is the 1st welcome page - it should not show again
  var startQuizDivEl = document.getElementById("start-quiz-id");
  startQuizDivEl.setAttribute("class", "hide");

  //This removes the "hide" class so that quiz will display and 
  quizQuestionPageEl.classList.remove('hide');

  // Start the timer (seconds) and reveal the 1st question.
  timeLeft = 30;
  countdown()
  clearHighScores();
  nextQuestion();
} // end startQuiz

startButtonEl.onclick=startQuiz;
nextButtonEl.onclick=nextQuestion;

// If we have another question, display it, otherwise the game is over.
function nextQuestion() {
  clearQuestion();
  
  if ( qIndex < questions.length ) {
    displayQuestions();
  } 
  else {
    console.log("outof questions - end game processing");
    endGame();
  }
  qIndex++;
}

// This displays the question and uses a forEach method to display answer choices
var displayQuestions = function() {

  currentQuestion =  questions[qIndex]

  //Display the question
  var messageEl = document.getElementById("message");
  messageEl.classList.remove('hide');
  messageEl.innerHTML = currentQuestion.message;

  // create buttons for answer choices and display them
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
var clearQuestion = function() {

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
var selectAnswer = function(e) {
  const selectedButton = e.target;

  if (selectedButton.innerHTML == currentQuestion.correctAnswer) {
    playerScore = playerScore + 10;
      // Tell player that they are right
    questionGradeEl.innerText = "Congrats - you got that right!";
  } 
  else {
    // Tell player that they are wrong and deduct 10 seconds from their time
    questionGradeEl.innerText = "Better luck next time...";
    timeLeft = timeLeft - 10;
  }
  nextButtonEl.classList.remove('hide');
}

var countdown = function() {
  console.log("+++++++++++++++ in countdown");

  // setInterval() runs stuff for a set interval of time - one second
  timeInterval = setInterval(function () {
    // if time left - display it
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } 
    //  changing the text for one single second
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } 
    // out of time - stop the timer and clear it out
    else {
      timerEl.textContent = "Time's Up";
      endGame();
    }
    // This runs every second on the second
  }, 1000);
}
