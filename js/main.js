 // 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon
    toggleBtn.textContent =
      document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    // Save preference
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }
});


