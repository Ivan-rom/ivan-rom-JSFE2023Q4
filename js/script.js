import { words } from "./words.js";

const hangmanParts = document.querySelectorAll(".hangman__part");
const keys = document.querySelectorAll(".keyboard__button");
const hintPlaceholder = document.querySelector("#hint-placeholder");
const guessesPlaceholder = document.querySelector("#guesses-placeholder");
const word = document.querySelector("#word");

let incorrectGuessesCount = 0;
let currentWord;

initGame();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function initGame() {
  currentWord = words[getRandomInt(words.length)];

  incorrectGuessesCount = 0;
  hangmanParts.forEach((part) => {
    part.classList.add("hangman__part_invisible");
  });
  keys.forEach((key) => {
    key.classList.remove("button_disabled");
  });
  guessesPlaceholder.textContent = incorrectGuessesCount;

  hintPlaceholder.textContent = currentWord.hint;

  createWord();
}

function createWord() {
  const letters = [];
  for (let i = 0; i < currentWord.word.length; i++) {
    const letter = document.createElement("div");
    letter.className = "interface__letter interface__letter_hidden";
    letters.push(letter);
  }
  word.append(...letters);
}
