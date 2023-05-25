const container = document.querySelector(".container");

for (let i = 1; i <= 16 ** 2; i++) {
  let gridBox = document.createElement("div");
  gridBox.classList.add("box");
  container.appendChild(gridBox);

  hoverColor();
}

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
