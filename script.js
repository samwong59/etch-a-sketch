const container = document.querySelector("#container");
createGrid(16);

const button = document.querySelector("#changeGridButton");
button.addEventListener("click", changeGrid);

function createGrid(gridSize) {
  let squareDimension = 960 / gridSize;
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("unhovered");
    square.addEventListener("mouseover", toggleHover);
    square.addEventListener("mouseout", toggleHover);
    square.setAttribute("style", `height: ${squareDimension}px; width: ${squareDimension}px`);
    container.appendChild(square);
  }
}

function changeGrid() {
  let gridSize = prompt("Enter a new grid size");
  gridSize = Number(gridSize);
  if (gridSize < 2 || !gridSize) {
    alert("Please pick a valid number!");
    return;
  }
  if (gridSize > 100) {
    alert("100 is the maximum grid size. Grid size will be set to 100");
    gridSize = 100;
  }
  let childNodes = container.childNodes;
  childNodes = Array.from(childNodes);
  childNodes.forEach(child => container.removeChild(child));
  createGrid(gridSize);
}

function toggleHover(e) {
  e.target.classList.toggle("hovered");
  e.target.classList.toggle("unhovered");
}