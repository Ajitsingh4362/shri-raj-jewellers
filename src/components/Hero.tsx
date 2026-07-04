import HallmarkSeal from "./HallmarkSeal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink text-ivory overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* subtle faceted-cut texture, evokes cut stones without using photography */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 42px, var(--color-gold) 42px 43px), repeating-linear-gradient(25deg, transparent 0 42px, var(--color-gold) 42px 43px)",
        }}
      />
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
