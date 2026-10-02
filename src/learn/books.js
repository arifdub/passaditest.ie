/*
  ===========================================================================
  INTERACTIVE LEARNING — THE LIBRARY

  The workbook courses, separate from the question bank and mock tests.
  Those test; these teach. A book is a list of units; a unit is content in
  the shape the engine (engine.js) and the players (LearnScreens.jsx)
  understand — see book1/unit1_1.js for a complete one.

  Adding a unit is adding its content file and pointing `content` at it.
  Adding a book is adding an entry here. Nothing in the engine or the
  screens knows about any particular book.

  Unit titles and page ranges are as printed in the source workbook, so a
  unit can be audited against its pages.
  ===========================================================================
*/

import UNIT_1_1 from "./book1/unit1_1";
import UNIT_1_2 from "./book1/unit1_2";
import UNIT_1_3 from "./book1/unit1_3";
import UNIT_1_4 from "./book1/unit1_4";
import UNIT_1_5 from "./book1/unit1_5";
import UNIT_1_6 from "./book1/unit1_6";
import UNIT_1_7 from "./book1/unit1_7";
import UNIT_1_8 from "./book1/unit1_8";
import UNIT_1_9 from "./book1/unit1_9";
import GLOSSARY_1 from "./book1/glossary";

export const BOOKS = [
  {
    id: "b1",
    number: 1,
    title: "Driving Procedures & Road Safety",
    subtitle: "Book 1",
    source: "Resource Workbook, Book 1 — Driver Education Supplies",
    /* Where this book's record is stored — one progress module per book. */
    moduleId: "learn.b1",
    /* The visual glossary: every technical term the built units use. */
    glossary: GLOSSARY_1,
    units: [
      { id: "1.1",  title: "Dealing with Hazards",               pages: [25, 29], badge: "Hazard Spotter", content: UNIT_1_1 },
      { id: "1.2",  title: "Signals & Signalling",               pages: [30, 33], badge: "Signalling Specialist", content: UNIT_1_2 },
      { id: "1.3",  title: "Road Positioning",                   pages: [34, 39], badge: "Road Positioning Master", content: UNIT_1_3 },
      { id: "1.4",  title: "Junctions & Bends",                  pages: [40, 48], badge: "Junction Specialist", content: UNIT_1_4 },
      { id: "1.5",  title: "Dealing with Hills",                 pages: [49, 52], badge: "Hill Handler", content: UNIT_1_5 },
      { id: "1.6",  title: "Overtaking",                         pages: [53, 58], badge: "Overtaking Challenge", content: UNIT_1_6 },
      { id: "1.7",  title: "Level Crossings & Tramways",         pages: [59, 63], badge: "Crossings Specialist", content: UNIT_1_7 },
      { id: "1.8",  title: "Motorway Driving",                   pages: [64, 71], badge: "Motorway Specialist", content: UNIT_1_8 },
      { id: "1.9",  title: "Night Driving",                      pages: [72, 75], badge: "Night Driving Specialist", content: UNIT_1_9 },
      { id: "1.10", title: "Weather, Driver Vision & Its Effects", pages: [76, 81], badge: "All-Weather Driver" },
      { id: "1.11", title: "Driving in Tunnels",                 pages: [82, 83], badge: "Tunnel Specialist" },
    ],
  },
  { id: "b2", number: 2, title: "Book 2", subtitle: "Coming soon", units: [] },
  { id: "b3", number: 3, title: "Book 3", subtitle: "Coming soon", units: [] },
  { id: "b4", number: 4, title: "Book 4", subtitle: "Coming soon", units: [] },
];

export const BOOK_BY_ID = Object.fromEntries(BOOKS.map(b => [b.id, b]));

export function getUnit(bookId, unitId) {
  const book = BOOK_BY_ID[bookId];
  return book?.units.find(u => u.id === unitId) || null;
}
