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
let choice_que = document.querySelectorAll(".choice_que");

let index = 0;
let timer = 0;
let interval = 0;

//total score
let correct = 0;

let UserAns = undefined;

//start button clicked
start.addEventListener("click", () => {
  start.style.display = "none";
  rules.style.display = "block";
});

//exit button clicked
exit.addEventListener("click", () => {
  start.style.display = "block";
  rules.style.display = "none";
});

//quiz timer
let countDown = () => {
  if (timer === 20) {
    clearInterval(interval);
    next_question.click();
  } else {
    timer++;
    time.innerText = timer;
  }
};

let loadData = () => {
  questionNo.innerText = index + 1 + ". ";
  questionText.innerText = quesList[index].question;
  option1.innerText = quesList[index].choice1;
  option2.innerText = quesList[index].choice2;
  option3.innerText = quesList[index].choice3;
  option4.innerText = quesList[index].choice4;

  timer = 0;
};

loadData();

//continue button clicked
continueBtn.addEventListener("click", () => {
  quiz.style.display = "block";
  rules.style.display = "none";

  interval = setInterval(countDown, 1000);
  loadData();

  choice_que.forEach((removeActive) => {
    removeActive.classList.remove("active");
  });
  total_correct.innerHTML = `${(correct = 0)} Out of ${quesList.length}`;
});

choice_que.forEach((choices, choiceNo) => {
  choices.addEventListener("click", () => {
    choices.classList.add("active");
    if (choiceNo === quesList[index].answer) {
      correct++;
    } else {
      correct += 0;
    }
    //stops counter
    clearInterval(interval);

    // when user makes selection, all other choices are disabled
    for (i = 0; i <= 3; i++) {
      choice_que[i].classList.add("disabled");
    }
  });
});

next_question.addEventListener("click", () => {
  //    if index is less then MCQS.length
  if (index !== quesList.length - 1) {
    index++;
    choice_que.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });

    loadData();

    // result
    total_correct.style.display = "block";
    total_correct.innerHTML = `${correct} Out Of ${quesList.length} Questions`;
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  } else {
    index = 0;

    clearInterval(interval);
    quiz.style.display = "none";
    score.innerHTML = `You got ${correct} Out Of ${quesList.length}`;
    result.style.display = "block";
  }
  for (i = 0; i <= 3; i++) {
    choice_que[i].classList.remove("disabled");
  }
});

//quit button clicked
quit.addEventListener("click", () => {
  start.style.display = "block";
  result.style.display = "none";
});

//Start Again When 'Start Again' Button Will Clicked
re_start.addEventListener("click", () => {
  rules.style.display = "block";
  result.style.display = "none";
});
