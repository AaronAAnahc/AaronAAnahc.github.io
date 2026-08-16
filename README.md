# AaronAAnahc.github.io

A clean, minimal Astro personal website.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Pages configuration

This project is configured for GitHub Pages user-site deployment:

- `site`: `https://AaronAAnahc.github.io/`
- `base`: _(not set; user site root)_

The workflow at `.github/workflows/deploy.yml` uses `withastro/action@v4` and deploys on every push to `main`.

In the repository settings, set **Pages** source to **GitHub Actions**.

## Content editing

- Home page: `/home/runner/work/AaronAAnahc.github.io/AaronAAnahc.github.io/src/pages/index.astro`
- About page: `/home/runner/work/AaronAAnahc.github.io/AaronAAnahc.github.io/src/pages/about.astro`
