import {
  clickHandler,
  contextMenuHandler,
  continueHandler,
  exitHandler,
  resetHandler,
} from "./handlers.js";
import { saveToLocalStorage } from "./localStorage.js";
import { createGrid, createHints, renderGames } from "./render.js";

const WIDTH = 5;
const HEIGHT = 5;

export const initialState = {
  activePixels: [],
  markedPixels: [],
  time: 300000,
  isFinished: false,
};

start();
initRecords();

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
          !JSON.parse(localStorage.getItem(id)).isFinished
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
}

window.addEventListener("hashchange", () => {
  start();
});

window.addEventListener("click", continueHandler);
window.addEventListener("click", resetHandler);

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
  console.log(localData);
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

async function initApp() {
  const { games } = await fetch("../js/nonograms.json")
    .then((data) => data.json())
    .then((games) => games);
  const easyGames = games.filter((game) => game.difficult === "easy");

  document.body.className = "home";
  document.body.innerHTML = `
  <h1 class="title">Nonograms</h1>
  <div class="table">
    <h2 class="title">Last wins</h2>
    <ol class="records">
      <li class="record">
        <div class="place">3</div>
        <div class="image"></div>
        <div class="difficult">medium</div>
        <div class="time">00:00</div>
      </li>
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
  let timeLeft = time;
  const timeInterval = setInterval(() => {
    timeLeft -= 1000;
    console.log(timeLeft);
    saveToLocalStorage(id, timeLeft, "time");
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  return timeInterval;
}

function initRecords(records = []) {
  localStorage.setItem("records", JSON.stringify(records));
}

export function updateRecords(id, time) {
  const prev = JSON.parse(localStorage.getItem("records"));
  console.log(prev);
  prev.shift();
  prev.push({ [id]: time });

  initRecords(prev);
}
