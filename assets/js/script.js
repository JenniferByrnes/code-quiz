var questionCounter = 0;

var formEl = document.querySelector("#quiz-form");
var quizQuestionEl = document.querySelector("#quiz-question");
var pageContentEl = document.querySelector("#page-content");

// create array to hold winning scores for saving
var winners = [];

var startQuiz = function() {
  console.log("starting quiz");
  console.log("starting timer");
  console.log("display questions and answers");
  console.log("wrong answer - lose time");
  console.log("right answer - earn points");
  console.log("ending quiz - time is up");
  console.log("Do we have a winner?");
  console.log("No - console them");
  console.log("Yes - compare to other high score if high, save score - display button");
  console.log("offer to play again");
}

// This will ultimately save the winners initials to local storage in an array.
// Must compare to existing high score and only allow if winner is in the top 10
var saveHighScore = function (event) {
  // Winner must type initials
  event.preventDefault();
  var quizNameInput = document.querySelector("input[name='winner-name']").value;

  // check if inputs are empty (validate)
  if (!quizNameInput) {
    alert("Please enter your initials");
    console.log("returning false - empty initials");
    return false;
  }

  // reset form fields for next winner's initials
  document.querySelector("input[name='winner-name']").value = "";

  // set score
  const quizWinnerObj = {
    winnerId: 0,
    name: quizNameInput,
    score: 100};

  saveHighScoreToLocal(quizWinnerObj);
};

var saveHighScoreToLocal = function (winnerObj) {
  console.log("getting ready to saveHighScore");
  localStorage.setItem("highScore", JSON.stringify(winnerObj));
};

var collectHighScore = function() {
  var highScores = JSON.parse(localStorage.getItem("highScore"));

  // if there are no high scores, set high scores to an empty array and return out of the function
  if (!highScores) {
    console.log("No saved high scores - you are first!");
    return false;
  }
  console.log("Saved high scores found!");
  console.log(highScores);
  window.alert("highScores");
  // else, load up saved high scores

  return highScores;
};

var viewHighScore = function() {
  // Winner must type initials
  event.preventDefault();
  var highScores = collectHighScore();

  // loop through saved high scores array
  for (var i = 0; i < highScores.length; i++) {
    //createTaskEl(savedTasks[i]); look here for setting array object
    console.log("looping through high scores - call function here");
  }
};

// Save high score - button clicked
formEl.querySelector("#save-score").addEventListener("click", saveHighScore);

// View high score - button clicked
formEl.querySelector("#view-score").addEventListener("click", viewHighScore);

startQuiz();