var questionCounter = 0;

var formEl = document.querySelector("#quiz-form");
var quizQuestionEl = document.querySelector("#quiz-question");
var pageContentEl = document.querySelector("#page-content");

var startButton = document.getElementById("start-quiz");

function startQuiz() {
  console.log("starting quiz");

  //Make HTML startElementForm - jkb
  var quizStartEl = document.getElementById("start-quiz-id");

  quizStartEl.setAttribute("class", "hide");
}
startButton.onclick=startQuiz;