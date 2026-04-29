# Weather Perfected

A modern, mobile-first weather application prototype built as a static app for Vercel.

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

This project has no required build step or API keys.

- Framework preset: `Other`
- Build command: `npm run build`
- Output directory: `.`

Vercel will serve `index.html` and route app paths through `vercel.json`.

## Demo Notes

- Authentication is local UI validation only.
- Weather data is mocked so the saved-location, forecast, settings, and dynamic theme flows work immediately.
- Try adding `Seattle`, `Tokyo`, `San Diego`, `London`, or `New York`.
