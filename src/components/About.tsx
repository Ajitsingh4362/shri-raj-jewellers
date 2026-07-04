import Reveal from "./Reveal";
import HallmarkSeal from "./HallmarkSeal";

export default function About() {
  return (
    <section id="about" className="bg-ivory-dim py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
        <Reveal>
          <span className="text-gold text-xs tracking-[0.3em] uppercase">
            About the House
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mt-3 leading-snug">
            Every piece carries our name.
            <br />
            That&apos;s the only guarantee we need.
          </h2>
          <p className="text-ink/65 mt-6 max-w-lg leading-relaxed">
            Shri Raj Jewellers is a Tilak Nagar institution for gold, silver
            and diamond jewellery — from daily-wear pieces to full bridal
            sets. Every gold item leaving the store is BIS Hallmarked, so the
            purity on the bill matches the purity on the piece.
          </p>
          <div className="hairline w-24 mt-8" />
        </Reveal>

        <Reveal delay={120} className="flex justify-center">
          <HallmarkSeal size={180} className="text-maroon" />
        </Reveal>
      </div>
    </section>
  );
}
