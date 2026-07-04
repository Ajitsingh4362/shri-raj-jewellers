import Reveal from "./Reveal";

export default function Offers() {
  return (
    <section id="offers" className="bg-maroon text-ivory py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Current Offer
            </span>
            <h2 className="font-display text-2xl sm:text-3xl mt-3">
              Ask us about making-charge offers
            </h2>
            <p className="text-ivory/70 text-sm sm:text-base mt-2 max-w-md">
              {/* NOTE for Ajit: swap this for the shop's live running offer —
              the "2% / 3% making charges till June" post in the screenshot
              looked time-bound and may already be over. */}
              Running offers on gold making charges change through the year.
              Message us on WhatsApp for this month&apos;s rate.
            </p>
          </div>
          <a
            href="https://wa.me/918586041111?text=Hi%2C%20what%27s%20the%20current%20offer%20on%20making%20charges%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 bg-gold text-ink font-medium tracking-wide hover:bg-gold-bright transition-colors"
          >
            Ask on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
