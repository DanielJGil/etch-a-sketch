const container = document.querySelector(".container");
let gridBox;

for (let i = 1; i <= 16 ** 2; i++) {
  gridBox = document.createElement("div");
  gridBox.classList.add("box");
  container.appendChild(gridBox);

  //   gridBox.addEventListener("mouseover", function () {
  //     gridBox.classList.toggle("color");
  //   });

  hoverColor();
}

function hoverColor() {
  let items = document.querySelectorAll(".box");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
}
