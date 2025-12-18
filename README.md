# Müteahhitlik Belgesi Landing Page

Professional landing page for construction contractor consultancy services dealing with government procedures.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- TailwindCSS
- React 18

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `lib/constants.ts` - Single source of truth for all business data
- `app/` - Next.js App Router pages and layout
- `components/` - React components (layout, sections, shared)
- `public/` - Static assets

## Important Notes

- Replace `G-XXXXXXXXXX` in `components/shared/CookieConsent.tsx` with your actual Google Analytics ID
- Add `public/hero-blueprint.jpg` - Hero section image (bright, blueprint/engineering style)
- Replace `public/logo-full.svg` with actual logo
- Update contact information in `lib/constants.ts`

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

