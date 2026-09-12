# Erin’s Birthday (family-events)

Static GitHub Pages site — **one public invite page** for Erin’s 10th birthday, with RSVP on the same page.

**Live site:** https://mikesilla-kog.github.io/family-events/

Short RSVP link: https://mikesilla-kog.github.io/family-events/rsvp/ → `/#rsvp`

## Pages

| Path | Purpose |
|------|---------|
| `/` | **Public invite** — full Erin birthday invite + RSVP form |
| `/rsvp/` | Short link → `/#rsvp` |
| `/events/erin-10/` | Legacy URL → redirects to `/` (keeps tinyurl / bookmarks working) |
| `/plan/` | **Parents-only itinerary** (not in main nav) |

### Hidden itinerary URL

Share this only with parents / co-hosts:

**https://mikesilla-kog.github.io/family-events/plan/**

(Also reachable via a muted “·” footer link on the public invite.)

## How to edit event details

All editable party data lives in one file:

```
js/config.js
```

Update:

- `rsvpEndpoint` — Google Apps Script web app URL (invite form POSTs here)
- `rsvpSheetUrl` — Family Events Google Sheet (parents view RSVPs here)
- `rsvpEmail` — optional backup contact only (email is no longer the primary RSVP path)
- `erin10.schedule` — placeholder times for the `/plan/` itinerary
- `erin10.parentsNotes` — room booking, food package, what-to-bring notes
- `erin10.planningNotes` — guest checklist & to-dos on `/plan/`
- `erin10.dateLabel` / `venue` / etc. if details change

Invite copy and imagery are in the root `index.html`. Shared look-and-feel is in `css/styles.css`.

## RSVPs (Google Sheet)

Public RSVPs from the invite page (`/#rsvp`) POST JSON to the Apps Script endpoint in `js/config.js` (`rsvpEndpoint`). Rows land on the **Erin-10** tab of the Family Events spreadsheet:

**https://docs.google.com/spreadsheets/d/1-eUsuKFtIUPUZ_qp61BkogVzp8l8ENzQph9FJlSrde4/**

Columns: Timestamp, Name, Guests, RSVP, Notes, Source. Parents open that sheet to track who’s coming.

### Sample placeholder times (starting point)

| Step | Time | Label |
|------|------|-------|
| 1 | Now – Sept 20 | Invite friends |
| 2 | 5:00 PM | Arrival / check-in |
| 3 | 5:20 PM | Food |
| 4 | 5:50 PM | Cake + birthday song |
| 5 | 6:10 PM | Bowling |
| 6 | 7:00 PM | Arcade |
| 7 | 7:45 PM | Presents |
| 8 | 8:15 PM | Goodie bags / send-off |

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
