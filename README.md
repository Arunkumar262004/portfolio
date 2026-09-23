# Arun Kumar R — Portfolio

Personal portfolio site built with React + Vite. Sections: hero, work experience, projects, skills, and a
contact form for recruiter enquiries.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site to `dist/`, deployable to any static host (Vercel, Netlify, GitHub
Pages, Hostinger, etc.).

## Contact form

The "Send an enquiry" form on the Contact section has no backend — submitting it opens the visitor's email
client with a pre-filled message addressed to the email in [`src/data/resume.js`](src/data/resume.js) (`arunkumar957877@gmail.com`), via a `mailto:` link. No API keys or server required.
If you'd rather have messages sent silently in the background (no email client popup), wire the form up to a
service like [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) instead.

## Editing content

All résumé content (profile, experience, projects, skills, education) lives in
[`src/data/resume.js`](src/data/resume.js) — edit that file to update the site without touching components.
The résumé PDF offered for download is [`public/Arun_Kumar_R_Resume.pdf`](public/Arun_Kumar_R_Resume.pdf).
