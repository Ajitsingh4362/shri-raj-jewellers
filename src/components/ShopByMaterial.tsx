import Reveal from "./Reveal";
import ShopByRow from "./ShopByRow";
import { items, categorySubtitle, type SubCategory } from "@/data/collectionItems";

const rowOrder: SubCategory[] = ["Diamond", "Gold", "Silver", "Bridal"];

export default function ShopByMaterial() {
  return (
    <section className="bg-ivory-dim py-16 sm:py-20 border-b border-gold/15">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-10">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">
            Shop By Material
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mt-3">
            Everything, at a glance
          </h2>
        </Reveal>
      </div>

      <div className="space-y-10">
        {rowOrder.map((cat, i) => {
          const rowItems = items
            .filter((item) => item.category === cat)
            .map((item) => ({ icon: item.icon, title: item.title }));

          return (
            <Reveal key={cat} delay={i * 90}>
              <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-baseline justify-between mb-3">
                <div>
                  <span className="text-gold text-[10px] tracking-[0.25em] uppercase">
                    {categorySubtitle[cat]}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl mt-0.5">
                    Shop By {cat}
                  </h3>
                </div>
                <a
                  href="#collections"
                  className="text-xs tracking-[0.2em] uppercase text-ink/60 hover:text-gold transition-colors border-b border-ink/20 hover:border-gold pb-0.5"
                >
                  View All
                </a>
              </div>
              <ShopByRow
                items={rowItems}
                direction={i % 2 === 0 ? "left" : "right"}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
