import {
  clickHandler,
  contextMenuHandler,
  continueHandler,
  exitHandler,
  resetHandler,
} from "./handlers.js";
import { saveToLocalStorage } from "./localStorage.js";
import {
  createGrid,
  createHints,
  renderGames,
  renderRecords,
  renderTimer,
} from "./render.js";

const WIDTH = 5;
const HEIGHT = 5;

export const initialState = {
  activePixels: [],
  markedPixels: [],
  time: 0,
  isFinished: false,
};

start();

export function start(isContinuing = false) {
  if (window.location.href.includes("#")) {
    fetch("../js/nonograms.json")
      .then((data) => data.json())
      .then((games) => games)
      .then((data) => {
        const id = window.location.href.split("#")[1];
        if (
          !isContinuing &&
          localStorage.getItem(id) &&
          !JSON.parse(localStorage.getItem(id)).isFinished &&
          JSON.parse(localStorage.getItem(id)).time !=
            JSON.parse(localStorage.getItem(id)).timeLeft
        ) {
          initModal();
        } else {
          const game = data.games.find((el) => el.id == id);
          initGame(id, game);
        }
      });
  } else {
    initApp();
  }
  if (!localStorage.getItem("records")) {
    localStorage.setItem("records", "[]");
  }
}

window.addEventListener("hashchange", () => {
  start();
});

window.addEventListener("click", continueHandler);
window.addEventListener("click", resetHandler);
window.addEventListener("click", exitHandler);

function generateHintsData(arr, isVertical = false) {
  let result = [];
  let sortedArr = [...sortIds([...arr])];
  let curLine = 1;

  if (!isVertical) {
    sortedArr = [
      ...arr.sort((a, b) => {
        return +a.split(":")[1] - +b.split(":")[1];
      }),
    ];
  }

  for (let i = 0; i < sortedArr.length; i++) {
    const curId = sortedArr[i];
    const [rowId, colId] = curId.split(":");
    const nextId = isVertical
      ? `${rowId}:${+colId + 1}`
      : `${+rowId + 1}:${colId}`;

    if (sortedArr[i + 1] === nextId) {
      curLine++;
    } else {
      const index = isVertical ? +rowId : +colId;
      const obj = result.find((el) => el.index === index);
      if (obj) {
        obj.lines.push(curLine);
      } else {
        const newObj = {
          index: index,
          lines: [curLine],
        };
        result.push(newObj);
      }
      curLine = 1;
    }
  }
  return result;
}

export function initGame(id, game) {
  if (!localStorage.getItem(id)) {
    const data = { ...initialState, ...game };
    localStorage.setItem(id, JSON.stringify(data));
  }
  document.body.className = "page";
  const localData = JSON.parse(localStorage.getItem(id));

  const main = document.createElement("div");
  main.className = "main";
  const art = createGrid(
    localData?.width || WIDTH,
    localData?.height || HEIGHT,
    localData
  );
  main.innerHTML = art;

  main.addEventListener("click", ({ target }) => {
    clickHandler(target, startTimer, localData);
  });

  main.addEventListener("contextmenu", (e) => {
    contextMenuHandler(e, localData);
  });

  const horizontalHints = createHints(
    localData?.width || WIDTH,
    generateHintsData([...localData.result])
  );
  const verticalHints = createHints(
    localData?.height || HEIGHT,
    generateHintsData([...localData.result], true),
    true
  );

  document.body.innerHTML = `
    <div class="header">
      <a href="" class="exit">Exit</a>
      <button class="reset">Reset level</button>
    </div>
    <div class="map">
      <div class="art">
        ${art}
      </div>
    </div>
    ${horizontalHints}
    ${verticalHints}
  `;

  document.body.append(main);
}

export async function initApp() {
  const { games } = await fetch("../js/nonograms.json")
    .then((data) => data.json())
    .then((games) => games);
  const easyGames = games.filter((game) => game.difficult === "easy");
  const recordsData =
    localStorage.getItem("records") &&
    JSON.parse(localStorage.getItem("records"));

  document.body.className = "home";
  document.body.innerHTML = `
  <h1 class="title">Nonograms</h1>
  <div class="table">
    <h2 class="title">Last wins</h2>
    <ol class="records">
      ${renderRecords(recordsData)}
    </ol>
  </div>
  <div class="levels">
    <h2 class="title">Choose level</h2>
    <ul class="groups">
      <li class="easy">
        <h3 class="title">Easy</h3>
        <ul class="list">
          ${renderGames(easyGames)}
        </ul>
      </li>
    </ul>
  </div>
  `;
}

function initModal() {
  document.body.innerHTML = `
    <div class="modal">
      Would you like to continue your game or reset?
      <button class="continue">Continue</button>
      <button class="reset">Reset</button>
    </div>
  `;
}

export function sortIds(arr) {
  return arr.sort((a, b) => {
    const [aRowId, aColId] = a.split(":");
    const [bRowId, bColId] = b.split(":");

    return +aRowId - +bRowId || +aColId - +bColId;
  });
}

function startTimer(id, time) {
  const header = document.querySelector(".header");
  const timer = document.createElement("div");
  timer.className = "timer";
  timer.textContent = renderTimer(time);
  header.append(timer);
  const timeInterval = setInterval(() => {
    time += 1;
    timer.textContent = renderTimer(time);
    saveToLocalStorage(id, time, "time");
  }, 1000);
  return timeInterval;
}

export async function updateRecords(id, time) {
  const prev = JSON.parse(localStorage.getItem("records"));
  if (prev.length === 5) {
    prev.shift();
  }
  const { games } = await fetch("../js/nonograms.json")
    .then((data) => data.json())
    .then((games) => games);
  const newRecord = games.find((game) => game.id === id);
  prev.push({ ...newRecord, time });
  localStorage.setItem("records", JSON.stringify(prev));
}
