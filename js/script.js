import { words } from "./words.js";

const hangmanParts = document.querySelectorAll(".hangman__part");
const keys = document.querySelectorAll(".keyboard__button");
const hintPlaceholder = document.querySelector("#hint-placeholder");
const guessesPlaceholder = document.querySelector("#guesses-placeholder");
const word = document.querySelector("#word");

let incorrectGuessesCount = 0;
let currentWord;
let letters = [];

(function () {
  keys.forEach((key) =>
    key.addEventListener("click", ({ target }) =>
      guessLetter(target.textContent)
    )
  );

  initGame();
})();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function initGame() {
  currentWord = words[getRandomInt(words.length)];
  letters = [];

  incorrectGuessesCount = 0;
  hangmanParts.forEach((part) => {
    part.classList.add("hangman__part_invisible");
  });
  keys.forEach((key) => {
    key.classList.remove("button_disabled");
  });
  hintPlaceholder.textContent = currentWord.hint;

  updateGuessesCount();
  createWord();
}

function createWord() {
  for (let i = 0; i < currentWord.word.length; i++) {
    const letter = document.createElement("div");
    letter.className = "interface__letter interface__letter_hidden";
    letters.push(letter);
  }
  word.append(...letters);
}

function guessLetter(letter) {
  const indexes = [];
  let pos = currentWord.word.indexOf(letter);
  while (pos !== -1) {
    indexes.push(pos);
    pos = currentWord.word.indexOf(letter, pos + 1);
  }

  const key = findKey(letter);
  key.classList.add("button_disabled");

  if (indexes.length === 0) {
    hangmanParts[incorrectGuessesCount].classList.remove(
      "hangman__part_invisible"
    );
    incorrectGuessesCount++;
    updateGuessesCount();
  } else {
    indexes.forEach((index) => {
      letters[index].textContent = letter;
      letters[index].classList.remove("interface__letter_hidden");
    });
  }
}

function findKey(letter) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.textContent === letter) return key;
  }
}

function updateGuessesCount() {
  guessesPlaceholder.textContent = incorrectGuessesCount;
}
