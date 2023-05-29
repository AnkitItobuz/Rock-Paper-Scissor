const playBtn = document.getElementById("play-btn");
const hiddenItems = document.querySelectorAll(".hidden-items");
const hiddenButton = document.querySelectorAll(".hidden-button");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissors = document.getElementById("user-scissors");
const compRock = document.getElementById("comp-rock");
const compPaper = document.getElementById("comp-paper");
const compScissors = document.getElementById("comp-scissors");
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const winner = document.getElementById("winner");
const quitButton = document.getElementById("quit-btn");
const playAginBtn = document.getElementById("play-again-btn");

// quit button
quitButton.addEventListener("click", () => {
  hiddenItems.forEach((Element) => {
    Element.classList.remove("show");
  });
  reset();
  playBtn.addEventListener("click", myFunction);
});

function reset() {
  player1.classList.remove("style-player1");
  player2.classList.remove("style-player2");
  result1 = 0;
  result2 = 0;
  winner.style.opacity = "0";
  compScore.innerHTML = result2;
  userScore.innerHTML = result1;
}

playBtn.addEventListener("click", myFunction);

function myFunction() {
  hiddenItems.forEach((Element) => {
    Element.classList.add("show");
  });
  hiddenButton.forEach((Element) => {
    Element.style.display = "block";
  });

  playAginBtn.addEventListener("click", () => {
    hiddenItems.forEach((Element) => {
      Element.classList.add("show");
    });
    hiddenButton.forEach((Element) => {
      Element.style.display = "block";
    });
    reset();
  });

  playBtn.removeEventListener("click", myFunction);
}

let result1 = 0;
let result2 = 0;

function displayMove() {
  let number = generateRandom();
  if (number === 1) {
    // rock will come
    compRock.classList.remove("hide");
    compRock.classList.add("display");
    compPaper.classList.remove("display");
    compScissors.classList.remove("display");
  }

  if (number === 2) {
    // paper will come
    compRock.classList.add("hide");
    compRock.classList.remove("display");
    compPaper.classList.add("display");
    compScissors.classList.remove("display");
    result2++;
    compScore.innerHTML = result2;
  }

  if (number === 3) {
    // scissors will come
    compRock.classList.add("hide");
    compRock.classList.remove("display");
    compPaper.classList.remove("display");
    compScissors.classList.add("display");
    result1++;
    userScore.innerHTML = result1;
  }
  if (result2 === 5) {
    // computer wins
    player2.classList.add("style-player2");
    winner.style.opacity = "1";
    winner.textContent = "Computer win the game";
    result1 = 0;
    result2 = 0;

    hiddenButton.forEach((Element) => {
      Element.style.display = "none";
    });
  } else if (result1 === 5) {
    // user wins
    player1.classList.add("style-player1");
    winner.style.opacity = "1";
    winner.textContent = "You win the game";
    result1 = 0;
    result2 = 0;

    hiddenButton.forEach((Element) => {
      Element.style.display = "none";
    });
  }
}

rockBtn.addEventListener("click", () => {
  userRock.classList.remove("hide");
  userRock.classList.add("display");
  userPaper.classList.remove("display");
  userScissors.classList.remove("display");
  displayMove();
});

paperBtn.addEventListener("click", () => {
  userRock.classList.add("hide");
  userRock.classList.remove("display");
  userPaper.classList.add("display");
  userScissors.classList.remove("display");
  displayMove();
});

scissorsBtn.addEventListener("click", () => {
  userRock.classList.add("hide");
  userRock.classList.remove("display");
  userPaper.classList.remove("display");
  userScissors.classList.add("display");
  displayMove();
});

function generateRandom(maxLimit = 3) {
  let rand = Math.random() * maxLimit + 1;
  rand = parseInt(Math.floor(rand));
  return rand;
}
