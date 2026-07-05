"use client";

import { useEffect, useRef } from "react";
import HallmarkSeal from "./HallmarkSeal";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section
      id="top"
      className="relative bg-ink text-ivory overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background reel — drop the file at public/hero-reel.mp4 */}
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

      {/* Dark gold-tinted overlay so text stays legible over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90" />

      <div className="relative mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
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
    </section>
  );
}
