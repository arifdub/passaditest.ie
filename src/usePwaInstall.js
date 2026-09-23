/*
  ===========================================================================
  PWA INSTALL

  Tells the app which of four situations it's in:

    installed  — already running from the home screen, nothing to offer
    prompt     — Android / Chrome / Edge, where the browser will show a real
                 install dialog when we ask it to
    ios        — iPhone or iPad Safari, which has no install API at all, so
                 the only option is telling them where the button is
    desktop    — everything else; installable in some browsers, not worth a
                 pushy prompt

  It also reports which browser this is (`browser`), so the install pop-up
  can point at the right button: Safari's Share button, Chrome's ⋮ menu,
  Samsung Internet's ☰ menu, and so on.

  The Android side works by catching `beforeinstallprompt`, which fires once
  and only if the browser considers the site installable. We stash the event
  and fire it later when the user actually taps the button — the browser
  won't let us call it from anywhere else.

  The listener is attached when this module loads, not when a component
  mounts. The event can fire while someone is still on the login screen, and
  a listener that only exists once Settings or the home screen is showing
  would miss it for the rest of the visit.

  This needs public/manifest.json and public/sw.js, which the project already
  has from v3.1.
  ===========================================================================
*/

import { useState, useEffect, useCallback } from "react";

/* ---- captured once, shared by every component using the hook ---- */
let deferredEvent = null;
let installedFlag = false;
const listeners = new Set();
const notify = () => listeners.forEach(fn => fn());

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    // Stop Chrome's own mini-infobar so our prompt is the only place this
    // is offered.
    e.preventDefault();
    deferredEvent = e;
    notify();
  });
  window.addEventListener("appinstalled", () => {
    installedFlag = true;
    deferredEvent = null;
    notify();
  });
}

function detectStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari uses its own non-standard flag rather than display-mode.
    window.navigator.standalone === true
  );
}

function detectIOS() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const isIPhoneOrIPod = /iPhone|iPod/.test(ua);
  // iPadOS 13+ reports itself as a Mac, so a Mac with a touchscreen is an
  // iPad. Real Macs report maxTouchPoints of 0.
  const isIPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  return isIPhoneOrIPod || isIPad;
}

/* Which browser, as far as the install instructions care.

     ios-safari      Share button at the bottom (iPhone) or top right (iPad).
                     From Safari 26 the iPhone toolbar hides Share behind •••.
     ios-chrome      Share button in the address bar, top right.
     ios-other       Firefox, Edge and the rest on iPhone: send them to Safari.
     android-chrome  ⋮ menu, top right. Also covers Opera and unknown ones.
     android-edge    ••• menu in the bottom bar.
     android-samsung ☰ menu, bottom right.
     android-firefox ⋮ menu, top right.
     desktop         nothing to point at. */
export function detectBrowser() {
  if (typeof navigator === "undefined") return { browser: "desktop" };
  const ua = navigator.userAgent || "";

  if (detectIOS()) {
    const isIPad = /iPad/.test(ua) || /Macintosh/.test(ua);
    if (/CriOS/.test(ua)) return { browser: "ios-chrome", isIPad };
    if (/FxiOS|EdgiOS|OPiOS|YaBrowser|DuckDuckGo|GSA\//.test(ua)) {
      return { browser: "ios-other", isIPad };
    }
    const m = ua.match(/Version\/(\d+)/);
    return { browser: "ios-safari", isIPad, safariMajor: m ? Number(m[1]) : 0 };
  }

  if (/Android/.test(ua)) {
    if (/SamsungBrowser/.test(ua)) return { browser: "android-samsung" };
    if (/EdgA/.test(ua)) return { browser: "android-edge" };
    if (/Firefox/.test(ua)) return { browser: "android-firefox" };
    return { browser: "android-chrome" };
  }

  return { browser: "desktop" };
}

export default function usePwaInstall() {
  const [, force] = useState(0);
  const [standalone] = useState(detectStandalone);
  const [isIOS] = useState(detectIOS);
  const [info] = useState(detectBrowser);

  useEffect(() => {
    const fn = () => force(n => n + 1);
    listeners.add(fn);
    return () => listeners.delete(fn);
  }, []);

  const promptInstall = useCallback(async () => {
    const e = deferredEvent;
    if (!e) return { ok: false };
    e.prompt();
    const { outcome } = await e.userChoice;
    // The event can only be used once, whatever they chose.
    deferredEvent = null;
    notify();
    return { ok: outcome === "accepted" };
  }, []);

  const installed = standalone || installedFlag;
  const state = installed
    ? "installed"
    : deferredEvent
      ? "prompt"
      : isIOS
        ? "ios"
        : "desktop";

  return { state, promptInstall, ...info };
}
