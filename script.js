const boxes = document.getElementsByClassName("column");
const popupBtn = document.getElementById("popup-btn");

for (box = 0; box < boxes.length; box++) {
  boxes[box].addEventListener("mouseenter", (e) => {
    {
      e.target.classList.toggle("draw");
    }
  });
}

popupBtn.addEventListener("click", () => {
  const gridSize = parseInt(
    prompt("Please enter the length of your grid (100 boxes max)")
  );
  if (!gridSize || isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
    alert("Invalid length");
  }
});
