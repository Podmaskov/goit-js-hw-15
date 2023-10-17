const input = document.querySelector("#validation-input");

let numberSymbols = 0;

input.addEventListener("input", ({ target }) => {
  numberSymbols = target.value.trim().length;
});

input.addEventListener("blur", ({ target }) => {
  const { length: expectedNumberSymbols } = target.dataset;

  if (Number(expectedNumberSymbols) === numberSymbols) {
    target.classList.remove("invalid");
    target.classList.add("valid");
  } else {
    target.classList.remove("valid");
    target.classList.add("invalid");
  }
});
