const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginMessage = document.getElementById("loginMessage");
const yearEl = document.getElementById("year");

function setYear() {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

function clearErrors() {
  emailError.textContent = "";
  passwordError.textContent = "";
  loginMessage.textContent = "";
}

function validateForm() {
  clearErrors();
  let valid = true;

  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailInput.validity.valid) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (!passwordInput.value) {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  return valid;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    loginMessage.textContent = "Please correct the errors above.";
    loginMessage.style.color = "#dc2626";
    return;
  }

  loginMessage.textContent = "Logged in successfully! (demo only)";
  loginMessage.style.color = "#16a34a";

  // Simulate a delay before redirecting back to the sample page
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1300);
});

setYear();
