const form = document.getElementById("nameForm");
const input = document.getElementById("username");
const greeting = document.getElementById("greeting");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = input.value.trim();

  if (name) {
    greeting.textContent = `👋 Welcome, ${name}! You're doing great.`;
    greeting.classList.remove("hidden");
  } else {
    greeting.textContent = "";
    greeting.classList.add("hidden");
    alert("Please enter a valid name.");
  }
});
