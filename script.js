document.addEventListener("DOMContentLoaded", () => {

  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  const toggleBtn = document.getElementById("themeToggle");

  // MENU TOGGLE
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // THEME TOGGLE
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

});