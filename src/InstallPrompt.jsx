/*
  ===========================================================================
  INSTALL PROMPT

  A pop-up that slides up from the bottom of the app's home screen and shows
  how to add the app to the home screen, with a bouncing arrow pointing at
  the button the visitor actually has to tap. That button is in a different
  place in every browser, so the arrow and the steps follow the browser:

    iPhone Safari      Share, bottom centre (with a note for the ••• layout)
    iPad Safari        Share, top right
    iPhone Chrome      Share in the address bar, top right
    Other iPhone apps  can't add to home screen, so: open it in Safari
    Android, prompt    a real Install button (the browser's own dialog)
    Android Chrome     ⋮ menu, top right
    Android Firefox    ⋮ menu, top right
    Android Edge       ••• menu, bottom bar
    Samsung Internet   ☰ menu, bottom right

  When the arrow points up at the address bar, the pop-up drops down from
  the top instead, so it sits right under the button it describes.

  Not shown once installed, on desktop, or for 14 days after it's closed.
  The Settings screen keeps its Install card for anyone who closed it.
  ===========================================================================
*/

import React, { useState, useEffect } from "react";
import {
  X, Share, PlusSquare, MoreVertical, Menu, ArrowDown, ArrowUp,
  Download, Smartphone,
} from "lucide-react";
import usePwaInstall from "./usePwaInstall";

const DISMISS_KEY = "pdt-install-dismissed";
const DISMISS_DAYS = 14;

function recentlyDismissed() {
  try {
    const at = Number(localStorage.getItem(DISMISS_KEY));
    return at && Date.now() - at < DISMISS_DAYS * 86400000;
  } catch {
    return false;
  }
}

/* Small inline "button" chip, so the steps show what to look for. */
function Key({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1 align-middle rounded-md bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
      {Icon && <Icon size={14} className="text-blue-500" />}
      {children}
    </span>
  );
}

/* What to say and where to point, for this browser. null = show nothing. */
function guideFor({ state, browser, isIPad, safariMajor }) {
  if (state === "installed") return null;

  if (state === "prompt") {
    return {
      arrow: null,
      title: "Install the app",
      intro: "Add PassADITest to your home screen. It opens full screen, like any other app, and works offline.",
      install: true,
    };
  }

  switch (browser) {
    case "ios-safari":
      if (isIPad) {
        return {
          arrow: "top-right",
          title: "Add to your Home Screen",
          steps: [
            <>Tap <Key icon={Share}>Share</Key> at the top right.</>,
            <>Choose <Key icon={PlusSquare}>Add to Home Screen</Key>.</>,
            <>Tap <b>Add</b>.</>,
          ],
        };
      }
      /* Safari 26 can put Share in the middle of the bottom bar or behind
         ••• at the bottom right, depending on the Tabs layout chosen in
         Settings, and a web page can't tell which. The middle is the
         classic spot and the one most people have, so the arrow goes
         there and the ••• layout gets a note. */
      return {
        arrow: "bottom-center",
        title: "Add to your Home Screen",
        steps: [
          <>Tap <Key icon={Share}>Share</Key> in the bar below.{safariMajor >= 26 && <> No Share button? Tap <Key>•••</Key> first.</>}</>,
          <>Scroll down and choose <Key icon={PlusSquare}>Add to Home Screen</Key>{safariMajor >= 26 && <> (under <b>View More</b>)</>}.</>,
          <>Tap <b>Add</b>.</>,
        ],
      };

    case "ios-chrome":
      return {
        arrow: "top-right",
        title: "Add to your Home Screen",
        steps: [
          <>Tap <Key icon={Share}>Share</Key> in the address bar, top right.</>,
          <>Choose <Key icon={PlusSquare}>Add to Home Screen</Key>.</>,
          <>Tap <b>Add</b>.</>,
        ],
      };

    case "ios-other":
      return {
        arrow: null,
        title: "Add to your Home Screen",
        intro: "On iPhone this works best from Safari. Open passaditest.ie/app in Safari, then tap Share and choose Add to Home Screen.",
      };

    case "android-samsung":
      return {
        arrow: "bottom-right",
        title: "Install the app",
        steps: [
          <>Tap the <Key icon={Menu}>menu</Key> at the bottom right.</>,
          <>Choose <b>Add page to</b>, then <b>Home screen</b>.</>,
          <>Tap <b>Add</b>.</>,
        ],
      };

    case "android-edge":
      return {
        arrow: "bottom-center",
        title: "Install the app",
        steps: [
          <>Tap the <Key>•••</Key> menu below.</>,
          <>Choose <b>Add to phone</b> or <b>Add to Home screen</b>.</>,
          <>Tap <b>Install</b> or <b>Add</b>.</>,
        ],
      };

    case "android-chrome":
    case "android-firefox":
      return {
        arrow: "top-right",
        title: "Install the app",
        steps: [
          <>Tap the <Key icon={MoreVertical}>menu</Key> at the top right.</>,
          <>Choose <b>Install app</b> or <b>Add to Home screen</b>.</>,
          <>Tap <b>Install</b>.</>,
        ],
      };

    default:
      return null;
  }
}

