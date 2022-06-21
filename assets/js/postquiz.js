var endFormEl = document.getElementById("end-form");
var viewScoresEl = document.getElementById("view-score");
console.log("endFormEl=", endFormEl);
console.log("viewScoresEl=", viewScoresEl);
//var quizQuestionEl = document.querySelector("#quiz-question");
//var pageContentEl = document.querySelector("#page-content");

// create array to hold winning scores for saving
var highScoresArray = JSON.parse(localStorage.getItem("highScore")) || [];

// Allow player to save score
var endGame = function() {
  
  console.log("in postQuiz function");
  // Hide quiz, show end game form
  endFormEl.setAttribute("class", "");

};  // end endGame

//Button clicked to view high scores - display them
var viewHighScoreClick = function (event) {
  event.preventDefault();
  console.log("in function viewHighScores()");
  renderHighScores;
};  // end viewHighScoreClick function

// Botton was clicked. This will save the winners initials to local storage in an array.
// Player clicked "Save Score" to get here
var saveButtonClicked = function (event) {
  console.log("in saveButtonclicked function");
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

  resetGame();

}; //end saveButtonClicked function

var resetGame = function() {
    //This adds back the "hide" class so that it will display
    quizQuestionPageEl.setAttribute("class", "hide answers list-title");
    endFormEl.setAttribute("class", "hide");

    //Show Take Quiz button
    var quizStartEl = document.getElementById("start-quiz-id");
    quizStartEl.setAttribute("class", "");
    qIndex=0;
}



//This one needs work - also - combine with viewHighScores?
var renderHighScores = function() {

  var viewScoresEl = document.getElementById("view-score");
  viewScoresEl.setAttribute("class", "list-title");

  // ************ FOREACH LOOP ****************//
  highScoresArray.forEach(function(highScoresFunction){
 
    // Create button for answer choices
    const highScoresDisplay = document.createElement("button");
    highScoresDisplay.innerText = highScoresArray.name + highScoresArray.score;
    highScoresDisplay.classList.add("btn");
    console.log("highScoresDisplay=", highScoresDisplay)

    viewScoresEl.appendChild(highScoresDisplay);
  });
}

// **Save** high score - button clicked
endFormEl.querySelector("#save-score").addEventListener("click", saveButtonClicked);

// **View** high score - button clicked
viewScoresEl.addEventListener("click", viewHighScoreClick);