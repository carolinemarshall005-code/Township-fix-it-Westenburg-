# Wireframes & Design Decisions — Township Fix-It
**Team:** The Executioners
**Date:** August 2026

## Design principles
1. Mobile-first at 360px — desktop is one breakpoint at 40rem.
2. One primary action per screen.
3. Proof over polish — days-open number always visible.
4. Thumb-friendly — all buttons 44px min.
5. No external requests, photos downscaled client-side.

## Screen 1 — Homepage
**Decision:** Headline states problem + promise. Stats above list — aggregate is argument to municipality.

## Screen 2 — Report form (hidden until requested)
**Decision:** Form collapsed by default so visitor sees reports first. Preview shows upload worked.

## Screen 3 — Community reports
**Decision:** Status by 3 signals — left border colour + badge text + button label, never colour alone. Filters above list to stop duplicates.

## Screen 4 — Export
**Decision:** Closes loop — app produces document municipal official has to receive.

## Colour and type
| Token | Value | Use |
| Navy | #0b2a4a | Header, footer |
| Amber | #ffb400 | Primary buttons, focus ring |
| Red | #a8261c | Reported status, errors |
| Amber-dark | #9a5b00 | In progress |
| Green | #1c6b3f | Fixed |
| Page | #f4f6f8 | Background |
Type is system-ui, 16px min — no download, prevents mobile Safari zoom.