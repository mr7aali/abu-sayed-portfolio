"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from(".site-header-animate", {
        autoAlpha: 0,
        y: -16,
        duration: 0.55,
        ease: "power3.out",
      });

      gsap.from(".hero-scroll-copy > *", {
        autoAlpha: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.15,
      });

      gsap.from(".hero-scroll-media", {
        autoAlpha: 0,
        y: 36,
        scale: 0.97,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.22,
      });

      gsap.to(".hero-scroll-media", {
        y: -36,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
        const cards = section.querySelectorAll("[data-slot='card']");

        gsap.fromTo(
          section,
          {
            y: 44,
          },
          {
            y: 0,
            clearProps: "transform",
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          },
        );

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              y: 22,
              scale: 0.985,
            },
            {
              y: 0,
              scale: 1,
              clearProps: "transform",
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.05,
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".project-thumb").forEach((thumb) => {
        gsap.fromTo(
          thumb,
          {
            y: 28,
            scale: 0.985,
          },
          {
            y: 0,
            scale: 1,
            clearProps: "transform",
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: thumb,
              start: "top 92%",
              once: true,
            },
          },
        );
      });
    });

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
