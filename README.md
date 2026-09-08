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

- `rsvpEndpoint` — Google Apps Script web app URL (Erin invite form POSTs here)
- `rsvpSheetUrl` — Family Events Google Sheet (parents view RSVPs here)
- `rsvpEmail` — optional backup contact only (email is no longer the primary RSVP path)
- `erin10.schedule` — placeholder times for the `/plan/` itinerary
- `erin10.parentsNotes` — room booking, food package, what-to-bring notes
- `erin10.dateLabel` / `venue` / etc. if details change

Invite copy and imagery are in the HTML under `events/erin-10/`. Shared look-and-feel is in `css/styles.css`.

## RSVPs (Google Sheet)

Public RSVPs from `/events/erin-10/` POST JSON to the Apps Script endpoint in `js/config.js` (`rsvpEndpoint`). Rows land on the **Erin-10** tab of the Family Events spreadsheet:

**https://docs.google.com/spreadsheets/d/1-eUsuKFtIUPUZ_qp61BkogVzp8l8ENzQph9FJlSrde4/**

Columns: Timestamp, Name, Guests, RSVP, Notes, Source. Parents open that sheet to track who’s coming.

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
