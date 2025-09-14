// PART 1: Event Handling - Counter
let counter = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

counterBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = `Counter: ${counter}`;
});

// PART 2: Interactive Elements - Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// PART 2: Interactive Elements - FAQ Collapsible
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// PART 3: Form Validation
const form = document.getElementById("signupForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  const formMessage = document.getElementById("formMessage");
  if (isValid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
