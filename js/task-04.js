function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  const backgroundColor = getRandomHexColor();
  body.style.backgroundColor = backgroundColor;

  color.textContent = backgroundColor;
});
