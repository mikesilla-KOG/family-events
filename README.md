# Family Events

Static GitHub Pages site for family celebrations. Current featured event: **Erin’s 10th birthday**.

**Live site:** https://mikesilla-kog.github.io/family-events/

## Pages

| Path | Purpose |
|------|---------|
| `/` | Family events home — features Erin’s party |
| `/events/erin-10/` | Public birthday invite + RSVP |
| `/plan/` | **Parents-only itinerary** (not in main nav) |

### Hidden itinerary URL

Share this only with parents / co-hosts:

**https://mikesilla-kog.github.io/family-events/plan/**

(Also reachable via a muted “·” footer link on the home page.)

## How to edit event details

All editable party data lives in one file:

```
js/config.js
```

Update:

- `rsvpEmail` — replace `rsvp@example.com` with the real RSVP inbox
- `erin10.schedule` — placeholder times for the `/plan/` itinerary
- `erin10.parentsNotes` — room booking, food package, what-to-bring notes
- `erin10.dateLabel` / `venue` / etc. if details change

Invite copy and imagery are in the HTML under `events/erin-10/`. Shared look-and-feel is in `css/styles.css`.

### Sample placeholder times (starting point)

| Step | Time | Label |
|------|------|-------|
| 1 | Now – Sept 18 | Invite friends |
| 2 | 1:00 PM | Arrival / check-in |
| 3 | 1:20 PM | Food |
| 4 | 1:50 PM | Cake + birthday song |
| 5 | 2:10 PM | Bowling |
| 6 | 3:00 PM | Arcade |
| 7 | 3:45 PM | Presents |
| 8 | 4:15 PM | Goodie bags / send-off |

## GitHub Pages setup

- **Source:** `main` branch, site root `/`
- **Expected URL:** https://mikesilla-kog.github.io/family-events/
- Configured via the GitHub Pages API (`build_type=legacy`, `source.branch=main`, `source.path=/`)

After pushing to `main`, Pages usually goes live within a minute or two. Check **Settings → Pages** in the repo if the URL 404s briefly.

## Local preview

Open any HTML file in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080/

## Repo

https://github.com/mikesilla-KOG/family-events
