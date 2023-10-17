const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", ({ target }) => {
  text.style.fontSize = `${target.value}px`;
});
