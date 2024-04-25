export function saveToLocalStorage(id, data, key) {
  const prevData = JSON.parse(localStorage.getItem(id));
  const newData = JSON.stringify({ ...prevData, [key]: data });
  localStorage.setItem(id, newData);
}
