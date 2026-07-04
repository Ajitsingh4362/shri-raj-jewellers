import { InstagramMark } from "./Icons";
import Reveal from "./Reveal";

export default function InstagramCTA() {
  return (
    <section className="bg-ivory py-16 sm:py-20 border-y border-gold/15">
      <Reveal className="mx-auto max-w-3xl px-6 text-center flex flex-col items-center">
        <InstagramMark size={26} className="text-gold" />
        <h2 className="font-display text-2xl sm:text-3xl mt-4">
          New arrivals, first on Instagram
        </h2>
        <p className="text-ink/60 mt-2">
          New designs, offers and reels — follow{" "}
          <span className="text-ink/80">@shrirajjewellers_</span>
        </p>
        <a
          href="https://instagram.com/shrirajjewellers_"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-ink transition-colors text-sm tracking-wide px-6 py-3"
        >
          Follow on Instagram
        </a>
      </Reveal>
    </section>
  );
}
