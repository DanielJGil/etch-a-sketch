const container = document.querySelector(".container");
let gridBox;

for (let i = 1; i <= 16 ** 2; i++) {
  gridBox = document.createElement("div");
  container.appendChild(gridBox);
}

// gridBox.addEventListener("mouseover", function () {
//   gridBox.classList.toggle("color");
// });
