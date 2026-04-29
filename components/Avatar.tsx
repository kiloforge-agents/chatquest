type Props = {
  initials: string;
  size?: number;
  online?: boolean;
  className?: string;
};

const PALETTES = [
  ["#a78bfa", "#f472b6"],
  ["#34d399", "#22d3ee"],
  ["#f59e0b", "#f472b6"],
  ["#60a5fa", "#a78bfa"],
  ["#f87171", "#fbbf24"],
  ["#22d3ee", "#a78bfa"],
];

function pickPalette(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return PALETTES[h % PALETTES.length];
}

export default function Avatar({ initials, size = 40, online, className = "" }: Props) {
  const [a, b] = pickPalette(initials);
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full font-display font-semibold text-[#1b0f2a] shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${a}, ${b})`,
        fontSize: Math.max(11, Math.round(size * 0.38)),
      }}
      aria-label={initials}
    >
      {initials}
      {online && (
        <span
          className="absolute bottom-0 right-0 rounded-full ring-2"
          style={{
            width: Math.max(8, size * 0.22),
            height: Math.max(8, size * 0.22),
            background: "#34d399",
            boxShadow: "0 0 0 2px #07060d",
          }}
        />
      )}
    </span>
  );
}
