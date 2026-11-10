
# M9VENDS — Official Website

A modern, responsive website for M9VENDS, showcasing its work across vending systems, product engineering, embedded systems and automation.

## Overview

The M9VENDS website is built to present the company's identity, projects, engineering direction, team and opportunities through a clean, accessible and responsive experience.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| Vite 7 | Development and build tooling |
| React Router 7 | Client-side routing |
| Tailwind CSS 4 | Styling and responsive layouts |
| Axios | API communication |
| ESLint 9 | Code quality and linting |

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
└── vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd M9Vends_website/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000
```

Replace the URL with the actual backend origin provided by the project team.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

## Website Pages

- Home
- About
- Projects
- Team
- Careers
- Contact
- Help & Support

## Design Direction

The website follows an editorial, technology-led visual direction with:

- Warm ivory backgrounds and deep green sections.
- Consistent typography and spacing.
- Responsive layouts across screen sizes.
- Original M9VENDS branding and visual assets.
- Accessible interactions and navigation.

## Development Notes

- Keep environment variables and credentials out of version control.
- Use the existing API services when integrating backend functionality.
- Verify content, product information and company claims before publication.
- Run the production build and lint checks before submitting changes.

---

**M9VENDS**  
Engineering ideas into real-world experiences.