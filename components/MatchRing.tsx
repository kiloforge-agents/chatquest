type Props = {
  value: number;
  size?: number;
  thickness?: number;
  label?: string;
};

export default function MatchRing({ value, size = 56, thickness = 4, label = "match" }: Props) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * (value / 100);
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-label={`${value}% ${label}`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={`ring-${value}-${size}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={thickness}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={`url(#ring-${value}-${size})`}
          strokeWidth={thickness}
          fill="none"
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center leading-tight">
          <div className="font-display text-[15px] font-semibold text-text">
            {value}
            <span className="text-muted text-[10px] font-medium">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
