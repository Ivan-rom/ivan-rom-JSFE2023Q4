import { words } from "./words.js";
import { generatePage } from "./generatePage.js";

generatePage();

const hangmanParts = document.querySelectorAll(".hangman__part");
const keys = document.querySelectorAll(".keyboard__button");
const hintPlaceholder = document.querySelector("#hint-placeholder");
const guessesPlaceholder = document.querySelector("#guesses-placeholder");
const word = document.querySelector("#word");
const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modal-message-placeholder");
const secretWord = document.querySelector("#secret-word-placeholder");
const modalButton = document.querySelector(".modal__button");

let incorrectGuesses = [];
let currentWord;
let letters = [];
let correctGuesses = [];

(function () {
  keys.forEach((key) =>
    key.addEventListener("click", ({ target }) =>
      guessLetter(target.textContent)
    )
  );

  window.addEventListener("keydown", (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (
        !correctGuesses.includes(e.key) &&
        !incorrectGuesses.includes(e.key)
      ) {
        guessLetter(e.key.toLowerCase());
      }
    }
  });

  modalButton.addEventListener("click", initGame);

  initGame();
})();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function initGame() {
  modal.classList.add("modal_hidden");

  word.innerHTML = "";

  currentWord = words[getRandomInt(words.length)];
  letters = [];
  correctGuesses = [];

  incorrectGuesses = [];
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
    hangmanParts[incorrectGuesses.length].classList.remove(
      "hangman__part_invisible"
    );
    incorrectGuesses.push(letter);
    updateGuessesCount();
  } else {
    indexes.forEach((index) => {
      letters[index].textContent = letter;
      letters[index].classList.remove("interface__letter_hidden");
    });
    correctGuesses.push(letter);
  }

  if (incorrectGuesses.length === 6) endGame();
  else if (correctGuesses.length === new Set(currentWord.word.split("")).size)
    endGame(true);
}

function endGame(isWin = false) {
  if (isWin) {
    modalMessage.textContent = "You win";
  } else {
    modalMessage.textContent = "You lose";
  }
  modal.classList.remove("modal_hidden");
  secretWord.textContent = currentWord.word.toUpperCase();
}

function findKey(letter) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.textContent === letter) return key;
  }
}

function updateGuessesCount() {
  guessesPlaceholder.textContent = incorrectGuesses.length;
}
