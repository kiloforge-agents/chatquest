"use client";

import { useState } from "react";
import { IconBolt, IconCheck } from "./Icons";

export default function JoinButton({ xp }: { xp: number }) {
  const [state, setState] = useState<"idle" | "joining" | "joined">("idle");

  return (
    <div className="rounded-3xl glass-strong p-5 md:p-6">
      {state === "joined" ? (
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#34d399]/15 text-[#34d399]">
            <IconCheck size={18} />
          </span>
          <div>
            <div className="font-display text-[16px]">You're in.</div>
            <div className="text-[12px] text-muted">+{xp} XP banked. We'll ping you 1h before.</div>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={() => {
              setState("joining");
              setTimeout(() => setState("joined"), 900);
            }}
            disabled={state === "joining"}
            className="w-full rounded-2xl btn-primary py-3.5 text-[14px] disabled:opacity-70"
          >
            {state === "joining" ? "Reserving your spot…" : "I'm in — claim spot"}
          </button>
          <div className="mt-3 flex items-center justify-between text-[11.5px] text-muted">
            <span className="inline-flex items-center gap-1"><IconBolt size={12} /> +{xp} XP</span>
            <span>Cancel free up to 6h before</span>
          </div>
        </>
      )}
    </div>
  );
}
