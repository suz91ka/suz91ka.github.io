# Zuzana Kecskes portfolio

React and TypeScript source for https://suz91ka.github.io.

## Local development

Use Node.js 22, then run:

```sh
npm ci
npm start
```

Open http://localhost:3000. Changes refresh automatically.

## Publishing changes

Work in this repository (`suz91ka.github.io`) for future portfolio changes.
The separate `my-portfolio-app` checkout is no longer needed for deployment.

1. Create a branch, edit the files in `src/` or `public/`, and commit and push.
2. Open a pull request targeting `main`. GitHub Actions checks the production build.
3. Merge the pull request. GitHub Actions builds and deploys the site automatically.

There is no need to copy files between folders or commit the generated `build/`
directory. For a local production check, run `npm run build`.

### One-time GitHub Pages setup

In this repository's **Settings → Pages → Build and deployment**, set
**Source** to **GitHub Actions**. After the migration is merged, the workflow
deploys to the existing https://suz91ka.github.io address. If the merge happened
before the setting was changed, run **Build and deploy portfolio** manually
from the **Actions** tab on `main`.

## Existing project sites

The published calculator, quote machine, and jokes sites are preserved in:

- `public/calculator/`
- `public/random-quote-machine/`
- `public/vtipy/`

Their existing root-relative assets are retained in `public/static/`,
`public/assets/`, and the other public files. Create React App copies these
files into every deployment, preserving the existing URLs.

The portfolio screenshots and profile image are in `public/images/`.
Update React source in `src/`; the preserved demo files are already-built sites.
