"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import {
  BangleIcon,
  RingIcon,
  NecklaceIcon,
  BridalSetIcon,
  EarringIcon,
  ChainIcon,
  PendantIcon,
  AnkletIcon,
  CoinIcon,
  TempleIcon,
} from "./JewelleryIcons";

const categories = ["All", "Gold", "Silver", "Diamond", "Bridal"] as const;
type Category = (typeof categories)[number];

const items: {
  icon: typeof BangleIcon;
  title: string;
  category: Exclude<Category, "All">;
  desc: string;
}[] = [
  {
    icon: BangleIcon,
    title: "Gold Bangles",
    category: "Gold",
    desc: "Hallmarked kadas and bangles, plain or stone-studded.",
  },
  {
    icon: ChainIcon,
    title: "Gold Chains",
    category: "Gold",
    desc: "Everyday and festive chains in classic and modern links.",
  },
  {
    icon: EarringIcon,
    title: "Gold Earrings",
    category: "Gold",
    desc: "Jhumkas, studs and chandbalis for daily wear to festive.",
  },
  {
    icon: CoinIcon,
    title: "Gold Coins",
    category: "Gold",
    desc: "Hallmarked coins for gifting and auspicious occasions.",
  },
  {
    icon: AnkletIcon,
    title: "Silver Anklets",
    category: "Silver",
    desc: "Payal and anklets in traditional ghungroo styles.",
  },
  {
    icon: NecklaceIcon,
    title: "Silver Necklaces",
    category: "Silver",
    desc: "Silver necklaces and chains, priced by the day's rate.",
  },
  {
    icon: CoinIcon,
    title: "Silver Gifting",
    category: "Silver",
    desc: "Silver coins and gift items for pujas and celebrations.",
  },
  {
    icon: RingIcon,
    title: "Diamond Rings",
    category: "Diamond",
    desc: "Certified diamond rings for engagements and everyday sparkle.",
  },
  {
    icon: PendantIcon,
    title: "Diamond Pendants",
    category: "Diamond",
    desc: "Solitaire and cluster pendants on fine gold chains.",
  },
  {
    icon: EarringIcon,
    title: "Diamond Earrings",
    category: "Diamond",
    desc: "Diamond studs and drops, certified for purity and cut.",
  },
  {
    icon: BridalSetIcon,
    title: "Bridal Necklace Sets",
    category: "Bridal",
    desc: "Complete sets — necklace, maang tikka and earrings, made to match.",
  },
  {
    icon: TempleIcon,
    title: "Temple Jewellery",
    category: "Bridal",
    desc: "Temple-style chokers and sets for weddings and functions.",
  },
  {
    icon: EarringIcon,
    title: "Maang Tikka & Earrings",
    category: "Bridal",
    desc: "Matching earring and maang tikka sets for the bridal look.",
  },
];

const categoryTint: Record<Exclude<Category, "All">, string> = {
  Gold: "from-[#b08d3e]/[0.09]",
  Silver: "from-slate-400/[0.09]",
  Diamond: "from-sky-200/[0.15]",
  Bridal: "from-[#6e1423]/[0.08]",
};

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
                className={`group relative h-full overflow-hidden border border-ink/10 hover:border-gold/50 transition-colors p-7 flex flex-col bg-gradient-to-br ${categoryTint[item.category]} via-white/70 to-white`}
              >
                <div className="relative w-16 h-16 rounded-full border border-gold/40 group-hover:border-gold flex items-center justify-center transition-colors">
                  <div className="absolute inset-1.5 rounded-full border border-gold/20" />
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone mt-5">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
