const formEl = document.querySelector(".login-form");

function checkSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === email.value.trim() || password.value === password.trim()) {
    return alert("Please fill in all fields");
  }

  const result = { email: email.value.trim(), password: password.value.trim() };
  console.log(result);
  event.currentTarget.reset();
}

formEl.addEventListener("submit", checkSubmit);