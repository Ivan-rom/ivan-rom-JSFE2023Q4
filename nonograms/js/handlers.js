import { saveToLocalStorage } from "./localStorage.js";
import { sortIds, start } from "./script.js";

export function clickHandler(target, id, activePixels, result) {
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
    if (
      JSON.stringify(sortIds(activePixels)) === JSON.stringify(sortIds(result))
    ) {
      console.log("WINNNN");
    }
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

export function resetHandler(e) {
  if (e.target.className === "reset") {
    console.log("reset");
    const id = window.location.href.split("#")[1];

    localStorage.removeItem(id);

    start();
    window.removeEventListener("click", resetHandler);
  }
}

export function exitHandler(e) {
  e.preventDefault();
}
export function saveHandler() {}

export function continueHandler(e) {
  if (e.target.className === "continue") {
    start(true);
    window.removeEventListener("click", continueHandler);
  }
}
