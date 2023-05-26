const container = document.querySelector(".container");
const slider = document.getElementById("slider");
let squares = slider.value;

//INITIAL SETTINGS
for (let i = 1; i <= squares ** 2; i++) {
  let gridBox = document.createElement("div");
  gridBox.classList.add("box");
  container.appendChild(gridBox);

  blackColor();
}

slider.addEventListener("change", () => {
  let squares = slider.value;

  container.innerHTML = "";

  container.style.gridTemplateRows = `repeat(${squares}, 1fr )`;
  container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

  for (let i = 1; i <= squares ** 2; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("box");
    container.appendChild(gridBox);

    blackColor();
  }
});

// FUNCTION TO MAKE SQUARES BLACK
function blackColor() {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "rgb(0, 0, 0)";
    });
  });
}

// BLACK BUTTON
const black = document.querySelector(".black");
black.addEventListener("click", () => {
  blackColor();

  slider.addEventListener("change", () => {
    let squares = slider.value;

    container.innerHTML = "";

    container.style.gridTemplateRows = `repeat(${squares}, 1fr )`;
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 1; i <= squares ** 2; i++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("box");
      container.appendChild(gridBox);

      blackColor();
    }
  });
});

// FUNCTION TO MAKE SQUARES RAINBOW COLOURED
function rainbowColor() {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let a = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let c = Math.floor(Math.random() * 255);
      item.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    });
  });
}

// RAINBOW BUTTON
const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {
  rainbowColor();

  slider.addEventListener("change", () => {
    let squares = slider.value;

    container.innerHTML = "";

    container.style.gridTemplateRows = `repeat(${squares}, 1fr )`;
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 1; i <= squares ** 2; i++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("box");
      container.appendChild(gridBox);

      rainbowColor();
    }
  });
});

// CLEAR BUTTON
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.style.backgroundColor = "rgb(255, 255, 255)";
  });
});

// ERASER BUTTON
const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "rgb(255, 255, 255)";
    });
  });
});
