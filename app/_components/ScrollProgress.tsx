"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? scrollTop / scrollable : 0;

      setProgress(Math.min(Math.max(nextProgress, 0), 1));
      setShowButton(scrollTop > 220);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full origin-left bg-primary shadow-[0_0_20px_rgba(15,141,232,0.45)] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[70] grid size-12 place-items-center rounded-full border border-white/70 bg-primary text-white shadow-[0_18px_42px_rgba(15,141,232,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-primary/30 ${
          showButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp aria-hidden="true" className="size-5" />
      </button>
    </>
  );
}
