/* TODO: 

Figure out how to make it run faster


  */

const boxes = document.getElementsByClassName("column");
const popupBtn = document.getElementById("popup-btn");
let isPenDown = false;

window.onload = () => {
  createGrid(4);
};

const getGridSize = () => {
  const gridSize = parseInt(
    prompt("Please enter the length of your grid (100 boxes max)")
  );
  if (!gridSize || isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
    alert("Invalid length");
  }
  return gridSize;
};

const createGrid = (size) => {
  isPenDown = true;
  let attribute = `min-height: ${80 / size}vh; min-width: ${80 / size}vw;`;
  const grid = document.querySelector("section");
  grid.replaceChildren();
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.setAttribute("style", attribute);
      column.addEventListener("mouseenter", (e) => {
        if (isPenDown) {
          e.target.classList.toggle("draw");
        }
      });
      row.appendChild(column);
    }
    grid.appendChild(row);
  }
};

window.addEventListener("keydown", (e) => {
  if (isPenDown && e.code === "Space") {
    isPenDown = false;
    e.preventDefault();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    isPenDown = true;
    e.preventDefault();
  }
});

popupBtn.addEventListener("click", () => {
  createGrid(getGridSize());
});
