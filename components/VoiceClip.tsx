"use client";

import { useEffect, useRef, useState } from "react";
import { IconPause, IconPlay } from "./Icons";

type Props = {
  duration: number;
  text: string;
  initials?: string;
  speakerName?: string;
};

export default function VoiceClip({ duration, text, speakerName }: Props) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (playing) {
      const start = performance.now() - t * 1000;
      const tick = () => {
        const now = performance.now();
        const elapsed = (now - start) / 1000;
        if (elapsed >= duration) {
          setT(duration);
          setPlaying(false);
          return;
        }
        setT(elapsed);
        ref.current = requestAnimationFrame(tick);
      };
      ref.current = requestAnimationFrame(tick);
    }
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const progress = t / duration;
  const bars = 56;

  return (
    <div className="rounded-2xl bg-white/[0.04] p-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            if (t >= duration) setT(0);
            setPlaying((p) => !p);
          }}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#a78bfa] to-[#f472b6] text-[#1b0f2a] shadow-[0_8px_24px_-8px_rgba(167,139,250,0.7)] transition active:scale-95"
        >
          {playing ? <IconPause size={18} /> : <IconPlay size={18} />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-end gap-[3px] h-10">
            {Array.from({ length: bars }).map((_, i) => {
              const seed = (Math.sin(i * 0.55) + 1) / 2;
              const heightPct = 30 + seed * 70;
              const reached = i / bars <= progress;
              const wave = playing && reached
                ? heightPct * (0.7 + ((Math.sin((t * 6) + i) + 1) / 2) * 0.6)
                : heightPct;
              return (
                <span
                  key={i}
                  className="block w-[3px] rounded-full"
                  style={{
                    height: `${wave}%`,
                    background: reached
                      ? "linear-gradient(180deg, #a78bfa, #f472b6)"
                      : "rgba(255,255,255,0.18)",
                    transition: "height 80ms ease",
                  }}
                />
              );
            })}
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
            <span>
              {fmt(t)} / {fmt(duration)}
            </span>
            <span>{speakerName ?? "Voice preview"}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13.5px] italic leading-relaxed text-text/90">{text}</p>
    </div>
  );
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}
