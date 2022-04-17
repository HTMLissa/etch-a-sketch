let sketchContainer = document.querySelector(".sketch-container");

// Create a 16x16 grid of square divs
// for (let i = 0; i < 272; i++) {
//   const square = document.createElement("div");
//   square.classList.add("pixel");
//   if (i % 17 === 0) {
//     square.classList.add("nth-child");
//   }
//   sketchContainer.appendChild(square);
// }

// function to create canvas based on user input
function createCanvas(pixel) {
  for (let i = 0; i < pixel * pixel + pixel; i++) {
    const square = document.createElement("div");
    square.classList.add("pixel");
    if (i % (pixel + 1) === 0) {
      square.classList.add("nth-child");
    }
    sketchContainer.appendChild(square);
  }
}

// function to remove canvas
function removeCanvas() {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
}

// Create a 16x16 grid of square divs
createCanvas(16);

// Add hover effect to squares
const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "red";
  });
});

// Add a button to the top of the screen which will clear the current grid
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
});

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid.

const resizeBtn = document.querySelector(".resize-grid-btn");
let newGridSize;
resizeBtn.addEventListener("click", () => {
  newGridSize = parseInt(prompt("Enter a number between 1 - 100 px"));
  if (newGridSize > 100) {
    alert("Try a smaller canvas ;)");
  } else {
    removeCanvas();
    createCanvas(newGridSize);
  }
});
