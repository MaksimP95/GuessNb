"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // NO INPUT
  if (!guess) {
    displayMessage("Input Again");

    // RIGHT ANSWER
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    // UPDATING HIGH SCORE
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        ".label-highscore"
      ).textContent = `🥇 Highscore: ${highScore}`;
    }

    // WRONG ANSWERS //
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low";
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost");
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});

// AGAIN BUTTON - RESTART GAME

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  // CHANGING HTML
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";

  // CHANGING CSS
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  // CLEAR GUESS INPUT
  document.querySelector(".guess").value = "";
});
