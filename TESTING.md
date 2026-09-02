# User Testing & Accessibility Report — Township Fix-It
**Team:** The Executioners — Monica Semenya, Grace Mathapo, Caroline Marshall, Theo Lefember
**Project:** Westenburg Township Fix-It, Polokwane
**Date:** August 2026
**Live Link:** https://carolinemarshall005-code.github.io/Township-fix-it-Westenburg-Polokwane-by-the-Executioners/

## 1. Method
Five Westenburg residents tested the app on their own phones. We gave each a task without instructions and watched where they hesitated.

| Tester | Device | Task given |
| :--- | :--- | :--- |
| T1 | Android, small screen | "Report the streetlight on your street." |
| T2 | Android, older phone | "Find out if the pothole on Main Road is already reported." |
| T3 | iPhone | "Report a water leak and attach a photo." |
| T4 | Android | "Mark a report as fixed." |
| T5 | Android, screen reader user | "Submit any report using the screen reader." |

## 2. Bugs found and fixed

**B1 — Typed HTML broke the page layout (critical)**
Found by: T2, by accident, typing <3m deep in a description.
Cause: report cards were built by concatenating user text into an innerHTML string, so anything resembling a tag was parsed as markup.
Fix: cards are now cloned from a <template> and every field is set with textContent. Resident text can never be interpreted as markup.
Verify: type <b>test</b> into a description — it displays literally.

**B2 — Attaching a photo could fail silently (critical)**
Found by: T3.
Cause: a raw camera photo of 4 MB exceeded the localStorage quota. The write threw, the report was lost, and nothing told the user.
Fix: photos are downscaled to a 900px long edge and re-encoded as JPEG at 70% quality before storage. Quota errors are now caught and shown as a readable message.

**B3 — Submitting an empty form gave no explanation**
Found by: T1.
Cause: validation relied only on the browser's default required tooltip, which T1 did not notice.
Fix: inline error messages, aria-invalid on the offending field, and focus moves to the first problem field. Errors clear as soon as the field is corrected.

**B4 — "Fixed" was a dead end**
Found by: T4.
Cause: the original code had a boolean fixed flag, so a fault that broke again could not be reopened, and there was no "in progress" state at all.
Fix: replaced with a three-state workflow that cycles Reported -> In Progress -> Fixed -> Reported, matching how municipal work actually moves.

**B5 — Status was communicated by colour alone**
Found by: T5, and confirmed in our own contrast check.
Fix: status now appears as a text badge and in the action button label, not just the coloured card edge.

**B6 — Screen reader gave no confirmation after submitting**
Found by: T5.
Cause: the form closed and the list updated with nothing announced, so T5 did not know the report had been saved.
Fix: role="status" live regions announce submission, GPS capture and export results.

**B7 — GPS button appeared to do nothing**
Found by: T3, testing over file://.
Cause: browsers only grant geolocation over HTTPS or localhost, and the failure was silent.
Fix: the button reports each outcome in words — searching, coordinates attached, permission declined, or unsupported — and always tells the resident to type a street name as well.

**B8 — Delete had no confirmation**
Found by: T4, who deleted a report by mistake.
Fix: a confirmation dialogue naming the specific report.

## 3. Accessibility checklist

| Check | Status |
| :--- | :--- |
| Semantic landmarks (header, main, section, footer) | Pass |
| Report list is a real ul/li; statistics use dl | Pass |
| Every control has an associated <label> | Pass |
| Help and error text linked with aria-describedby | Pass |
| Errors set aria-invalid and move focus | Pass |
| Live regions announce async results | Pass |
| Images have descriptive alt text | Pass |
| Skip-to-content link | Pass |
| Visible focus indicator on all interactive elements | Pass |
| Full keyboard operation, no mouse needed | Pass |
| Status never conveyed by colour alone | Pass |
| Text contrast meets WCAG AA | Pass |
| Touch targets at least 44px | Pass |
| Body text 16px, so mobile browsers do not zoom on focus | Pass |
| prefers-reduced-motion respected | Pass |
| aria-expanded on the disclosure button | Pass |

## 4. Performance checklist

| Check | Result |
| :--- | :--- |
| Total page weight | roughly 30 KB, three files |
| External requests | none |
| Web fonts downloaded | none (system-ui) |
| Photo handling | downscaled client-side before storage |
| Event listeners on the list | one delegated listener, not one per card |
| Works offline after first load | yes, all data is local |

## 5. Still open
- Reports do not sync between devices, because there is no backend. The CSV export is the workaround.
- Very old browsers without <template> support are untested.
- We have not yet tested with a resident who uses only a feature phone.