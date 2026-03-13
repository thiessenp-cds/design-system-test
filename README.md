# Design System Test

A React-based showcase for testing and rendering design system components.

Hosted on GitHub Pages at: https://thiessenp-cds.github.io/design-system-test

## Getting Started

```bash
npm install
npm run dev
```

## Deploying

Push to `main` — GitHub Actions will build and deploy automatically via GitHub Pages.

You can also deploy manually:

```bash
npm run deploy
```

## Adding Components

Edit `src/App.jsx` to add new component entries to the `components` array, then create dedicated pages or sections to render each component.

To add a known issue to a component page section test e.g.
```
<IssueTable issues={[
  { combo: 'Chrome 120 + NVDA 2023.3', description: 'Label not announced on focus.' }
]} />
```


## Tech Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- GitHub Pages (via GitHub Actions)
