"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const loaderWords = [
  "ABU SAYED",
  "UI/UX",
  "PRODUCT",
  "DESIGN",
  "FLOW",
  "PROTOTYPE",
  "INTERFACE",
  "RESEARCH",
  "SYSTEM",
  "MOBILE",
  "WEB",
  "HANDOFF",
];

const rows = Array.from({ length: 10 });
const columns = Array.from({ length: 12 });

// Change this one value to control the complete loader duration.
// Example: 0.5 = half a second, 1 = one second, 2 = two seconds.
const LOADER_TOTAL_SECONDS = 2.5;

const loaderTiming = {
  entrance: LOADER_TOTAL_SECONDS * 0.32,
  entranceStagger: LOADER_TOTAL_SECONDS * 0.1,
  loading: LOADER_TOTAL_SECONDS * 0.56,
  rowStart: LOADER_TOTAL_SECONDS * 0.04,
  progressStart: LOADER_TOTAL_SECONDS * 0.06,
  settle: LOADER_TOTAL_SECONDS * 0.1,
  settleStagger: LOADER_TOTAL_SECONDS * 0.03,
  wordsOut: LOADER_TOTAL_SECONDS * 0.16,
  wordsOutStagger: LOADER_TOTAL_SECONDS * 0.05,
  overlayOut: LOADER_TOTAL_SECONDS * 0.04,
};

const loaderLooks = [
  "loader-color-blue loader-font-sans",
  "loader-color-navy loader-font-mono",
  "loader-color-teal loader-font-serif italic",
  "loader-color-violet loader-font-sans",
  "loader-color-coral loader-font-mono",
  "loader-color-ink loader-font-serif",
];

export function PageLoader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.style.overflow = "hidden";

    if (reduceMotion) {
      const timeout = window.setTimeout(() => {
        document.body.style.overflow = previousOverflow;
        setIsVisible(false);
      }, LOADER_TOTAL_SECONDS * 1000);

      return () => {
        window.clearTimeout(timeout);
        document.body.style.overflow = previousOverflow;
      };
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
          setIsVisible(false);
        },
      });

      timeline
        .set(overlay, {
          opacity: 1,
          willChange: "opacity",
        })
        .set(".loader-word", {
          opacity: 0,
          y: 22,
          z: -36,
          rotateX: -42,
          rotateY: 5,
          willChange: "transform, opacity",
          transformOrigin: "50% 50%",
        })
        .set(".loader-row:nth-child(odd)", { xPercent: 2 })
        .set(".loader-row:nth-child(even)", { xPercent: -2 })
        .set(".loader-progress", { scaleX: 0, transformOrigin: "0% 50%" })
        .set(".loader-percent", { innerText: 0 })
        .to(".loader-word", {
          opacity: 0.88,
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          duration: loaderTiming.entrance,
          ease: "power3.out",
          stagger: {
            amount: loaderTiming.entranceStagger,
            from: "random",
          },
        })
        .to(
          ".loader-row:nth-child(odd)",
          { xPercent: -5, duration: loaderTiming.loading, ease: "sine.inOut" },
          loaderTiming.rowStart,
        )
        .to(
          ".loader-row:nth-child(even)",
          { xPercent: 5, duration: loaderTiming.loading, ease: "sine.inOut" },
          loaderTiming.rowStart,
        )
        .to(
          ".loader-progress",
          { scaleX: 1, duration: loaderTiming.loading, ease: "power2.inOut" },
          loaderTiming.progressStart,
        )
        .to(
          ".loader-percent",
          {
            innerText: 100,
            duration: loaderTiming.loading,
            ease: "power2.inOut",
            snap: { innerText: 1 },
          },
          loaderTiming.progressStart,
        )
        .to(".loader-word", {
          opacity: 1,
          scale: 1.018,
          z: 16,
          duration: loaderTiming.settle,
          ease: "sine.inOut",
          stagger: { amount: loaderTiming.settleStagger, from: "center" },
        })
        .to(".loader-word", {
          opacity: 0,
          y: -4,
          scale: 0.992,
          duration: loaderTiming.wordsOut,
          stagger: { amount: loaderTiming.wordsOutStagger, from: "random" },
          ease: "power2.inOut",
        })
        .to(overlay, {
          opacity: 0,
          duration: loaderTiming.overlayOut,
          ease: "sine.out",
        });
    }, overlay);

    return () => {
      context.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="loader-background fixed inset-0 z-[100] overflow-hidden text-slate-950"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-stage absolute inset-0 z-10 flex -rotate-3 flex-col justify-center gap-3 opacity-100">
        {rows.map((_, rowIndex) => (
          <div
            className="loader-row flex w-[132vw] -translate-x-[16vw] gap-4 whitespace-nowrap"
            key={rowIndex}
          >
            {columns.map((_, columnIndex) => {
              const word =
                loaderWords[(rowIndex * 3 + columnIndex) % loaderWords.length];
              const look =
                loaderLooks[(rowIndex + columnIndex) % loaderLooks.length];

              return (
                <span
                  className={`loader-word loader-word-3d text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-none tracking-normal ${look}`}
                  key={`${rowIndex}-${columnIndex}`}
                >
                  {word}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),rgba(247,251,255,0.06)_56%,rgba(247,251,255,0)_100%)]" />
      <div className="absolute inset-x-6 bottom-8 z-20 mx-auto grid max-w-xl gap-3 sm:bottom-10">
        <div className="flex items-end justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-800">
            Loading portfolio
          </p>
          <p className="font-mono text-sm font-black text-primary">
            <span className="loader-percent">0</span>%
          </p>
        </div>
        <div className="h-2 overflow-hidden rounded-full border border-white/60 bg-white/70 shadow-[0_12px_36px_rgba(31,74,105,0.16)]">
          <div className="loader-progress h-full rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
