const columns = [
  {
    index: 0,
    lines: [1, 2, 3, 4],
  },
  {
    index: 1,
    lines: [1, 2, 3, 4],
  },
  {
    index: 2,
    lines: [1, 2, 3, 4],
  },
  {
    index: 3,
    lines: [1, 2, 3, 4],
  },

  {
    index: 5,
    lines: [1, 2, 3, 4],
  },
];

const WIDTH = 20;
const HEIGHT = 20;

initApp();

function createGrid(width, height) {
  let rows = ``;
  for (let i = 0; i < height; i++) {
    rows += createRow(i, width);
  }
  return rows;
}

function createRow(rowId, width) {
  let row = "";
  for (let i = 0; i < width; i++) {
    row += createPixel(`${rowId}:${i}`);
  }
  return `
    <div class="row">
      ${row}
    </div>
  `;
}

function createPixel(id) {
  return `
    <div
     data-pixel-id="${id}"
     data-active="false"
     data-marked="false"
     class="pixel"
    >
    </div>
  `;
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

function initApp() {
  document.body.classList.add("page");

  const main = document.createElement("div");
  main.className = "main";
  main.innerHTML = createGrid(WIDTH, HEIGHT);

  main.addEventListener("click", (e) => {
    if (e.target.dataset.pixelId) {
      if (e.target.dataset.active === "false") {
        e.target.dataset.active = true;
      } else {
        e.target.dataset.active = false;
      }
      e.target.classList.toggle("active");
      document
        .querySelector(`[data-pixel-id="${e.target.dataset.pixelId}"]`)
        .classList.toggle("active");
    }
  });

  main.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (e.target.dataset.pixelId) {
      if (e.target.dataset.marked === "false") {
        e.target.dataset.marked = true;
        e.target.innerHTML = "&times;";
      } else {
        e.target.dataset.marked = false;
        e.target.innerHTML = "";
      }
    }
  });

  document.body.innerHTML = `
    <div class="map">
      <div class="art">
        ${createGrid(WIDTH, HEIGHT)}
      </div>
    </div>
    ${createHints(WIDTH, columns)}
    ${createHints(HEIGHT, columns, true)}
  `;

  document.body.append(main);
}
