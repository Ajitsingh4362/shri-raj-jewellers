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
