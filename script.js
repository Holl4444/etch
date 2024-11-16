const boxes = document.getElementsByClassName("column");

for (box = 0; box < boxes.length; box++) {
  boxes[box].addEventListener("mouseenter", (e) => {
    {
      e.target.classList.toggle("draw");
    }
  });
}
