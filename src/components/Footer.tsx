import { InstagramMark } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/60">
      <div className="hairline" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-display text-ivory tracking-[0.15em] text-sm">
          SHRI RAJ <span className="text-gold">JEWELLERS</span>
        </span>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#collections" className="hover:text-gold transition-colors">
            Collections
          </a>
          <a href="#trust" className="hover:text-gold transition-colors">
            Certification
          </a>
          <a href="#visit" className="hover:text-gold transition-colors">
            Visit &amp; Contact
          </a>
        </nav>

        <a
          href="https://instagram.com/shrirajjewellers_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gold transition-colors"
        >
          <InstagramMark size={18} />
        </a>
      </div>
      <div className="text-center text-xs text-ivory/35 pb-6">
        © {new Date().getFullYear()} Shri Raj Jewellers · Site by Zentrycs
        Technology
      </div>
    </footer>
  );
}
