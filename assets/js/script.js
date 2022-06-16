var questionCounter = 0;

var formEl = document.querySelector("#quiz-form");
var quizQuestionEl = document.querySelector("#quiz-question");
var pageContentEl = document.querySelector("#page-content");

// create array to hold winning scores for saving
var winners = [];
playerScore = 60;

var startQuiz = function() {
  console.log("starting quiz");
  console.log("starting timer");
  console.log("display questions and answers");
  console.log("wrong answer - lose time");
  console.log("right answer - earn points");
  console.log("ending quiz - time is up");
  console.log("offer to play again");
}

// Must compare to existing high score and only allow if winner is in the top 10
var handleHighScore = function() {

  var winner = false;

  //MOVED this code TO global
  // Load high scores into highScores array
  //var highScores = collectHighScores();
  //console.log("Finished collectHighScores");
  //console.log(highScores);
  console.log("in handleHighScore");
  console.log(highScores);
  if (!highScores) {
    // Player is first to save score - show button
    winner = true;
    console.log("you are first");
    console.log(highScores);
  }
  else {
    console.log("else - prepart to looping through high scores");
    console.log(highScores.length, winner);
    for (i=0; winner=false && i<highScores.length; i++){
      //check scores
      //if score is high - show button
      console.log("looping through high scores");
      console.log(highScores);
    }
  }

  // if player has high score show button to save score
  if (winner) {
    //show button
    window.alert("you are a winner show button to SAVE SCORE");
  } else {
    window.alert("you are not a winner Try again");
  }

  //const quizWinnerObj = {
  //  winnerId: 0,
  //  name: playerInitials,
  //  score: 100};

};


// This will save the winners initials to local storage in an array.
// Player clicked "Save Score" to get here
var saveHighScore = function (event) {
  // Winner must type initials
  event.preventDefault();
  var playerInitials = document.querySelector("input[name='winner-name']").value;

  // check if inputs are empty (validate)
  if (!playerInitials) {
    alert("Please enter your initials");
    console.log("returning false - empty initials");
    return false;
  }

  // reset form fields for next winner's initials
  document.querySelector("input[name='winner-name']").value = "";

  // set score
  const quizWinnerObj = {
    name: playerInitials,
    score: 100};

    // Assuming that we have new score and we are just adding it here
  //for (i=0; i<highScores.length; i++) {
  //  quizWinnerObj[i+1] = highScores[i]
  //}  


  highScores.name.push(quizWinnerObj.playerInitials);
  console.log("highScores in saveHighScore function");
  console.log(highScores);
  saveHighScoreToLocal(quizWinnerObj);
};

var saveHighScoreToLocal = function (winnerObj) {
  console.log("getting ready to saveHighScore");
  localStorage.setItem("highScore", JSON.stringify(winnerObj));
};

// Reads high scores from local storage and puts them in highScores array
var collectHighScores = function() {
  var highScores = JSON.parse(localStorage.getItem("highScore"));

  // if there are no high scores, set high scores to an empty array and return out of the function
  if (!highScores) {
    console.log("No saved high scores - you are first!");
    return false;
  }
  console.log("collectingHighScores() - Saved high scores found!");

  return highScores;
};

var viewHighScore = function() {
  // Winner must type initials
  event.preventDefault();
  var highScores = collectHighScores();

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

// This is the quiz body
startQuiz();
// Need highScores array for remainder of code
const highScores = collectHighScores();
console.log("Finished collectHighScores");
console.log(highScores);

// Check about saving high score
handleHighScore();