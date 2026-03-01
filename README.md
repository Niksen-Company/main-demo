# Welcome to your organization's demo respository
This code repository (or "repo") is designed to demonstrate the best GitHub has to offer with the least amount of noise.

The repo includes an `index.html` file (so it can render a web page), two GitHub Actions workflows, and a CSS stylesheet dependency.

## To-do List Demo

The main page is a to-do list application built with plain HTML, CSS, and JavaScript. Features include:

- Add new tasks via the input box and "Add" button
- Mark tasks as done/undone
- Delete tasks
- Persistence using `localStorage` so your list survives page reloads
- **Progressive Web App (PWA)** support — install the app on iOS or Android from your browser

### Installing on iOS / Android

Because the site is a PWA, you can add it to your home screen:

- **iOS (Safari):** Open `https://www.howtoniksen.com` → tap the Share button → "Add to Home Screen"
- **Android (Chrome):** Open `https://www.howtoniksen.com` → tap the menu (⋮) → "Add to Home Screen" or "Install App"

Once installed it works offline and feels like a native app.

### Running locally

```bash
npx serve .
```

Then open `http://localhost:3000` in your browser.
