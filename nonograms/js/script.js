const WIDTH = 20;
const HEIGHT = 20;

const initialState = {
  activePixels: [],
  markedPixels: [],
  solution: [],
};

let id = window.location.href.split("#")[1];
initApp();

const { activePixels, markedPixels } = JSON.parse(localStorage.getItem(id));

window.addEventListener("hashchange", () => {
  id = window.location.href.split("#")[1];
  initApp();
});

function createGrid(width, height, state) {
  let rows = ``;
  for (let i = 0; i < height; i++) {
    rows += createRow(i, width, state);
  }
  return rows;
}

function createRow(rowId, width, { activePixels, markedPixels }) {
  let row = "";
  for (let i = 0; i < width; i++) {
    row += createPixel(
      `${rowId}:${i}`,
      activePixels.includes(`${rowId}:${i}`),
      markedPixels.includes(`${rowId}:${i}`)
    );
  }
  return `
    <div class="row">
      ${row}
    </div>
  `;
}

function createPixel(id, isActive, isMarked) {
  return `
    <div
     data-pixel-id="${id}"
     data-active="${isActive}"
     data-marked="${isMarked}"
     class="pixel ${isActive ? "active" : ""}"
    >
      ${isMarked ? "&times;" : ""}
    </div>
  `;
}

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

function createHints(width, data, isVertical = false) {
  const emptyData = {
    lines: [],
  };
  let groups = "";
  for (let i = 0; i < width; i++) {
    emptyData.index = i;
    const group = data.find((el) => el.index === i);
    groups += group
      ? createGroup(group, isVertical)
      : createGroup(emptyData, isVertical);
  }
  return `
    <div class="hints ${isVertical ? "rows" : "columns"}">
      ${groups}
    </div>
  `;
}

function createGroup(group, isVertical) {
  let lines = "";
  for (let i = 0; i < group.lines.length; i++) {
    const element = group.lines[i];
    lines += createLine(element);
  }
  return `
    <div
      class="group ${isVertical ? "row" : "column"}"
      data-line-id="${group.index}"
      >
      <div class="wrapper">
        ${lines}
      </div>
    </div>
  `;
}

function createLine(data) {
  return `
    <div class="line">${data}</div>
  `;
}

function initApp(initialState) {
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, JSON.stringify(initialState));
  }
  document.body.classList.add("page");

  const main = document.createElement("div");
  main.className = "main";
  const art = createGrid(WIDTH, HEIGHT, JSON.parse(localStorage.getItem(id)));
  main.innerHTML = art;

  main.addEventListener("click", clickHandler);
  main.addEventListener("contextmenu", contextMenuHandler);

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

function clickHandler({ target }) {
  if (target.dataset.pixelId) {
    if (target.dataset.active === "false") {
      target.dataset.active = true;
      activePixels.push(target.dataset.pixelId);
    } else {
      target.dataset.active = false;
      activePixels.splice(activePixels.indexOf(target.dataset.pixelId), 1);
    }
    target.classList.toggle("active");
    document
      .querySelector(`[data-pixel-id="${target.dataset.pixelId}"]`)
      .classList.toggle("active");
    saveToLocalStorage(id, sortIds(activePixels), "activePixels");
  }
}

function contextMenuHandler(e) {
  e.preventDefault();
  if (e.target.dataset.pixelId) {
    if (e.target.dataset.marked === "false") {
      e.target.dataset.marked = true;
      e.target.innerHTML = "&times;";
      markedPixels.push(e.target.dataset.pixelId);
    } else {
      e.target.dataset.marked = false;
      e.target.innerHTML = "";
      markedPixels.splice(markedPixels.indexOf(e.target.dataset.pixelId), 1);
    }
    saveToLocalStorage(id, markedPixels, "markedPixels");
  }
}

function saveToLocalStorage(id, data, key) {
  const prevData = JSON.parse(localStorage.getItem(id));
  const newData = JSON.stringify({ ...prevData, [key]: data });
  localStorage.setItem(id, newData);
}

function sortIds(arr) {
  return arr.sort((a, b) => {
    const [aRowId, aColId] = a.split(":");
    const [bRowId, bColId] = b.split(":");

    let sum = (+aRowId - +bRowId) * 10 + (+aColId - +bColId);
    return sum;
  });
}
