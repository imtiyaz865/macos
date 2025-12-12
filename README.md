# macOS-like UI (React + Vite) 🍎🖥️

A small, playful desktop-style UI built with React + Vite that mimics a macOS shell: dock, navbar, window controls and a few simple apps. Perfect as a UI playground, teaching example, or starting point for a lightweight desktop-like web app. (Yes — it looks like an OS, but it won't make your tea. ☕️)

## Features ✨
- Desktop-style layout: Dock, Navbar, resizable windows
- Reusable components: Clock, Dock, Navbar, Welcome, Home, WindowControls
- Window behavior via a WindowWrapper HOC
- Lightweight client-side store for window/location state
- Simple plain-CSS styling for easy customization

## Tech stack 🧰
- React (JSX)
- Vite (dev server + bundling)
- Plain CSS
- Node.js & npm

## Installation ⚙️
1. Clone the repo:
   ```powershell
   git clone <repo-url>
   cd macos
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the dev server:
   ```powershell
   npm run dev
   ```
4. Open the URL printed by Vite (usually http://localhost:5173).

## Usage 🚀
- Entry point: `src/main.jsx` — mounts `src/App.jsx`.
- Edit UI components in `src/components/` and windows in `src/windows/`.
- Modify state logic in `src/store/`.
- Hot reload via Vite for fast feedback.

Tip: If something breaks, blame the CSS first. It’s usually true. 😅

## Folder structure 📁
- .idea/ — IDE settings
- public/
  - files/
    - icons/
    - images/
- src/
  - App.jsx — main app component
  - main.jsx — app entry / mount
  - index.css — global styles
  - components/
    - Clock.jsx
    - Dock.jsx
    - Home.jsx
    - Navbar.jsx
    - Welcome.jsx
    - WindowControls.jsx
    - index.js
  - constants/
    - index.js
  - hoc/
    - WindowWrapper.jsx
  - store/
    - location.js
    - window.js
  - windows/ — app windows
- index.html
- package.json
- vite.config.js
- eslint.config.js
- jsconfig.json

## Contributing & Notes 🛠️
- Extend components or add new windows under `src/windows/`.
- Keep styles modular for easier theming.
- Have fun and make it look more like your favorite OS — or not. Theme it neon-green for hacker vibes. 👾