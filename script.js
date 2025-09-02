// Event Handling: Show Message on Button Click
document.getElementById("showMessageBtn").addEventListener("click", () => {
  document.getElementById("message").classList.toggle("hidden");
});

// Light/Dark Mode Toggle
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const feedback = document.getElementById("formFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || password === "") {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Enter a valid email address.";
    feedback.style.color = "red";
  } else if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Signup successful!";
    feedback.style.color = "green";
  }
});
    
