import { words } from "./words.js";

const hangmanParts = document.querySelectorAll(".hangman__part");
const keys = document.querySelectorAll(".keyboard__button");
const hintPlaceholder = document.querySelector("#hint-placeholder");
const guessesPlaceholder = document.querySelector("#guesses-placeholder");

let incorrectGuessesCount = 0;

(function () {
  const currentWord = words[getRandomInt(words.length - 1)];
  initGame(currentWord);
})();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function initGame(currentWord) {
  incorrectGuessesCount = 0;
  hangmanParts.forEach((part) => {
    part.classList.add("hangman__part_invisible");
  });
  keys.forEach((key) => {
    key.classList.remove("button_disabled");
  });
  guessesPlaceholder.textContent = incorrectGuessesCount;

  hintPlaceholder.textContent = currentWord.hint;
}
