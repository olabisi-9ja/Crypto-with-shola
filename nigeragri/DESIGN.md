# NigerAgri Farmer Connect — DESIGN.md

Farmer, Field Officer and Niger Foods management app for Niger State outgrower programmes.
Mood: calm, trustworthy, field-ready. Information-dense but readable outdoors on low-end Android phones.

## Colors
- primary / ink-green: #14201A (near-black forest green — primary buttons, dark task cards, active nav pill text)
- primary-600: #1F3A2B (hover / pressed dark cards)
- accent-green: #2E9E4F (success, progress fill, completed timeline checks, "Slot confirmed" text)
- accent-lime: #7BC043 (FINAL tags, small highlights)
- gold: #E0A526 (restrained: payout highlights, pending badges)
- orange: #E8742C (alerts, "Fertilize in 3 days" urgency, map pins)
- danger: #D64545 (Log out, rejected)
- link-blue: #2F80ED (Terms / Privacy links only)
- surface: #FFFFFF (cards, screens)
- background: #F4F5F3 (light neutral page background)
- muted-surface: #E6E8E4 (grouped card containers, nav active pill #D9DCD6)
- border: #D5D8D2 (1px card and input borders)
- text-primary: #111814, text-secondary: #5E6861, text-tertiary: #8A938C

## Typography
- Headings: Plus Jakarta Sans, 600–700. Screen title 28/34, section title 20/26, card title 16/22.
- Body & UI: Inter, 400–600. Body 14/20, label 12/16 (600), caption 11/14.
- Section eyebrows: Inter 11px, 700, uppercase, letter-spacing 0.06em, text-primary (e.g. "MY FARM", "WHAT YOU NEED TO DO").
- Auth hero headings ("Welcome to NigerAgri"): condensed display sans, 28px, white, light weight.
- Numbers (₦68,000, 12.4 Ha): Plus Jakarta Sans 700, tabular.

## Shape & spacing
- Radius: cards 16px, buttons 12px, inputs 10px, chips 999px, nav active pill 14px.
- Spacing scale 4/8/12/16/20/24. Screen side padding 16px. Card padding 14–16px. Gap between cards 10–12px.
- Borders over shadows: 1px #D5D8D2. Only the Farmer ID card and hero cards get a soft shadow (0 8 24 rgba(20,32,26,.18)).

## Components
- Primary button: full-width, 48px, bg #14201A, white Inter 15/600, optional leading icon (→).
- Input: 48px, white, 1px border, leading line icon (Lucide style, 18px, #5E6861), placeholder #8A938C, label above (12/600).
- Dark task card: bg #14201A, white title 16/600, secondary line in accent-green 12px with small icon.
- Grouped container: rounded 16px muted-surface panel with 1px border, holding stacked dark or light cards.
- Stat tile: white, 1px border, 16px radius, icon + tiny label + bold value.
- Chip: pill, 1px border, crop sprout icon; selected = filled #14201A white text.
- Status badges: small pill — NEW (white on dark), Pending (gold tint), Approved (green tint), Rejected (red tint), FINAL (lime text).
- Farmer ID badge: pill with ID card icon, "NI-00284921", 1px border.
- Progress bar: 6px, track #D5D8D2, fill #2E9E4F, rounded.
- Timeline: vertical steps — green check (done), black filled dot (current), numbered black circles (upcoming).
- Segmented tabs: dark #14201A track, active segment white with dark text.
- List row: white, label caption above value, chevron right.
- Bottom nav (farmer & field officer): 4 items, line icons + 11px labels, active item in #D9DCD6 rounded pill with 600 weight.
  Farmer: Home · Farm · Services · Profile. Field Officer: Home · Farmers · Visits · Profile.
- Photography: warm, real Nigerian farmland (maize fields, sunsets, produce). Hero images get a dark gradient scrim with white text.
- Logo: round seal "Farmers and Government Partnership for Agricultural Growth" with handshake.

## Platform
- Farmer + Field Officer: mobile 390×844, iOS-style status bar 9:41.
- Niger Foods management: desktop 1440×1024 web dashboard, left sidebar (ink-green #14201A, white icons/labels), light #F4F5F3 content, white cards, same tokens.

## Voice
Plain English, short, farmer-friendly. Currency in Naira (₦). Places: Bida, Mokwa, Lapai, Agaie, Minna, Wushishi (Niger State LGAs). Languages: Hausa · Yoruba · English · Igbo. Assistant name: "Agrit".
