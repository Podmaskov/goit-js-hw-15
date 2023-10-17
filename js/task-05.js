function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const mainWrap = document.querySelector("#controls");
const boxesWrap = document.querySelector("#boxes");
const input = document.querySelector("input");

const createBoxes = (amount) => {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
  }
  boxesWrap.append(...boxes);
};

mainWrap.addEventListener("click", (event) => {
  if (!"create" in event.target.dataset || !"destroy" in event.target.dataset)
    return;

  if ("create" in event.target.dataset) {
    boxesWrap.innerHTML = "";
    createBoxes(Number(input.value));
  } else if ("destroy" in event.target.dataset) {
    boxesWrap.innerHTML = "";
    input.value = "";
  }
});
