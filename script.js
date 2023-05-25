const container = document.querySelector(".container");
const slider = document.getElementById("slider");
let squares = slider.value;

for (let i = 1; i <= squares ** 2; i++) {
  let gridBox = document.createElement("div");
  gridBox.classList.add("box");
  container.appendChild(gridBox);

  hoverColor();
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

    hoverColor();
  }
});

// slider.value = 16;
// console.log(slider);

function hoverColor() {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("color");
    });
  });
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.classList.remove("color");
  });
});

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.toggle("color");
    });
  });
});
