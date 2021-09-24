// start button
let start = document.querySelector("#start");
// rules section
let rules = document.querySelector("#rules");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");
//quiz section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");
//question section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");
//question options
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
//answer section
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");
//result section
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let quit = document.querySelector("#quit");
let re_start = document.querySelector("#re_start");
//options
let choice_que = document.querySelector(".choice_que");

let index = 0;
let timer = 0;
let interval = 0;

//total score
let correct = 0;

let userAns = undefined;

//start button clicked
start.addEventListener("click", () => {
  start.style.display = "none";
  rules.style.display = "block";
});

//exit button clicked
exit.addEventListener("click", () => {
  rules.style.display = "none";
  start.style.display = "block";
});

//exit button clicked
continueBtn.addEventListener("click", () => {
  rules.style.display = "none";
  quiz.style.display = "block";
});

//quiz timer
let countDown = () => {
  if (timer === 20) {
    clearInterval(interval);
  } else {
    timer++;
    console.log(timer);
  }
};

setInterval(countDown, 1000);
