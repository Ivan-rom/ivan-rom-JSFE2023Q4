import { saveToLocalStorage } from "./localStorage.js";
import { createGrid, renderTimer } from "./render.js";
import {
  initApp,
  sortIds,
  start,
  startTimer,
  updateRecords,
} from "./script.js";

let isTiming = false;
let timeInterval;
let isFailed = false;
let isSound = true;

export function clickHandler(
  target,
  id,
  { result, activePixels, time, difficult }
) {
  if (target.dataset.pixelId && !isFailed) {
    if (!isTiming) {
      timeInterval = startTimer(id, time);
      isTiming = true;
    }
    if (target.dataset.active === "false") {
      target.dataset.active = true;
      activePixels.push(target.dataset.pixelId);

      if (isSound) {
        const audio = new Audio("../assets/active.mp3");
        audio.play();
      }
    } else {
      target.dataset.active = false;
      activePixels.splice(activePixels.indexOf(target.dataset.pixelId), 1);

      if (isSound) {
        const audio = new Audio("../assets/activeClear.mp3");
        audio.play();
      }
    }
    target.classList.toggle("active");
    document
      .querySelector(`[data-pixel-id="${target.dataset.pixelId}"]`)
      .classList.toggle("active");
    saveToLocalStorage(id, sortIds(activePixels), "activePixels");
    if (
      JSON.stringify(sortIds(activePixels)) === JSON.stringify(sortIds(result))
    ) {
      if (isSound) {
        const audio = new Audio("../assets/win.mp3");
        audio.play();
      }

      isTiming = false;
      clearInterval(timeInterval);
      saveToLocalStorage(id, true, "isFinished");
      const finalTime = JSON.parse(localStorage.getItem(id)).time;
      updateRecords(id, finalTime);
      localStorage.removeItem(id);

      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <p class="message">Congratulations you won the game!!!</p>
        <p class="message">You solved nonogram in ${renderTimer(finalTime)}</p>
        <button class="exit">Home</button>
        <button class="random">Random game</button>
      `;
      document.body.appendChild(modal);
      modal.querySelector("button").addEventListener("click", () => {
        document.body.removeChild(modal);
      });
    }
  }
}

export function contextMenuHandler(e, id, { markedPixels, time }) {
  e.preventDefault();
  if (e.target.dataset.pixelId && !isFailed) {
    if (!isTiming) {
      timeInterval = startTimer(id, time);
      isTiming = true;
    }
    if (e.target.dataset.marked === "false") {
      e.target.dataset.marked = true;
      e.target.innerHTML = "&times;";
      markedPixels.push(e.target.dataset.pixelId);

      if (isSound) {
        const audio = new Audio("../assets/marked.mp3");
        audio.play();
      }
    } else {
      e.target.dataset.marked = false;
      e.target.innerHTML = "";
      markedPixels.splice(markedPixels.indexOf(e.target.dataset.pixelId), 1);

      if (isSound) {
        const audio = new Audio("../assets/markedClear.mp3");
        audio.play();
      }
    }
    saveToLocalStorage(id, markedPixels, "markedPixels");
  }
}

export function resetHandler(e) {
  if (e.target.classList.contains("reset")) {
    isFailed = false;
    clearInterval(timeInterval);
    isTiming = false;
    const id = window.location.href.split("#")[1];
    if (id === "last-game") {
      const newId = JSON.parse(localStorage.getItem(id)).id;
      window.location.hash = newId;
    }
    localStorage.removeItem(id);
    start();
  }
}

export function exitHandler(e) {
  if (e.target.classList.contains("exit")) {
    const id = window.location.href.split("#")[1];
    isFailed = false;
    clearInterval(timeInterval);
    isTiming = false;
    // const data = JSON.parse(localStorage.getItem(id));
    // data &&
    // data.markedPixels.length === 0 &&
    // data.activePixels.length === 0
    if (id !== "last-game") {
      localStorage.removeItem(id);
    }
    history.pushState(null, null, window.location.href.split("#")[0]);
    initApp();
  }
}

export function showHandler(e) {
  if (e.target.classList.contains("show")) {
    const id = window.location.href.split("#")[1];
    const main = document.querySelector(".main");
    const art = document.querySelector(".art");

    const saveButton = document.querySelector(".save");
    document.body.querySelector(".header").removeChild(saveButton);

    const game = JSON.parse(localStorage.getItem(id));
    const result = createGrid(game?.width || 5, game?.height || 5, game, true);
    main.innerHTML = result;
    art.innerHTML = result;
    clearInterval(timeInterval);
    isFailed = true;
    localStorage.removeItem(id);
  }
}

export function continueHandler(e) {
  if (e.target.classList.contains("continue")) {
    window.location.hash = "last-game";
    start();
  }
}

export function randomHandler(e) {
  if (e.target.classList.contains("random")) {
    fetch("../js/nonograms.json")
      .then((data) => data.json())
      .then((games) => games)
      .then((data) => {
        const randomId =
          data.games[Math.floor(Math.random() * data.games.length)].id;

        window.location.hash = randomId;
        start();
      });
  }
}

export function soundHandler(e) {
  if (e.target.classList.contains("sound")) {
    console.log(isSound);
    if (isSound) {
      isSound = false;
      e.target.textContent = "Turn sound on";
    } else {
      isSound = true;
      e.target.textContent = "Turn sound off";
    }
  }
}

export function saveHandler(e) {
  if (e.target.classList.contains("save")) {
    const id = window.location.href.split("#")[1];
    clearInterval(timeInterval);
    if (id !== "last-game") {
      const game = JSON.parse(localStorage.getItem(id));
      localStorage.setItem("last-game", JSON.stringify(game));
      localStorage.removeItem(id);
    }
    history.pushState(null, null, window.location.href.split("#")[0]);
    initApp();
  }
}
