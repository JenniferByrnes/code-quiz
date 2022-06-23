// Hold the post game (save score) section
var endFormEl = document.getElementById("end-form");
var restartQuizEl = document.getElementById("start-text");
var restartText = "Would you like to play again?";

// Button and List to view high scores
var viewScoresEl = document.getElementById("display-scores");
var viewBtnEl = document.getElementById("view-btn");

// create array to hold winning scores prior to saving
var highScoresArray = JSON.parse(localStorage.getItem("highScore")) || [];

// Allow player to save score
var endGame = function() {  
  console.log("in postQuiz function");
  // Hide quiz, show end game form
  endFormEl.setAttribute("class", "");
  // do nothing code - remove? - no keep it!!!
  viewDivEl.classList.remove('hide');
};  // end endGame

//Button clicked to view high scores
var viewHighScoreClick = function (event) {
  event.preventDefault();
  console.log("in function viewHighScores()");
  clearHighScores();
  renderHighScores();
};  // end viewHighScoreClick function

// Botton was clicked. This will save the winners initials to local storage in an array.
// Player clicked "Save Score" to get here
var saveButtonClicked = function (event) {
  console.log("in saveButtonclicked function");
  console.log("viewScoresEl=", viewScoresEl);
  event.preventDefault();

  // Winner must type initials
  var playerInitials = document.querySelector("input[name='winner-name']").value;

  // check if inputs are empty (validate)
  if (!playerInitials) {
    alert("Please enter your initials");
    console.log("returning false - empty initials");
    return false;
  }

  // reset form fields for next winner's initials
  document.querySelector("input[name='winner-name']").value = "";

  // set winnerObj values
  const winnerObj = {
    name: playerInitials,
    score: playerScore};

  // Add new score to array
  highScoresArray.push(winnerObj);
  console.log("in saveButtonClicked function");
  console.log("highScoresArray = ", highScoresArray);
  
  //saveToLocal(highScoresArray);
  localStorage.setItem("highScore", JSON.stringify(highScoresArray));

  clearHighScores();
  renderHighScores();
  resetGame();

}; //end saveButtonClicked function

var resetGame = function() {
  console.log("in resetGame function");
    //This hides the quiz and save score sections
    quizQuestionPageEl.setAttribute("class", "hide answers list-title");
    endFormEl.setAttribute("class", "hide");

    //This reveals the Start Quiz button and text
    document.getElementById("start-text").innerHTML = restartText;
    var quizStartEl = document.getElementById("start-quiz-id");
    quizStartEl.setAttribute("class", "start-quiz-id");
    //document.getElementById("start-quiz-id").class = "";
    //viewDivEl.classList.remove('hide');

    qIndex=0;
    playerScore = 0;
    
}
// Clear high scores
function clearHighScores() {

  console.log("in clearHighScores")

  while (viewScoresEl.firstChild) {
    viewScoresEl.removeChild(viewScoresEl.firstChild);
  }
}

// Displays high scores or message that none exist
var renderHighScores = function() {

  console.log("in function renderHighScores()");
  console.log("viewScoresEl=", viewScoresEl);

  // Unhide view high score display
  viewScoresEl.classList.remove('hide');
  var noHighScores = true;

  // ************ FOREACH Display LOOP ****************//
  highScoresArray.forEach(function(choiceValues, arrayIndex) {
 
    // Create button for answer choices
    const highScoresDisplay = document.createElement("button");
    highScoresDisplay.innerText = highScoresArray[arrayIndex].name + "    " +  highScoresArray[arrayIndex].score;
    highScoresDisplay.classList.add("btn");
    console.log("highScoresDisplay=", highScoresDisplay)

    noHighScores = false;
    viewScoresEl.appendChild(highScoresDisplay);
  });

  console.log("noHighScores=", noHighScores)

  if (noHighScores) {
    window.alert("There are no current high scores");
  }
  console.log("viewScoresEl=", viewScoresEl);
}

// **Save** high score - button clicked
endFormEl.querySelector("#save-score").addEventListener("click", saveButtonClicked);

// **View** high score - button clicked
viewBtnEl.addEventListener("click", viewHighScoreClick);