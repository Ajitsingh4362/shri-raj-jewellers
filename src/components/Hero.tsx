"use client";

import { useEffect, useRef, useState } from "react";
import HallmarkSeal from "./HallmarkSeal";

// Slide 0: pure video, fully transparent overlay, no text.
// Slide 1: dark overlay fades in with the brand text + CTAs on top.
const SLIDE_DURATIONS = [4500, 8000] as const;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotionRef = useRef(false);
  const [slide, setSlide] = useState<0 | 1>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    reducedMotionRef.current = prefersReduced;
    if (prefersReduced) {
      videoRef.current?.pause();
      // Syncing a browser-only API (matchMedia) after mount; this has to
      // run post-hydration to avoid a server/client mismatch, so it can't
      // be moved into render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSlide(1);
    }
  }, []);

  useEffect(() => {
    if (reducedMotionRef.current) return; // don't auto-cycle slides
    const timer = setTimeout(() => {
      setSlide((s) => (s === 0 ? 1 : 0));
    }, SLIDE_DURATIONS[slide]);
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <section
      id="top"
      className="relative bg-ink text-ivory overflow-hidden h-screen min-h-[560px]"
    >
      {/* Background reel — plays continuously across both slides */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — fully transparent on slide 0, fades in for slide 1 */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90 transition-opacity duration-1000 ${
          slide === 1 ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative h-full mx-auto max-w-5xl px-6 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
          slide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-gold text-xs sm:text-sm tracking-[0.35em] uppercase mb-6">
          Tilak Nagar · New Delhi
        </span>

        <h1 className="font-display leading-[1.08] text-5xl sm:text-6xl md:text-7xl">
          Shri Raj
          <br />
          <span className="text-gold">Jewellers</span>
        </h1>

        <div className="mt-7 flex items-center gap-3 text-ivory/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
          <span className="h-px w-8 bg-gold/60" />
          Trust · Purity · Elegance
          <span className="h-px w-8 bg-gold/60" />
        </div>

        <div className="mt-10 text-gold">
          <HallmarkSeal size={128} />
        </div>

        <p className="mt-8 max-w-xl text-ivory/70 text-base sm:text-lg leading-relaxed">
          BIS Hallmarked gold, silver and diamond jewellery, for weddings,
          festivals and everyday elegance — near Metro Gate No. 1, Tilak
          Nagar.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://wa.me/918586041111"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-gold text-ink font-medium tracking-wide hover:bg-gold-bright transition-colors text-center"
          >
            Enquire on WhatsApp
          </a>
          <a
            href="tel:+918586041111"
            className="w-full sm:w-auto px-7 py-3.5 border border-ivory/30 text-ivory tracking-wide hover:border-gold hover:text-gold transition-colors text-center"
          >
            Call the Store
          </a>
        </div>
      </div>

      {/* Slide indicators — always visible, tappable to jump directly */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-10">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setSlide(i as 0 | 1)}
            aria-label={i === 0 ? "Show video" : "Show details"}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              slide === i ? "w-6 bg-gold" : "w-1.5 bg-ivory/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
