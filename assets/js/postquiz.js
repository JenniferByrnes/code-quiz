// Hold the post game (save score) section
var endFormEl = document.getElementById("end-form");
var restartQuizEl = document.getElementById("start-text");
var restartText = "Would you like to play again?";
var playerScoreEl = document.getElementById("player-score");

// Div, Button and List to view high scores
var viewDivEl = document.getElementById("view-high-score-div");
var viewScoresEl = document.getElementById("display-scores");
var viewBtnEl = document.getElementById("view-btn");

// create array to hold winning scores prior to saving
var highScoresArray = JSON.parse(localStorage.getItem("highScore")) || [];

// Restart button 
var restartButtonEl = document.getElementById("restart-quiz-btn");


// Allow player to save score
var endGame = function() {  

  // Show the player their score
  playerScoreEl.innerHTML = ("innerHTML", "Your final score is:" + playerScore);
  
  // Hide quiz, show end game form
  quizQuestionPageEl.classList.add('hide');
  endFormEl.setAttribute("class", "");

  // Stop the timer
  clearInterval(timeInterval);
};  // end endGame

//Button clicked to view high scores
var viewHighScoreClick = function (event) {
  event.preventDefault();

  clearHighScores();
  renderHighScores();
};  // end viewHighScoreClick function

// Save Score Button was clicked - save the winners initials to local storage in an array.
var saveButtonClicked = function (event) {
  event.preventDefault();

  // Winner must type initials
  var playerInitials = document.querySelector("input[name='winner-name']").value;

  // check if inputs are empty (validate)
  if (!playerInitials) {
    alert("Please enter your initials");
    console.log("returning false - empty initials");
    return false;
  }

  // set winnerObj values
  const winnerObj = {
    name: playerInitials,
    score: playerScore};

  // Add new score to array
  highScoresArray.push(winnerObj);
  
  //saveToLocal(highScoresArray);
  localStorage.setItem("highScore", JSON.stringify(highScoresArray));

  clearHighScores();
  renderHighScores();
  resetGame(event);

}; //end saveButtonClicked function

var resetGame = function(event) {
  event.preventDefault();
  console.log("in reset");

  // reset form fields for next winner's initials
  document.querySelector("input[name='winner-name']").value = "";

  //This hides the quiz and player score sections
  quizQuestionPageEl.setAttribute("class", "hide answers list-title");
  endFormEl.setAttribute("class", "hide");

  //This reveals the Start Quiz button and restart text
  document.getElementById("start-text").innerHTML = restartText;
  var quizStartEl = document.getElementById("start-quiz-id");
  quizStartEl.setAttribute("class", "start-quiz-id");

  // Reset question counter and player score
  qIndex=0;
  playerScore = 0;
}

// Clear high score display
var clearHighScores =  function() {

  // Remove all high score buttons
  while (viewScoresEl.firstChild) {
    viewScoresEl.removeChild(viewScoresEl.firstChild);
  }
}

// Displays high scores or message that none exist
var renderHighScores = function() {

  // Unhide view high score display
  viewScoresEl.classList.remove('hide');
  var noHighScores = true;

  // ************ FOREACH Display LOOP ****************//
  highScoresArray.forEach(function(choiceValues, arrayIndex) {
 
    // Create button for answer choices
    const highScoresDisplay = document.createElement("button");
    highScoresDisplay.innerText = highScoresArray[arrayIndex].name + "    " +  highScoresArray[arrayIndex].score;
    highScoresDisplay.classList.add("btn");

    noHighScores = false;
    viewScoresEl.appendChild(highScoresDisplay);
  });

  if (noHighScores) {
    window.alert("There are no current high scores");
  }
}

// **Save** high score - button clicked
endFormEl.querySelector("#save-score").addEventListener("click", saveButtonClicked);

// **View** high score - button clicked
viewBtnEl.addEventListener("click", viewHighScoreClick);

restartButtonEl.onclick=resetGame;

