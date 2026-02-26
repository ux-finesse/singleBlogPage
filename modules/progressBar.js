export default function progressOnScroll(progressBar) {
  if (progressBar) {
    // Update progress bar on scroll
    window.addEventListener("scroll", () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Calculate scroll percentage
      const scrollable = documentHeight - windowHeight;
      const scrolled = (scrollTop / scrollable) * 100;

      // Update progress bar width
      progressBar.style.width = scrolled + "%";
    });
  }
}
