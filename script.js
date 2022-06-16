let redBtn = document.querySelector("#red");
let blueBtn = document.querySelector("#blue");
let blackBtn = document.querySelector("#black");

let bike = document.querySelector("#bike");

const changeBackgroundImage = (color) => {
  bike.style.backgroundImage = `url(./assets/${color}.png)`;
};

redBtn.addEventListener("click", () => {
  changeBackgroundImage("red");
});
blueBtn.addEventListener("click", () => {
  changeBackgroundImage("blue");
});
blackBtn.addEventListener("click", () => {
  changeBackgroundImage("black");
});
