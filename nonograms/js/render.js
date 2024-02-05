export function createGrid(width, height, state, isRenderingResult = false) {
  console.log(state);
  let rows = ``;
  for (let i = 0; i < height; i++) {
    rows += createRow(i, width, state, isRenderingResult);
  }
  return rows;
}

function createRow(
  rowId,
  width,
  { activePixels, markedPixels, result },
  isRenderingResult
) {
  console.log(activePixels, rowId);
  let row = "";
  for (let i = 0; i < width; i++) {
    if (isRenderingResult) {
      row += createPixel(`${rowId}:${i}`, result.includes(`${rowId}:${i}`));
    } else {
      row += createPixel(
        `${rowId}:${i}`,
        activePixels.includes(`${rowId}:${i}`),
        markedPixels.includes(`${rowId}:${i}`)
      );
    }
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

export function createHints(width, data, isVertical = false) {
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

export function renderGames(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    const game = data[i];
    result += `
      <li class="level">
        <a href="#${game.id}" class="link">
          <div class="image">
            ${createGrid(20, 20, game, true)}
          </div>
        </a>
      </li>
    `;
  }
  return result;
}
