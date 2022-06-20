//var questionCounter = 0;

var endFormEl = document.getElementById("end-form");
console.log("endFormEl=", endFormEl);
//var quizQuestionEl = document.querySelector("#quiz-question");
//var pageContentEl = document.querySelector("#page-content");

// create array to hold winning scores for saving
var highScoresArray = "";

//const highScoreObj = {
//  winnerId: "",
//  name: "",
//  score: ""};

// Game ended
// Must compare player score to existing high scores and only allow save if winner is in the top 10
var endGame = function() {

  
  console.log("in postQuiz function");
  //console.log("highScoresArray = ", highScoresArray);

  // Hide quiz, show end game form
  
  endFormEl.setAttribute("class", "");

  var winner = false;

  // If no high scores exist, we have a winner - show button
  if (!highScoresArray) {
    // Player is first - show button
    winner = true;
    console.log("you are first");
    console.log("highScoresArray = ");
    console.log(highScoresArray);
  }
  // else Loop through high scores to see if player is in top group.
  // if so, show button
  // Else - allow replay


    //console.log("else - start loop through high scores");
    //console.log(highScoresArray.length, winner);
    //for (i=0; winner=false && i<highScoresArray.length; i++){
      //check scores
      //if score is high enough - show button
      //winner = true;
      //console.log("looping through high scores");
      //console.log(highScoresArray);
    //}
  //} 
  else {
    //no high score - no button
    // winner stays false
  }

  // if player has high score show button to save score
  if (winner) {
    //show button
    console.log("you are a winner - show button to SAVE SCORE");
  } else {
    console.log("winner=(default), play again?");
    // Do something here to restart/reset game
    return;
  }

  // Botton was clicked. This will save the winners initials to local storage in an array.
  // Player clicked "Save Score" to get here
  var saveButtonClicked = function (event) {
    console.log("in saveButtonclicked function");
    event.preventDefault();

    // Winner must type initials
    var playerInitials = document.querySelector("input[name='winner-name']").value;

    // check if inputs are empty (validate)
    if (!playerInitials) {
      console.log("Please enter your initials");
      console.log("returning false - empty initials");
      return false;
    }

    // reset form fields for next winner's initials
    document.querySelector("input[name='winner-name']").value = "";

    // set winnerObj values
    const winnerObj = {
      winnerId:1,
      name: playerInitials,
      score: playerScore};

      // Assuming that we have new score and we are just adding it here
    //for (i=0; i<highScoresArray.length; i++) {
    //  winnerObj[i+1] = highScoresArray[i]
    //}  
    //highScoresObj.push(winnerObj);
    //highScoresArray.name.push(winnerObj.playerInitials);
    console.log("highScoresArray in saveButtonClicked function");
    console.log("highScoresArray = ");
    console.log(highScoresObj);
    //saveToLocal(highScoresObj);
    saveToLocal(winnerObj);
  }; //end saveButtonClicked function

  // // This will save the winners initials to local storage in an array.
  var prepareToSaveHighScore = function() {

    var winner = false;
    
    console.log("in prepareToSaveHighScore");
    console.log("highScoresArray = ");
    console.log(highScoresArray);

  }; //end prepareToSaveHighScore function

  var saveToLocal = function (winnerObj) {
    console.log("in saveToLocal function");
    console.log("winnerObj = ");
    console.log(winnerObj);
    localStorage.setItem("highScore", JSON.stringify(winnerObj));
  };  // end saveToLocal function

  // Reads high scores from local storage and puts them in highScores array
  var getHighScores = function() {
    console.log("in function getHighScores()");
    highScoresArray = JSON.parse(localStorage.getItem("highScore"));
    
    // if there are no high scores, set high scores to an empty array and return out of the function
    if (!highScoresArray) {
      console.log("in function getHighScores()");
      console.log("No saved high scores - you are first!");
      return false;
    }
    console.log("end of getHighScores() - Saved high scores found!");
    console.log("highScoresArray.name = ");
    console.log(highScoresArray.name);

    return highScoresArray;
  };  // end getHighScores function

  //Button clicked to view high scores - display them
  var viewHighScoreButton = function(highScoresArray) {
    e.preventDefault();
    console.log("viewHighScores()");
    console.log("highScoresObj = ");
    console.log(highScoresObj);
    // if there are no high scores, set high scores to an empty array and return out of the function
    if (!highScoresArray) {
      console.log("No saved high scores - you are first!");
    } else {
      console.log("at else - **** highScoresObj");
      console.log("highScoresArray = ", highScoresArray);
    }
  };  // end viewHighScoreButton function

  // retrieve score from local storage
  var retrieveHighScores = function() {
    

  };  // end retrieveHighScores function

  const highScoresObj = getHighScores();
};  // end endGame
// **Save** high score - button clicked
//endFormEl.querySelector("#save-score").addEventListener("click", saveButtonClicked);

// **View** high score - button clicked
//endFormEl.querySelector("#view-score").addEventListener("click", viewHighScoreButton);