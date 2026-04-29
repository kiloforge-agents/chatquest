export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="55%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <path
          d="M32 6l24 12v24L32 54 8 42V18z"
          fill="none"
          stroke="url(#lg)"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="30" r="6.5" fill="url(#lg)" />
      </svg>
      <span className="font-display text-[15px] font-semibold tracking-tight">
        ChatQuest
      </span>
    </span>
  );
}
