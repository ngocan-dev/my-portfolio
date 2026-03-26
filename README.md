# Alex Carter Portfolio (React + Vite)

A polished, maintainable personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
This project is structured for clarity, scalability, and easy customization.

## Demo / Preview

- Live demo: _Add your deployment URL here_
- Screenshot: _Add a screenshot or GIF here_

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- ESLint

## Features

- Single, coherent React + Vite app structure
- Modular architecture with reusable UI components
- Clean section-based composition (`Hero`, `About`, `Skills`, `Projects`, `Experience`, `Contact`)
- Centralized content in a dedicated data layer for easy updates
- Responsive layout and modern visual style
- Production-ready build configuration

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and Run

```bash
npm install
npm run dev
```

The app will start in development mode (Vite default) and print the local URL in your terminal.

## Available Scripts

- `npm run dev` – Start Vite development server
- `npm run build` – Create production build in `dist/`
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint checks

## Folder Structure

```text
.
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── assets
    ├── components
    │   ├── Badge.jsx
    │   ├── Container.jsx
    │   ├── ProjectCard.jsx
    │   ├── SectionHeading.jsx
    │   └── SocialLinks.jsx
    ├── data
    │   └── siteData.js
    ├── sections
    │   ├── AboutSection.jsx
    │   ├── ContactSection.jsx
    │   ├── ExperienceSection.jsx
    │   ├── HeroSection.jsx
    │   ├── ProjectsSection.jsx
    │   └── SkillsSection.jsx
    └── utils
        └── cn.js
```

## Customization Guide

All portfolio content is centralized in `src/data/siteData.js`:

- Update profile identity (`name`, `role`, `email`, `location`)
- Edit hero text and bio
- Replace project entries and technology tags
- Add/remove experience timeline entries
- Update social links

Recommended updates:

1. Replace placeholder project links with real URLs
2. Swap sample profile data with your own
3. Add your preferred favicon and open-graph metadata in `index.html`

## Deployment Guide

You can deploy this project to any static hosting platform:

1. Run `npm run build`
2. Upload the generated `dist/` folder

Common options:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## Author / Contact

- Name: Ngoc An
- Portfolio: ___
- Email: hngocan.forwork@gmail.com
- LinkedIn: [_https://linkedin.com/in/your-handle_](https://www.linkedin.com/in/kyungdev/)
