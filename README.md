# PUKU website

Next.js App Router, React, Tailwind CSS and Lucide implementation of the captured Devin marketing site, rebranded with the supplied PUKU logo and favicon.

## Run

```sh
npm install
npm run dev
```

Production: `npm run build` then `npm run start`. Preview: http://127.0.0.1:3000.

## Current scope

216 captured source routes plus the homepage and local account/download confirmation screens. Includes product pages, pricing, enterprise, government, security, guarantee, partners, community, university, review, 25 customer stories, blog archive and captured articles. `content/routes.json` is the authoritative inventory.

Shared navigation, mobile drawer, product tabs, FAQ expansion, customer filters, CLI keyboard model selection, privacy preference persistence and preview form validation are implemented. Customer filter categories are inferred from the captured story text; they are not verified against the original service's category data.

Login, signup, lead forms, repository review and installers are frontend previews. They do not create accounts, submit data, run agents or download a PUKU binary. Uncaptured video controls explain that the source video is unavailable. Existing captured embeds depend on their external hosts.

## Remaining work

The source browser reports ERR_INTERNET_DISCONNECTED, preventing further capture. `content/external-routes.json` records 79 uncaptured destinations, including older articles, category pagination and historical application links. Those links retain their source destinations; they are not counted as local pages. `content/missing-assets.json` records 74 unresolved source resources; `content/local-audit.json` identifies 31 unresolved local image references, mostly article images and video posters. These need recovery from the source. Full source interaction fidelity and scroll choreography are not complete.

## Files and continuation

- `content/pages/`: original captures, screenshots and generated page markup.
- `public/assets/`: downloaded source images, fonts and media.
- `scripts/prepare-pages.mjs`: generate branded pages and map assets.
- `scripts/finalize-pages.mjs`: scoped styles, review layout, installer controls, filtering metadata and outbound fallback links. Run after preparing pages.
- `scripts/check-routes.mjs`: check all captured routes against the running local preview.
- `content/route-check.json`: latest HTTP result; all 216 captured routes returned successfully.
- `design-qa.md`: verification scope and outstanding issues.

Do not treat a successful build as proof that every source page or interaction has been duplicated.
