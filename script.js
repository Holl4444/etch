/* TODO: 

Figure out how to make it run faster

Consider making space reverse the toggle instead.
And a clear grid option. Mouse to add space remove.


  */

const boxes = document.getElementsByClassName("column");
const popupBtn = document.getElementById("popup-btn");
let isPenDown = false;

window.onload = () => {
  createGrid(4);
};

// If the entry is cancelled cancel
const getGridSize = () => {
  const gridSize = prompt(
    "Please enter the length of your grid (100 boxes max)"
  );
  if (gridSize == null) {
    return;
  } else if (!gridSize || isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
    alert("Invalid length");
    getGridSize();
  }
  return gridSize;
};

const createGrid = (size) => {
  isPenDown = true;
  let attribute = `min-height: ${150 / size}rem; min-width: ${150 / size}rem;`;
  const grid = document.querySelector("section");
  // If we have a valid input for size
  if (size) {
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
