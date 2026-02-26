import themeEngine from "./themeEngine.js";
import progressOnScroll from "./progressBar.js";

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Reading Progress Bar (only on post pages)
const progressBar = document.getElementById("readingProgress");

themeEngine(darkModeToggle);
progressOnScroll(progressBar);
