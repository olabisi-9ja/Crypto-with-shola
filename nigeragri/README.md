# NigerAgri Farmer Connect — Stitch build

- `DESIGN.md` — design system from the approved screens (ink-green, white cards, gold/orange accents, Plus Jakarta Sans + Inter).
- `screens.json` — 30 Stitch prompts: 8 existing screens rebuilt + 22 new (farmer, field officer, Niger Foods desktop).
- `build_stitch.py` — creates the Stitch project, applies DESIGN.md, generates every screen.

```
STITCH_API_KEY=... python3 build_stitch.py          # all screens
STITCH_API_KEY=... python3 build_stitch.py --only M17,M18
```

## Prototype flows (hotspot → target)

| Flow | Path |
|---|---|
| Onboarding | Splash F00 → Sign up F01 (Log In → F02) → Farmer ID step 1 F03 → step 2 F03b → ID issued F03c → Home F02h |
| Farm | Home "View Farm" → Farm detail F07f → Request field visit → Support F11; Nav Farm → My Farms F04 → Add farm F05 → My Farms |
| Scan | Farm detail → Scan F08s → Scan result F13 → Request field visit → Request detail F12 |
| Announcements | Home "Weather advisory sent" → Announcements F06 |
| Programmes | Nav Services F09 → Programmes F07 → Programme detail F08 → Apply → Request detail F12 |
| Machinery | Services F09 → Request (tractor) F10 → Submit → Request detail F12; Home "Tractor service" → F12 |
| Support | Home hotline / Ask Agrit → Support F11 → request row → F12 |
| Profile | Nav Profile F03p → My Farms F04; Log out → Log in F02 |
| Field Officer | Dashboard O13 → Register farmer O14 → Map farm O15 → Verification O16 → Dashboard; task "Verify Musa" → O16 |
| Management | Sidebar links M17 ↔ M18 ↔ M19 ↔ M20 ↔ M21 ↔ M22; M18 drawer "Verify" ↔ O16 status; M20 approve → M21 |

Stitch generates screens, not hotspot links: after generation, export to Figma (Stitch → Copy to Figma) and wire the table above in Prototype mode.
