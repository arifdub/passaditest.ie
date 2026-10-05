/*
  The app scrolls inside its own frame (#app-scroll in App.jsx), not the
  page. On iPhone Safari a page-level scroll lets the browser's toolbar
  resize the viewport mid-scroll, which drags position:fixed bars (the tab
  bar) along with the content. With the document never scrolling, there's
  nothing for them to move with.

  Use this instead of window.scrollTo to get back to the top of a screen.
*/
export function scrollAppToTop() {
  const el = document.getElementById("app-scroll");
  if (el) el.scrollTop = 0;
  else window.scrollTo(0, 0);
}