export default function InstallPrompt() {
  const pwa = usePwaInstall();
  const guide = guideFor(pwa);
  const [open, setOpen] = useState(false);

  /* A short pause so the home screen has landed first — a sheet that
     appears with the page reads as an ad rather than as help. */
  useEffect(() => {
    if (!guide || recentlyDismissed()) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
    // Only the presence of a guide matters; its contents are rebuilt each render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(guide)]);

  if (!open || !guide) return null;

  const close = () => {
    setOpen(false);
    try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch { /* ignore */ }
  };

  const install = async () => {
    const { ok } = await pwa.promptInstall();
    if (ok) setOpen(false);
  };

  const arrowAtBottom = guide.arrow === "bottom-center" || guide.arrow === "bottom-right";
  const arrowAtTop = guide.arrow === "top-right";

  return (
    <>
      {/* Dim the page, tab bar included, so the arrow reads as pointing past
          the app at the browser's own toolbar rather than at a tab. Tapping
          it closes, like any bottom sheet. */}
      <div className="fixed inset-0 z-[60] bg-slate-900/55 install-fade" onClick={close} />

      {guide.arrow && (
        <div
          className={`fixed z-[70] pointer-events-none text-emerald-400 drop-shadow-lg ${
            guide.arrow === "bottom-center" ? "left-1/2 -translate-x-1/2"
              : "right-4"
          }`}
          style={
            arrowAtBottom
              ? { bottom: "max(4px, env(safe-area-inset-bottom))" }
              : { top: "max(6px, env(safe-area-inset-top))" }
          }
          aria-hidden="true"
        >
          <div className="animate-bounce">
            {arrowAtBottom
              ? <ArrowDown size={44} strokeWidth={3} />
              : <ArrowUp size={44} strokeWidth={3} />}
          </div>
        </div>
      )}

      <div
        role="dialog"
        aria-labelledby="install-title"
        className={`fixed inset-x-0 z-[70] px-3 ${arrowAtTop ? "install-slide-down" : "install-slide-up"}`}
        style={
          arrowAtTop
            /* Under the arrow, which points up at the address bar. */
            ? { top: "calc(max(6px, env(safe-area-inset-top)) + 56px)" }
            /* Leave room below for the arrow when it points down at the
               browser's own toolbar. */
            : {
                bottom: arrowAtBottom
                  ? "calc(max(4px, env(safe-area-inset-bottom)) + 56px)"
                  : "max(12px, env(safe-area-inset-bottom))",
              }
        }
      >
        <div className="relative max-w-md mx-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-5">
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 pr-10">
            <img src="/apple-touch-icon.png" alt="" width="48" height="48" className="w-12 h-12 rounded-xl shrink-0" />
            <div>
              <h2 id="install-title" className="font-bold text-slate-900 dark:text-white leading-tight">
                {guide.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Free · no App Store needed
              </p>
            </div>
          </div>

          {guide.intro && (
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {guide.intro}
            </p>
          )}

          {guide.steps && (
            <ol className="mt-4 space-y-2.5">
              {guide.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed pt-0.5">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          )}

          {guide.install ? (
            <button
              onClick={install}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 rounded-xl transition"
            >
              <Download size={16} /> Install
            </button>
          ) : (
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <Smartphone size={14} className="shrink-0" />
              It opens full screen with its own icon, and works offline.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
