import { saveToLocalStorage } from "./localStorage.js";

export function clickHandler(target, id, activePixels) {
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

export function contextMenuHandler(e, id, markedPixels) {
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

function sortIds(arr) {
  return arr.sort((a, b) => {
    const [aRowId, aColId] = a.split(":");
    const [bRowId, bColId] = b.split(":");

    let sum = (+aRowId - +bRowId) * 10 + (+aColId - +bColId);
    return sum;
  });
}

export function resetHandler() {}
export function exitHandler() {}
export function saveHandler() {}
