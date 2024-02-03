import { clickHandler, contextMenuHandler } from "./handlers.js";
import { createGrid, createHints } from "./render.js";

const WIDTH = 20;
const HEIGHT = 20;

const initialState = {
  activePixels: [],
  markedPixels: [],
  solution: [],
};

if (window.location.href.includes("#")) {
  initApp(window.location.href.split("#")[1]);
}

window.addEventListener("hashchange", () => {
  initApp(window.location.href.split("#")[1]);
});

function generateHintsData(arr, isVertical = false) {
  let result = [];
  let sortedArr = arr;
  let curLine = 1;

  if (!isVertical) {
    sortedArr = arr.sort((a, b) => {
      return +a.split(":")[1] - +b.split(":")[1];
    });
  }

  for (let i = 0; i < sortedArr.length; i++) {
    const curId = sortedArr[i];
    const [rowId, colId] = curId.split(":");
    const nextId = isVertical
      ? `${rowId}:${+colId + 1}`
      : `${+rowId + 1}:${colId}`;

    if (sortedArr.indexOf(nextId) !== -1) {
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

function initApp(id, state = initialState) {
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, JSON.stringify(state));
  }
  document.body.classList.add("page");
  const { activePixels, markedPixels } = JSON.parse(localStorage.getItem(id));

  const main = document.createElement("div");
  main.className = "main";
  const art = createGrid(WIDTH, HEIGHT, JSON.parse(localStorage.getItem(id)));
  main.innerHTML = art;

  main.addEventListener("click", ({ target }) => {
    clickHandler(target, id, activePixels);
  });
  main.addEventListener("contextmenu", (e) => {
    contextMenuHandler(e, id, markedPixels);
  });

  document.body.innerHTML = `
    <div class="map">
      <div class="art">
        ${art}
      </div>
    </div>
    ${createHints(
      WIDTH,
      generateHintsData(JSON.parse(localStorage.getItem(id)).activePixels)
    )}
    ${createHints(
      HEIGHT,
      generateHintsData(
        JSON.parse(localStorage.getItem(id)).activePixels,
        true
      ),
      true
    )}
  `;

  document.body.append(main);
}
