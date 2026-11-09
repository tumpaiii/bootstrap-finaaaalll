# GRIT — repaired AI Studio export, v1.0.4

## Run
Use Node 22.13+. Extract into a fresh folder. Open the folder containing package.json. Run `npm ci`, then `npm run dev`. Production: `npm run build`, then `npm start`.

Commit package-lock.json; exclude node_modules and .next. Import the complete source without converting frameworks. No environment variables or backend services are required.

## Repairs
- Speaker cards use accessible buttons. Click selects and expands a card; selection persists. Only name, designation and company are shown. The decorative gradient ignores pointer events. Invented biographies and performance claims were removed.
- All registration CTAs open the same native dialog. Form validation, keyboard dismissal, focus restoration and scroll locking are supported.
- Registration saves only on this browser. Storage failure shows an error; duplicate emails are recognized. No seat booking or email delivery is claimed. No decorative QR code or admission credential is issued. Venue content remains The Pearl, 601 19th Street, San Francisco.
- Removed the blanket reveal opacity override so entrance fades can run. Readable initial content remains the fallback. Scroll text reveal and collage zoom are preserved. Reduced motion is respected.
- Added the dependency lockfile and removed the unused standalone output setting.

## Structure
Sections are in components/all-components; UI primitives in components/ui; media in src/assets/images, videos and icons. Media are module imports; lib/utils.ts provides cn().

## Content
Speaker names and companies are fictional samples. Event date March 13, 2027 and venue are proposed details, not a confirmed booking. Photos are stock imagery.

## Verification scope
See REPAIR-CHECKS.md. A production build does not establish successful hydration in a separately imported AI Studio copy.
