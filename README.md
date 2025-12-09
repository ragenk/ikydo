# ikydo.dev Portfolio

A pixel-styled personal portfolio built with React and Vite. The site introduces Rafael (Ikydo) through animated hero messaging, a typewriter-style About section, and a horizontally scrolling showcase of recent client projects.

## Features
- **Typed hero headlines:** Rotating role descriptions powered by [`react-typed`](https://www.npmjs.com/package/react-typed) to highlight areas of expertise.
- **Mobile navigation overlay:** Hamburger menu rendered via a portal to `#modal-root` for smooth in-page navigation without scrolling the underlying content.
- **About section with animated copy:** Intersection-observer driven text that types out when the section comes into view.
- **Project carousel:** Scrollable project cards with pixel indicators sourced from `src/data/projects.js` and thumbnails in `src/assets/projects/`.
- **Retro styling:** NES.css, Google Fonts, and custom CSS deliver an arcade-inspired aesthetic with snap-scrolling sections.

## Tech Stack
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [`react-typed`](https://www.npmjs.com/package/react-typed) for the hero and About animations
- NES.css + custom CSS for retro UI elements

## Prerequisites
- Node.js 18+ and npm
- Ensure `index.html` contains both `#root` **and** `#modal-root` elements (the mobile menu overlay mounts into `#modal-root`).
- Project thumbnails referenced in `src/data/projects.js` should exist under `src/assets/projects/`.

## Setup & Scripts
Install dependencies:
```bash
npm install
```

Start a dev server:
```bash
npm run dev
```

Create an optimized production build:
```bash
npm run build
```

Run linting:
```bash
npm run lint
```

## Licensing & Credits
If you plan to distribute this project publicly, add your license of choice (none is currently specified). The retro styling references [NES.css](https://nostalgic-css.github.io/NES.css/) and a Google Font; please review their respective licenses for compliance.
