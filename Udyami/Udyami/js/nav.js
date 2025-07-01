const burger = document.getElementById("burger");
const dropdown = document.getElementById("dropdown");

burger.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Apply saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});
