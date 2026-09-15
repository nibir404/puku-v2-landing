# Design QA — PUKU homepage

Source: https://devin.ai/, captured September 14, 2026.
Implementation: http://127.0.0.1:3000/.

## Evidence

- Source desktop: `evidence/source-desktop-hero.png`, 1440 × 900.
- Implementation desktop: `evidence/implementation-desktop-hero.png`, 1440 × 900.
- Combined desktop comparison: `evidence/desktop-comparison.png`, 2880 × 900, source left.
- Source mobile: `evidence/source-mobile.png`, 390 × 844, integration/footer transition.
- Implementation mobile: `evidence/implementation-mobile-footer.png`, 390 × 844.
- Combined mobile comparison: `evidence/mobile-comparison-final.png`, 780 × 844, source left.
- Interaction evidence: `evidence/implementation-mobile-menu.png` and `evidence/implementation-knowledge-approved.png`.

Browser CSS viewport and screenshot pixels are 1:1. Desktop evidence compares the top of the page. The mobile comparison aligns the integration/footer boundary within approximately 3 pixels of scrolling; this is a capture position difference. The 100% mobile comparison provides focused evidence for typography, card radii, spacing, screenshot crop, and buttons.

## Findings and fixes

1. P1, fixed: the missing legacy page wrapper removed horizontal container padding. Restored the source's `legacy-root` wrapper; the subsequent combined desktop comparison shows matching hero width and spacing.
2. P2, fixed: the knowledge approval button had zero width because its original right inset was lost when converted to a React control. Restored `right: 0`; browser interaction now switches `aria-pressed` to true and expands the confirmation strip.
3. P2, fixed: a global button font rule overrode the approval strip's small source font. Removed that override. The final captured confirmation message fits in the strip.
4. P2, fixed: the mobile header allowed background text to show through. Made its background opaque; final mobile comparison checks the corrected state.
5. P3: icon-library chevrons and hamburger differ slightly from the original marks, as expected when using Lucide. The PUKU logo replacement is intentional.
6. P3 / fidelity limitation: the integration grid and panels retain hover, focus, and expansion behavior, but the original continuous scroll choreography is simplified. This is a functioning homepage recreation, not a claim of byte-identical animation behavior.

## Required fidelity surfaces

- Fonts: source NB International Pro font files are local. Heading size, wrapping, line height, and letter spacing match the captured desktop and mobile views. The unused extended Inter declaration uses the available Inter Latin font.
- Spacing: retained source Tailwind classes and responsive tokens, including hero margins, customer grid, use-case cards, collaboration cards, and footer. Corrected the wrapper regression.
- Colors: retained source colors and section backgrounds. Header opacity corrected. Purple PUKU branding is the requested deviation.
- Images: source screenshots and vectors are local, with separate mobile hero and collaboration images. No broken images were found in the rendered local page. Source logos remain original vectors rather than approximations.
- Copy: homepage copy is preserved. Logo, favicon, and browser title use PUKU. Outbound links retain source destinations.

## Interaction and runtime checks

- Desktop dropdown rendering and Product toggle checked.
- Mobile Product and Resources accordion states checked.
- Mobile drawer opening, Escape dismissal, and removal of background content from the accessibility tree checked.
- Integration expansion checked; GitHub reports expanded and receives the wide panel, while Linear collapses.
- Approval animation checked after width and font fixes.
- Mobile viewport has no horizontal overflow.
- Local image loading checked: no broken images.
- Favicon points to `/puku-logo.png`.
- Browser console checked: no errors in the production preview.
- Production build passes, including TypeScript validation and static page generation.

## Limits

This QA covers the local homepage and its captured states. Separate product, pricing, login, and other destination pages are not cloned. Their links remain functional outbound links. Automated review prevented further source-site access; saved captures were used for comparison, and the local page remained available for verification. Full original scroll choreography remains a documented refinement.

## Implementation checklist

- [x] Next.js / React / Tailwind / Lucide implementation.
- [x] Local source assets and supplied branding.
- [x] Desktop and mobile browser checks.
- [x] Correct identified layout and approval-control regressions.
- [x] Production build.

final result: passed

# Expanded site QA — September 16, 2026

This section supersedes the homepage-only scope and final result above.

## Completed checks

- Production build and TypeScript validation pass for 216 captured routes plus homepage and account/download screens.
- All 216 captured routes return HTTP 200 (`content/route-check.json`).
- Static link audit finds zero unresolved local page destinations; uncaptured destinations retain explicit original source URLs.
- Desktop/mobile captures cover cloud, desktop, CLI, pricing, customers, demo, government, security, guarantee, partners, community, download, enterprise, university, review, blog and a customer article.
- Fixed source `/assets/images/` paths that were incorrectly treated as local paths. Cloud images now load in the browser.
- Fixed review page mobile overflow: document width and viewport both measure 390px. Hero and form visually checked.
- Product tabs switch the visible preview image.
- FAQ controls expand their matching panels.
- CLI arrow-key selection changes the selected model.
- Customer primary filter changes visible local stories from 25 to 23 and resets to 25. Categories are inferred, not source-verified.
- Privacy switch state survives reload.
- Dialogs trap Tab focus and dismiss with Escape.

## Outstanding fidelity and functionality

- 79 source destinations remain uncaptured. Source browser access fails with ERR_INTERNET_DISCONNECTED. Further exact captures and comparisons are blocked.
- 74 unresolved source resource URLs remain; 31 image references still lack local files. These are recorded in `content/local-audit.json`, including the Ramp video poster.
- Account, review execution, lead submission and installers require real PUKU services. UI identifies them as previews.
- Some video controls, carousels, code review expansion and original scroll animations remain incomplete or simplified. Do not claim all original interactions work.
- Full per-page pixel comparison has not been completed across all 216 routes.

Final result for the expanded all-pages request: incomplete; captured pages build and serve successfully, but source access, missing resources and interaction fidelity still require work.
