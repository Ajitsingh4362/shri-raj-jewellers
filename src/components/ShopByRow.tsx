type RowItem = {
  title: string;
  image?: string;
};

export default function ShopByRow({
  items,
  direction = "left",
  speed = 32,
  accent = "border-gold/60 hover:border-gold",
}: {
  items: RowItem[];
  direction?: "left" | "right";
  speed?: number;
  accent?: string;
}) {
  const track = [...items, ...items]; // duplicated for a seamless loop

  return (
    <div className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="marquee-track flex w-max gap-8 sm:gap-10"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <a
            key={`${item.title}-${i}`}
            href="#collections"
            className="group flex flex-col items-center gap-3 w-24 sm:w-28 shrink-0"
          >
            <span
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 ${accent} overflow-hidden bg-ivory-dim transition-colors block`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
            </span>
            <span className="text-xs sm:text-sm text-ink/75 group-hover:text-gold text-center tracking-wide transition-colors">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
