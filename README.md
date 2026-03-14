# My Portfolio - React

A React.js version of the portfolio, designed and developed by Vishal Raj Sinha.

## Tech Stack

- **React 19** with **Vite**
- **Material UI (MUI)** - Components and theming
- **@mdi/react** & **@mdi/js** - Material Design Icons for skills

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
my-Portfolio-React/
├── public/
│   ├── assets/          # Images and SVGs
│   ├── resume.pdf       # Downloadable resume
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Appbar.jsx   # Navigation
│   │   ├── Hero.jsx     # Hero section
│   │   ├── About.jsx    # About me & skills
│   │   ├── Resume.jsx   # Resume download section
│   │   └── Technologies.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Features

- Responsive design (mobile & desktop)
- Hero section with animated blob backgrounds
- About section with skills chips
- Resume preview with hover-to-download
- Dark theme with red accents
