# A-BLOG

A clean, minimal Astro personal website with a restrained Hatsune Miku-inspired palette.

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

This project is configured for GitHub Pages project-site deployment:

- `site`: `https://Aaron-AA0721.github.io/A-BLOG`
- `base`: `/A-BLOG`

The workflow at `.github/workflows/deploy.yml` uses `withastro/action@v6` and deploys on every push to `main`.

In the repository settings, set **Pages** source to **GitHub Actions**.

## Content editing

- Home page: `/home/runner/work/A-BLOG/A-BLOG/src/pages/index.astro`
- About page (Markdown): `/home/runner/work/A-BLOG/A-BLOG/src/pages/about.md`
