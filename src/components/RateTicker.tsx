import { rates } from "@/data/rates";

export default function RateTicker() {
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border border-gold/40 px-5 py-2.5 text-xs sm:text-sm text-ivory/85">
      <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
        Today&apos;s Rate
      </span>
      <span className="hidden sm:inline text-ivory/30">·</span>
      <span>Gold 24K ₹{rates.gold24k.toLocaleString("en-IN")}/g</span>
      <span className="text-ivory/30">·</span>
      <span>Gold 22K ₹{rates.gold22k.toLocaleString("en-IN")}/g</span>
      <span className="text-ivory/30">·</span>
      <span>Silver ₹{rates.silver.toLocaleString("en-IN")}/g</span>
      <span className="text-ivory/50 text-[10px] sm:text-xs w-full sm:w-auto text-center">
        Updated {rates.updatedOn}
      </span>
    </div>
  );
}
