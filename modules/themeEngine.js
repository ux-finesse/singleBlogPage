export default function themeEngine(darkModeToggle) {
  const body = document.body;

  // Check for saved dark mode preference or default to light mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
