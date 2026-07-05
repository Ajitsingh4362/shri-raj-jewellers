"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import {
  categories,
  items,
  categoryTint,
  categoryImage,
  type Category,
} from "@/data/collectionItems";

export default function Collections() {
  const [active, setActive] = useState<Category>("All");
  const visible =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="collections" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">
            Our Collections
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">
            Browse by craft
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs sm:text-sm tracking-wide border transition-colors cursor-pointer ${
                active === c
                  ? "bg-ink text-ivory border-ink"
                  : "border-ink/15 text-ink/60 hover:border-gold/50 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 70}>
              <div
                className={`group relative h-full overflow-hidden border border-ink/10 hover:border-gold/50 transition-colors flex flex-col bg-gradient-to-br ${categoryTint[item.category]} via-white/70 to-white`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink/5">
                  <img
                    src={categoryImage[item.category]}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 w-11 h-11 rounded-full border border-gold/70 bg-ink/60 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                <div className="p-7 flex flex-col grow">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-stone">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg mt-1">{item.title}</h3>
                  <p className="text-sm text-ink/60 mt-2 leading-relaxed grow">
                    {item.desc}
                  </p>
                  <a
                    href={`https://wa.me/918586041111?text=${encodeURIComponent(
                      `Hi, I'm interested in your ${item.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-xs tracking-[0.2em] uppercase text-ink/70 group-hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    Enquire <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
