/* ============================================================
   FAMILY EVENTS — editable config
   Parents: change values here; pages read them at load time.
   ============================================================ */
window.FAMILY_EVENTS = {
  theme: "soccer",
  // RSVPs POST to Google Apps Script → Family Events sheet (tab Erin-10)
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbwP43bO_yOqdt7JxNN6zkLs0iiaXP6_bTn5beueQbfEZ5baLNXMFcJD34cmMB3yelegzw/exec",
  rsvpSheetUrl: "https://docs.google.com/spreadsheets/d/1-eUsuKFtIUPUZ_qp61BkogVzp8l8ENzQph9FJlSrde4/",
  rsvpEmail: "rsvp@example.com", // optional backup contact (email is no longer the primary RSVP path)
  erin10: {
    celebrant: "Erin",
    age: 10,
    dateLabel: "Sunday, September 27, 2026 at 5:00 PM",
    dateISO: "2026-09-27",
    venue: "Pins & Pockets",
    city: "Lake Elsinore, California",
    venueDetail: "Bowling · Arcade · Private party rooms",
    // Placeholder party-day times (edit freely — used on /plan/)
    schedule: [
      { id: "outreach",  time: "Now – Sept 20", label: "Invite friends", note: "Send invites & track RSVPs" },
      { id: "arrival",   time: "5:00 PM",       label: "Arrival / check-in", note: "Meet at the private party room" },
      { id: "food",      time: "5:20 PM",       label: "Food", note: "Party food package served" },
      { id: "cake",      time: "5:50 PM",       label: "Cake + birthday song", note: "Candles, song, photos" },
      { id: "bowling",   time: "6:10 PM",       label: "Bowling", note: "Lanes reserved for the party" },
      { id: "arcade",    time: "7:00 PM",       label: "Arcade", note: "Game cards / tokens for guests" },
      { id: "presents",  time: "7:45 PM",       label: "Presents", note: "Open gifts in the party room" },
      { id: "sendoff",   time: "8:15 PM",       label: "Goodie bags / send-off", note: "Thank guests & hand out bags" }
    ],
    parentsNotes: {
      roomBooking: "Confirm private party room reservation under family name; arrive 15 min early for setup.",
      foodPackage: "Order the kids party food package (pizza + drinks). Confirm headcount by Sept 20.",
      whatToBring: "Cake + candles, goodie bags, gift table supplies, camera/phone charger, cash tip for staff."
    },
    // Planning checklist — parents-only (/plan/). Flip done:true when finished.
    planningNotes: {
      guestList: [
        { name: "Presley", done: false },
        { name: "McKenzie", done: false },
        { name: "Ava", done: false },
        { name: "Emma", done: false },
        { name: "Stella", done: false },
        { name: "Family", done: false }
      ],
      todos: [
        { label: "Cake — chocolate", done: false },
        { label: "Goodie bags", done: false },
        { label: "Goodie bag fill: Snickers, fidgets, Starburst", done: false }
      ]
    }
  }
};
