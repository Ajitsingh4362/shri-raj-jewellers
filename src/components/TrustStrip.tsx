import { ShieldCheck, BadgeCheck, Gem, MapPin } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    label: "BIS Hallmark Certified",
  },
  {
    icon: BadgeCheck,
    label: "Verified Business",
  },
  {
    icon: Gem,
    label: "Gold · Silver · Diamond",
  },
  {
    icon: MapPin,
    label: "Tilak Nagar, New Delhi",
  },
];

export default function TrustStrip() {
  return (
    <section id="trust" className="bg-ivory-dim border-b border-gold/15">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left"
          >
            <Icon size={22} className="text-gold shrink-0" strokeWidth={1.6} />
            <span className="text-ink/80 text-xs sm:text-sm tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
