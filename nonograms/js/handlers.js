import { saveToLocalStorage } from "./localStorage.js";
import { createGrid } from "./render.js";
import { initApp, sortIds, start, updateRecords } from "./script.js";

let isTiming = false;
let timeInterval;
let isFailed = false;
let isSound = true;

export function clickHandler(
  target,
  startTimer,
  { id, result, activePixels, time, difficult }
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
      updateRecords(id, finalTime, result, difficult);
      localStorage.removeItem(id);

      const modal = document.createElement("div");
      modal.className = "modal";
      modal.innerHTML = `
        <p class="message">Congratulations you won the game!!!</p>
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

export function contextMenuHandler(e, startTimer, { id, markedPixels, time }) {
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
  if (e.target.className === "reset") {
    isFailed = false;
    clearInterval(timeInterval);
    isTiming = false;
    const id = window.location.href.split("#")[1];
    localStorage.removeItem(id);
    start();
  }
}

export function exitHandler(e) {
  if (e.target.className === "exit") {
    isFailed = false;
    e.preventDefault();
    clearInterval(timeInterval);
    isTiming = false;
    const data = JSON.parse(
      localStorage.getItem(window.location.href.split("#")[1])
    );
    if (
      data &&
      data.markedPixels.length === 0 &&
      data.activePixels.length === 0
    ) {
      localStorage.removeItem(window.location.href.split("#")[1]);
    }
    history.pushState(null, null, window.location.href.split("#")[0]);
    initApp();
  }
}
export function showHandler(e) {
  if (e.target.className === "show") {
    const main = document.querySelector(".main");
    const art = document.querySelector(".art");
    const game = JSON.parse(
      localStorage.getItem(window.location.href.split("#")[1])
    );
    const result = createGrid(game?.width || 5, game?.height || 5, game, true);
    main.innerHTML = result;
    art.innerHTML = result;
    clearInterval(timeInterval);
    isFailed = true;
    localStorage.removeItem(window.location.href.split("#")[1]);
  }
}

export function continueHandler(e) {
  if (e.target.className === "continue") {
    start(true);
  }
}

export function randomHandler(e) {
  if (e.target.className === "random") {
    fetch("../js/nonograms.json")
      .then((data) => data.json())
      .then((games) => games)
      .then((data) => {
        const randomId =
          data.games[Math.floor(Math.random() * data.games.length)].id;

        window.location.hash = randomId;
        initApp();
      });
  }
}
export function soundHandler(e) {
  if (e.target.className === "sound") {
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
