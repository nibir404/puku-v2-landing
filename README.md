# Puku website

A Next.js website using the existing Devin-style design system. The public site contains exactly the 55 pages listed in [PAGE-INVENTORY.md](PAGE-INVENTORY.md).

## Development

- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run build`
- `npm run start`

## Page structure

`content/routes.json` is the public page allowlist (54 entries plus Home). `content/navigation.json` holds the eight requested navigation groups. Shared navigation and footer expose the approved pages. The catch-all route rejects any page outside the allowlist.

Existing matching pages retain their captured layouts; new pages use the same theme tokens, typography and responsive spacing. Removed page content is recoverable from Git history. Source CSS and assets remain in place to preserve the design system.

## Content availability

Legal pages await approved policy text. Downloads, SDK packages, API specifications and release notes were not included in the supplied project. These pages state their availability explicitly. Contact forms remain local previews and do not send submissions.
