"use strict";
// FUNCTIONS - created primarily for practice
function randomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (string) {
  document.querySelector(".number").textContent = string;
};

const displayScore = function () {
  document.querySelector(".score").textContent = score;
};

const setValue = function (value) {
  document.querySelector(".guess").value = value;
};

const numberWidth = function (value) {
  document.querySelector(".number").style.width = value;
};

const bodyColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// VARIABLES
let number = randomNum();
let score = 20;
let highScore = 0;

// AGAIN BUTTON - RESETS GAME
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = randomNum();
  setValue("");
  displayNumber("?");
  displayMessage("Start guessing...");

  displayScore();

  bodyColor("#222");
  numberWidth("15rem");
});

// INPUT LISTERNER
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // GAME LOGIC
  // Checks for score of 0
  if (score <= 0) {
    displayMessage("😿 Game over");
    displayScore();
  } //
  // checks for correct guess
  else if (guess === number) {
    if (score != 0) {
      displayMessage("🍗 Winner, winner!");
      bodyColor("#136833");

      displayNumber(number);
      numberWidth("30rem");

      // assigns a new highscore if higher than previous
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } //
  // evaluates incorrect and invalid guesses
  else if (guess !== number) {
    // invalid guess
    if (!guess || guess < 1 || guess > 20) {
      displayMessage("🙅 No valid input!");
    } //
    // incorrect guess
    else if (score > 1) {
      displayMessage(guess > number ? "👇 Lower" : "👆 Higher");
      score--;
      displayScore();
    }
  }
});
