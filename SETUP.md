# Abhinav Ram Tripathi — Portfolio (Angular)

## Run it locally

```bash
cd abhinav-portfolio
npm install
npm start
```

Then open http://localhost:4200

## Build for production

```bash
npm run build
```

Output goes to `dist/abhinav-portfolio/browser`. Deploy that folder to any static
host (Vercel, Netlify, GitHub Pages, Firebase Hosting).

## Project structure

```
src/app/components/
  nav/          top navigation bar
  hero/         intro + animated access-control / OTP demo panel
  experience/   IDCLE Tech LLP internship
  projects/     IWBMS & RETMS project cards
  skills/       tech stack manifest
  education/    B.Tech details
  contact/      email / phone / socials
```

## What to personalize before deploying

- `public/assets/Tripathi_Abhinav_Resume_fresher.pdf` — swap in your latest resume
  (the "resume.pdf" button in the hero links here).
- `src/app/components/projects/projects.component.ts` — add live project links once
  IWBMS/RETMS (or future projects) are public, or add new personal projects.
- `src/app/components/hero/hero.component.html` — update the GitHub/LinkedIn URLs
  if they change.
- Favicon at `public/favicon.ico`.

## Design notes

Dark, systems/dashboard-style UI (deep ink background, mint "granted" green,
amber "pending" accent) that mirrors the RBAC + OTP authentication systems
described in the resume — the hero panel is a live animated simulation of that
exact flow (OTP fill → verified → citizen → samiti_approver → department_admin).
Headings use IBM Plex Mono for a terminal/code feel; body copy uses Inter.
