import {
  clickHandler,
  contextMenuHandler,
  continueHandler,
  exitHandler,
  resetHandler,
} from "./handlers.js";
import { createGrid, createHints, renderGames } from "./render.js";

const WIDTH = 20;
const HEIGHT = 20;

export const initialState = {
  activePixels: [],
  markedPixels: [],
  time: 300000,
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
          !JSON.parse(localStorage.getItem(id)).isFinished
        ) {
          initModal();
        } else {
          const { result } = data.games.find((el) => el.id == id);
          initGame(id, result);
        }
      });
  } else {
    initApp();
  }
}

window.addEventListener("hashchange", () => {
  start();
});

window.addEventListener("click", (e) => {
  if (e.target.className === "exit") {
    exitHandler(e);
  } else if (e.target.className === "reset") {
    resetHandler(e);
  }
});

window.addEventListener("click", continueHandler);

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

export function initGame(id, result) {
  if (!localStorage.getItem(id)) {
    const data = { ...initialState, result };
    localStorage.setItem(id, JSON.stringify(data));
  }
  document.body.classList.add("page");
  const localData = JSON.parse(localStorage.getItem(id));
  const { activePixels, markedPixels } = localData;

  const main = document.createElement("div");
  main.className = "main";
  const art = createGrid(WIDTH, HEIGHT, localData);
  main.innerHTML = art;

  main.addEventListener("click", ({ target }) => {
    clickHandler(target, id, activePixels, result);
  });

  main.addEventListener("contextmenu", (e) => {
    contextMenuHandler(e, id, markedPixels);
  });

  const horizontalHints = createHints(
    WIDTH,
    generateHintsData([...localData.result])
  );
  const verticalHints = createHints(
    HEIGHT,
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
  document.body.innerHTML = `
  <div class="levels">
    <h2 class="title">Choose level</h2>
    <ul class="groups">
      <li class="easy">
        <h3 class="title">Easy</h3>
        <ul class="group">
          ${renderGames(easyGames)}
        </ul>
      </li>
    </ul>
  </div>
  `;
}

function initModal() {
  window.addEventListener("click", continueHandler);
  window.addEventListener("click", resetHandler);
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
