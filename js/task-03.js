const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formDataObject = {};
  let showErrorAlert = false;

  formData.forEach((value, key) => {
    if (!value.trim()) {
      showErrorAlert = true;
    }
    formDataObject[key] = value;
  });

  if (showErrorAlert) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(formDataObject);
    event.target.reset();
  }
});
