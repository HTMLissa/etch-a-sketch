let sketchContainer = document.querySelector(".sketch-container");

// Create a 16x16 grid of square divs
for (let i = 0; i < 272; i++) {
  const square = document.createElement("div");
  square.classList.add("pixel");
  if (i % 17 === 0) {
    square.classList.add("nth-child");
  }
  sketchContainer.appendChild(square);
}

// Add hover effect to squares
const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "red";
  });
});

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid.

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
});
