import Reveal from "./Reveal";
import {
  BangleIcon,
  RingIcon,
  NecklaceIcon,
  BridalSetIcon,
} from "./JewelleryIcons";

const collections = [
  {
    icon: RingIcon,
    title: "Diamond Jewellery",
    desc: "Certified diamond rings, pendants and earrings for everyday sparkle.",
    query: "Diamond Jewellery",
  },
  {
    icon: BangleIcon,
    title: "Gold Jewellery",
    desc: "Hallmarked gold bangles, chains and sets in traditional and modern designs.",
    query: "Gold Jewellery",
  },
  {
    icon: NecklaceIcon,
    title: "Silver Jewellery",
    desc: "Silver necklaces, anklets and gifting pieces, priced by the day's rate.",
    query: "Silver Jewellery",
  },
  {
    icon: BridalSetIcon,
    title: "Bridal Collection",
    desc: "Complete bridal sets — necklace, maang tikka and earrings, made to match.",
    query: "Bridal Collection",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">
            Our Collections
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">
            Four crafts, one house
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="group h-full border border-ink/10 bg-white/40 hover:border-gold/50 hover:bg-white transition-colors p-7 flex flex-col">
                <c.icon className="w-10 h-10 text-gold" />
                <h3 className="font-display text-lg mt-6">{c.title}</h3>
                <p className="text-sm text-ink/60 mt-2 leading-relaxed grow">
                  {c.desc}
                </p>
                <a
                  href={`https://wa.me/918586041111?text=${encodeURIComponent(
                    `Hi, I'm interested in your ${c.query}.`
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
