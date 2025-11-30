function toggleMenu() {
  const menu = document.getElementById("settingsMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
};
