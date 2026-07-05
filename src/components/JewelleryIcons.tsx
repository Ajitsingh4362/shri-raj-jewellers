type IconProps = {
  className?: string;
};

export function BangleIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <ellipse cx="32" cy="30" rx="22" ry="20" />
      <ellipse cx="32" cy="30" rx="16" ry="14" />
      <ellipse cx="32" cy="40" rx="22" ry="20" opacity="0.55" />
      <ellipse cx="32" cy="40" rx="16" ry="14" opacity="0.55" />
    </svg>
  );
}

export function RingIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="32" cy="38" r="17" />
      <path d="M32 21 L24 8 L32 3 L40 8 Z" />
      <path d="M24 8 L32 15 L40 8" />
      <path d="M32 3 L32 15" opacity="0.6" />
    </svg>
  );
}

export function NecklaceIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M8 10 C8 34, 24 40, 32 40 C40 40, 56 34, 56 10" />
      <path d="M26 26 L32 40 L38 26" />
      <circle cx="32" cy="43" r="4.5" />
    </svg>
  );
}

export function BridalSetIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M10 22 C10 12, 54 12, 54 22" />
      <path d="M18 22 L20 34" />
      <path d="M32 22 L32 38" />
      <path d="M46 22 L44 34" />
      <circle cx="20" cy="37" r="2.2" />
      <circle cx="32" cy="41" r="2.6" />
      <circle cx="44" cy="37" r="2.2" />
    </svg>
  );
}

export function EarringIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="32" cy="14" r="4.5" />
      <path d="M32 18.5 L32 26" />
      <path d="M20 26 C20 40, 44 40, 44 26 Z" />
      <circle cx="26" cy="34" r="1.6" />
      <circle cx="32" cy="37" r="1.6" />
      <circle cx="38" cy="34" r="1.6" />
    </svg>
  );
}

export function ChainIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M6 20 C6 40, 58 40, 58 20" />
      <path d="M6 20 C6 8, 58 8, 58 20" opacity="0.5" />
      {[14, 24, 34, 44, 54].map((x) => (
        <circle key={x} cx={x} cy={x <= 34 ? 30 - Math.abs(x - 32) * 0.15 : 30} r="2.4" />
      ))}
    </svg>
  );
}

export function PendantIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M10 12 C10 22, 24 26, 32 26 C40 26, 54 22, 54 12" />
      <path d="M32 26 L32 34" />
      <path d="M24 40 L32 34 L40 40 L32 50 Z" />
    </svg>
  );
}

export function AnkletIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <ellipse cx="32" cy="32" rx="26" ry="14" />
      {[8, 20, 32, 44, 56].map((x) => (
        <circle key={x} cx={x} cy={32 + Math.pow((x - 32) / 26, 2) * 12} r="1.8" />
      ))}
    </svg>
  );
}

export function CoinIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="16" />
      <path d="M32 22 L34.5 29 L42 29 L36 33.5 L38.3 41 L32 36.5 L25.7 41 L28 33.5 L22 29 L29.5 29 Z" />
    </svg>
  );
}

export function TempleIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M8 24 C8 15, 56 15, 56 24" />
      <path d="M8 24 L10 30 C20 34, 44 34, 54 30 L56 24" />
      {[16, 24, 32, 40, 48].map((x) => (
        <path key={x} d={`M${x} 31 L${x} 38`} />
      ))}
      {[16, 24, 32, 40, 48].map((x) => (
        <circle key={`c${x}`} cx={x} cy={40} r="1.8" />
      ))}
    </svg>
  );
}
