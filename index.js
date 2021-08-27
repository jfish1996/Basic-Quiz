let submitBtns = document.getElementsByTagName("button");
let usersAnwsers = [];
let finalArray = ["To find the holy grail", "red", "ramen"];
let currentQuestion = document.getElementById("currentQuestion");
currentQuestion.innerHTML = 1;
let totalQuestions = document.getElementById("totalQuestions");
totalQuestions.innerHTML = finalArray.length;

let domQuestionElements = document.getElementsByClassName("question");
let pointer = 0;

function grabAnwsers(btnName) {
  let arrayQuestions = document.getElementsByName(btnName);
  let anwserCliked = false;
  for (let i = 0; i < arrayQuestions.length; i++) {
    if (arrayQuestions[i].checked) {
      anwserCliked = true;
    }
  }
  if (anwserCliked) {
    console.log("youre good");
  } else {
    alert("please input an anwser");
  }

  for (let value of arrayQuestions) {
    if (value.checked) {
      usersAnwsers.push(value.value);
    }
  }
}

function moveForward(endPoint) {
  if (endPoint === "food") {
    let questionHeader = document.getElementsByClassName("questionHeader")[0];
    questionHeader.classList.add("Hidden");
  }
  currentQuestion.innerHTML++;
  pointer++;
  for (let i = 0; i < domQuestionElements.length; i++) {
    domQuestionElements[i].classList = "question Hidden";
  }
  domQuestionElements[pointer].classList = "question active";
}

function displayResults(userInput, correctAnwsers) {
  let anwsers = {
    correct: 0,
    wrong: 0,
  };

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === correctAnwsers[i]) {
      anwsers.correct++;
    } else {
      anwsers.wrong++;
    }
  }

  document.getElementById("Correct").innerHTML = anwsers.correct;
  document.getElementById("Wrong").innerHTML = anwsers.wrong;

  console.log(anwsers);
}

for (let button of submitBtns) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (button.id === "food") {
      grabAnwsers(button.id);
      displayResults(usersAnwsers, finalArray);
      moveForward(button.id);
    } else {
      grabAnwsers(button.id);
      console.log(pointer);
      moveForward();
    }
  });
}

//think about it before you code

//first onclick of a submit button, grab the value of whatever radio question you're on

//while pointer is on ele, it applys style. When its not, style goes away.

//if statement

//if pointer === domQuestionElemnts[pointer] {
//domQEl.classList = active
// else domQEL.classList = hidden}
