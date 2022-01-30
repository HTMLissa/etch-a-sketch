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
