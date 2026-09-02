# User Research — Township Fix-It
### Westenburg, Polokwane — Township Fix-It

**Team:** The Executioners
**Members:** Monica Semenya, Grace Mathapo, Caroline Marshall, Theo Lefember
**Location:** Westenburg Township, Polokwane, Limpopo
**Date:** August 2026
**Project:** Township Fix-It - Westenburg Edition

---

### 1. Purpose
The brief requires us to validate that the problem is real before building.
We needed to answer three questions:

1. Do Westenburg residents actually experience unresolved service faults?
2. How do they report faults today, and what fails about that?
3. Would they use a web app, and what would it need to be useful?

### 2. Method

| Item | Details |
| :--- | :--- |
| **Survey sample** | 32 residents (brief requires 10+) |
| **Where** | Westenburg: Main Road shops, the clinic queue, and two community WhatsApp groups |
| **When** | Over four days |
| **How** | Short verbal survey in person, plus a shared question list in the groups |
| **Follow-up interviews** | 6 residents, roughly 10 minutes each |
| **Languages** | Conducted in English, Afrikaans and Sepedi as the resident preferred |

**Sampling caveat.** We reached residents who were out during the day or active in WhatsApp groups. Residents who work away from the township and elderly residents who do not use WhatsApp are under-represented, which is why we did not make WhatsApp literacy a requirement for using the app.

### 3. Survey questions

1. In the past year, has a service fault near your home stayed broken longer than you think it should have? Which kind?
2. Where do you report a fault like that?
3. After you reported it, did anyone tell you what was happening with it?
4. What is the longest you have waited for something to be fixed?
5. If there was a website where you could log a fault and see its status, would you use it?
6. Would you rather install an app, or open a website link?
7. Would you want to attach a photo when you report?
8. Would you be willing to put your name on a report?

### 4. Results

| Question | Result |
| :--- | :--- |
| Experienced an unresolved fault | 32 of 32 |
| Report faults through WhatsApp groups | 28 of 32 |
| Phoned or visited the municipal office | 11 of 32 |
| Never received any feedback after reporting | 25 of 32 |
| Longest single wait reported | 3 years (streetlight) |
| Would use a web-based reporting tool | 30 of 32 |
| Prefer a link over installing an app | 30 of 32 |
| Wanted to attach a photo as proof | 22 of 32 |
| Willing to attach their name | 19 of 32 |

**Most common fault types named:** streetlights, potholes, water leaks and burst pipes, uncollected refuse, sewage spills.

### 5. Interview findings and quotes

- "We report it in the group, everyone says shame, and then it is gone. Next month someone reports the same hole."
- "I don't want to argue with the municipality. I just want to show them it has been three years."
- "My data is expensive. If it is a big app I won't open it."
- On the question "How would you report a broken streetlight?", every one of the six described sending a message to a group and hoping someone with a contact at the municipality would pass it on.

### 6. How research changed the product

| What we learned | Design decision |
| :--- | :--- |
| Feedback is the real gap, not reporting | Public status workflow (Reported / In Progress / Fixed) became the core feature, not an extra |
| Residents want to prove duration | Every card shows "days open"; the dashboard names the longest unresolved fault |
| Data cost and cheap phones matter | No frameworks, no network calls, roughly 30 KB total, mobile-first layout |
| Photos are seen as proof | Camera capture added, with in-browser downscaling so storage is not exhausted |
| Only some will attach a name | Reporter name is optional |
| Duplicate reports frustrate people | Search and filter, so a resident can check their street before reporting |
| Nothing reaches the municipality in a usable form | CSV export to hand in at the municipal office |

### 7. What we chose not to build

- **Accounts and logins.** Residents said a sign-up would stop them using it, and we have no backend to authenticate against.
- **An interactive map.** Valuable, but map libraries are external frameworks, which the brief forbids. GPS coordinates are captured as text instead.
- **Push notifications.** Not possible without a server.

---
**Conclusion:** Research proves Westenburg needs a lightweight, link-based, status-tracked reporting tool. That is what Township Fix-It delivers.

**Live App:** https://carolinemarshall005-code.github.io/Township-fix-it-Westenburg-Polokwane-by-the-Executioners/
**Repo:** https://github.com/carolinemarshall005-code/Township-fix-it-Westenburg-Polokwane-by-the-Executioners