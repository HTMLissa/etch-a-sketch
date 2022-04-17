let sketchContainer = document.querySelector(".sketch-container");

// function to create a canvas of the size pixel
function createCanvas(pixel) {
  for (let i = 0; i < pixel * pixel; i++) {
    const square = document.createElement("div");
    square.classList.add("pixel");
    sketchContainer.appendChild(square);
  }
}

// Create a 16x16 canvas
createCanvas(16);
let pixels = document.querySelectorAll(".pixel");
addHoverEffect(pixels);

// function to remove canvas
function removeCanvas() {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
}

// Add hover effect to squares
function addHoverEffect(pixelArr) {
  pixelArr.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "red";
    });
  });
}

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
  if (newGridSize > 100 || newGridSize < 1) {
    alert("Try a number between 1 and 100 ;)");
  } else {
    sketchContainer.style.setProperty(
      "grid-template-columns",
      `repeat(${newGridSize}, 1fr)`
    );
    sketchContainer.style.setProperty(
      "grid-template-rows",
      `repeat(${newGridSize}, 1fr)`
    );
    removeCanvas();
    createCanvas(newGridSize);
    pixels = document.querySelectorAll(".pixel");
    addHoverEffect(pixels);
  }
});
