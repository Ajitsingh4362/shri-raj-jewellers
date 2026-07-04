"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#collections", label: "Collections" },
  { href: "#trust", label: "Certification" },
  { href: "#offers", label: "Offers" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit & Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/95 backdrop-blur border-b border-gold/20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-ivory text-base sm:text-lg tracking-[0.15em]"
        >
          SHRI RAJ <span className="text-gold">JEWELLERS</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ivory/75 hover:text-gold text-sm tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/918586041111"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-ink transition-colors text-sm tracking-wide px-4 py-2"
        >
          Enquire on WhatsApp
        </a>

        <button
          className="lg:hidden text-ivory p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-gold/20 px-5 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ivory/80 text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/918586041111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-sm tracking-wide pt-2 border-t border-gold/10"
          >
            Enquire on WhatsApp →
          </a>
        </div>
      )}
    </header>
  );
}
