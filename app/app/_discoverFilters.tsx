"use client";

import { useState } from "react";

export default function DiscoverFilters({ categories }: { categories: string[] }) {
  const [active, setActive] = useState("All");
  const [vibe, setVibe] = useState("Any vibe");
  const vibes = ["Any vibe", "Chill", "High-energy", "Adventurous", "Social", "Focused"];

  return (
    <div className="space-y-3">
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-[12.5px] transition ${
              active === c
                ? "bg-white text-[#1b0f2a]"
                : "bg-white/[0.04] text-muted hover:text-text hover:bg-white/[0.08]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
        {vibes.map((v) => (
          <button
            key={v}
            onClick={() => setVibe(v)}
            className={`shrink-0 rounded-full border px-3 py-1 text-[11.5px] transition ${
              vibe === v
                ? "border-white/30 text-text"
                : "border-white/10 text-muted hover:text-text hover:border-white/20"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
