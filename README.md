# My Blog

A lightweight, responsive blog built with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies.

## Features

- **Dark mode toggle** with `localStorage` persistence across sessions
- **Reading progress bar** on post pages that tracks scroll position
- **Responsive grid layout** that adapts from 3 columns to 1 on mobile
- **CSS custom properties** for seamless light/dark theming
- Google Fonts: Space Grotesk (headings) + Fustat (body)

## Project Structure

```
├── index.html          # Blog homepage with post card grid
├── post.html           # Single post page
├── styles.css          # All styles with CSS custom properties for theming
├── modules/
│   ├── main.js         # Entry point — initialises all modules
│   ├── themeEngine.js  # Dark mode toggle + localStorage
│   └── progressBar.js  # Scroll-based reading progress bar
```

## Getting Started

Because the JS uses ES modules (`import`/`export`), the files need to be served over HTTP rather than opened directly in a browser.

**Option 1 — VS Code Live Server**
Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click `index.html`, and select *Open with Live Server*.

**Option 2 — Node.js**
```bash
npx serve .
```

Then open `http://localhost:3000` in your browser.

## How the Modules Work

| Module | What it does |
|---|---|
| `themeEngine.js` | Reads saved theme from `localStorage` on load, then listens for toggle button clicks to switch between light and dark mode |
| `progressBar.js` | Listens for `scroll` events and updates the progress bar width as a percentage of how far down the page the user has scrolled |
| `main.js` | Grabs the DOM elements (`darkModeToggle`, `body`, `readingProgress`) and passes them into each module as arguments |

## Notes

- The reading progress bar only appears on `post.html` since `index.html` has no `#readingProgress` element. `progressBar.js` handles this gracefully with a `null` check.
- Dark mode preference is saved to `localStorage` under the key `"theme"` (`"dark"` or `"light"`).
