# greenfarming.vn Behavior Notes

## Global

- Desktop header is sticky, 128px tall, white, with green logo mark, nav links, login/signup buttons, and a tiny top-right language selector.
- Mobile header is 104px tall and collapses navigation into a left slide-out drawer with nav links and auth buttons.
- Language selector switches Vietnamese/English text; the clone implements this with local React state.
- Global visual system uses Inter/Poppins, `#40B34E` green, `#f4f6f3` section backgrounds, 5px green scrollbar thumb, and light card borders.

## Homepage

- Hero uses `grapes1.webp` with a white left-to-right overlay, green uppercase heading, paragraph copy, and rounded green CTA linking to `#map`.
- Feature grid is static with six icon cards and hover lift.
- Statistics map is represented as a Leaflet-style interactive visual with local ArcGIS tiles, district list, search/filter controls, popup, legend, and year scrubber styling.
- Chart sections use static SVG/CSS chart recreations: pie, line, multi-line, and horizontal bar rankings.

## Other Routes

- About page keeps the target section order: hero, sponsor strip, partner cards, expert cards, impact items.
- Architecture page keeps the target flow: overview, national compliance system, on-site rice monitoring system, integration cards.
- FAQ page has click-to-open accordion behavior.
- Feedback page has a seven-step wizard with next/back navigation and a final mock submit state.
- Login/signup are non-authenticating static forms; `/app` is a mocked dashboard per implementation decision.
