/*
  The picture on a question — a road sign, usually.

  On a slow phone connection a PNG draws from the top down as it arrives, so a
  sign could show as its top third, or as an empty box, while the candidate
  was already reading the options. Here the picture stays hidden until it has
  fully loaded, with a placeholder holding its space, and a failed load offers
  a retry instead of a blank box.

  The box is white in both themes: the sign images have white backgrounds.
*/
import React, { useState, useEffect, useRef } from "react";
import { ImageOff, RotateCcw } from "lucide-react";

export default function QuestionImage({ src, className = "" }) {
  const [state, setState] = useState("loading");   // loading | ready | failed
  const [attempt, setAttempt] = useState(0);
  const img = useRef(null);

  useEffect(() => { setState("loading"); setAttempt(0); }, [src]);

  // Already in the browser cache: onLoad can fire before React attaches it.
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth > 0) setState("ready");
  }, [src, attempt]);

  const url = attempt ? `${src}${src.includes("?") ? "&" : "?"}r=${attempt}` : src;

  return (
    <div className={`relative bg-white border border-slate-200 dark:border-slate-700 rounded-2xl p-5 h-48 flex items-center justify-center ${className}`}>
      {state !== "failed" && (
        <img
          ref={img}
          key={url}
          src={url}
          alt=""
          decoding="async"
          onLoad={() => setState("ready")}
          onError={() => setState("failed")}
          className={`max-h-full max-w-full w-auto object-contain transition-opacity duration-150 ${
            state === "ready" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {state === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center" aria-label="Loading picture">
          <span className="w-8 h-8 rounded-full border-[3px] border-slate-200 border-t-emerald-500 animate-spin" />
        </div>
      )}

      {state === "failed" && (
        <button
          type="button"
          onClick={() => { setAttempt(a => a + 1); setState("loading"); }}
          className="flex flex-col items-center gap-2 text-sm font-semibold text-slate-500"
        >
          <ImageOff size={26} />
          <span>Picture didn't load</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600">
            <RotateCcw size={14} /> Tap to try again
          </span>
        </button>
      )}
    </div>
  );
}

/* Fetch pictures ahead of time, so the next ones are ready before they're
   needed. The browser keeps them in its cache. */
const warmed = new Set();
export function preloadImages(srcs) {
  for (const src of srcs) {
    if (!src || warmed.has(src)) continue;
    warmed.add(src);
    const im = new Image();
    im.decoding = "async";
    im.src = src;
  }
}
