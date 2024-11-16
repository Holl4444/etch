const boxes = document.getElementsByClassName("column");
const popupBtn = document.getElementById("popup-btn");

for (box = 0; box < boxes.length; box++) {
  boxes[box].addEventListener("mouseenter", (e) => {
    {
      e.target.classList.toggle("draw");
    }
  });
}

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
  const grid = document.querySelector("section");
  grid.replaceChildren();
  //grid.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
    grid.appendChild(row);
  }
};

/* delete initial grid


 */

popupBtn.addEventListener("click", () => {
  createGrid(getGridSize());
});
