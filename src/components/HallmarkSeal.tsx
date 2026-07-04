type HallmarkSealProps = {
  size?: number;
  className?: string;
  spin?: boolean;
};

export default function HallmarkSeal({
  size = 140,
  className = "",
  spin = true,
}: HallmarkSealProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className={spin ? "animate-[spin_32s_linear_infinite]" : ""}
      >
        <defs>
          <path
            id="seal-ring-path"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <text fontSize="10.2" letterSpacing="3.2" fill="currentColor">
          <textPath href="#seal-ring-path" startOffset="0%">
            BIS HALLMARK · 916 PURITY CERTIFIED · TRUST · PURITY · ELEGANCE ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-xl tracking-[0.15em]">SRJ</span>
      </div>
    </div>
  );
}
