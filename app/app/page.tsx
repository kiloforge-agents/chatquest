import Link from "next/link";
import { ME, QUESTS } from "@/lib/data";
import Avatar from "@/components/Avatar";
import MatchRing from "@/components/MatchRing";
import {
  IconArrow,
  IconClock,
  IconFilter,
  IconMap,
  IconPin,
  IconSearch,
  IconSparkles,
  IconUsers,
} from "@/components/Icons";
import DiscoverFilters from "./_discoverFilters";

const CATEGORIES = ["All", "Fitness", "Outdoors", "Creative", "Food", "Music", "Wellness", "Learn"];

export default function DiscoverPage() {
  const sorted = [...QUESTS].sort((a, b) => b.match - a.match);
  const top = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div>
      {/* Greeting */}
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="text-[12px] text-muted">Good morning, {ME.name}</div>
          <h1 className="font-display text-[26px] font-semibold leading-tight md:text-[32px]">
            Two quests are <span className="grad-text">opening up</span> near you.
          </h1>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button className="grid h-10 w-10 place-items-center rounded-full btn-ghost" aria-label="Search">
            <IconSearch size={16} />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full btn-ghost" aria-label="Filter">
            <IconFilter size={16} />
          </button>
        </div>
      </header>

      <DiscoverFilters categories={CATEGORIES} />

      {/* Hero quest */}
      {top && (
        <Link
          href={`/app/quest/${top.id}`}
          className="group relative mt-6 block overflow-hidden rounded-3xl glass-strong p-6 transition hover:bg-white/[0.04] md:p-7"
        >
          <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-[#a78bfa]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#34d399]/15 blur-3xl" />
          <div className="relative grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <div className="chip"><IconSparkles size={11} /> Top pick for your week</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.06] text-3xl">
                  {top.emoji}
                </div>
                <div>
                  <h2 className="font-display text-[22px] font-semibold leading-tight md:text-[26px]">
                    {top.title}
                  </h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] text-muted">
                    <span className="inline-flex items-center gap-1"><IconClock size={12} /> {top.startsAt}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1"><IconPin size={12} /> {top.neighborhood} · {top.distanceKm} km</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1"><IconUsers size={12} /> {top.partySize.current}/{top.partySize.max}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted">{top.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {top.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar initials={top.host.avatar} size={28} />
                  {top.attendees.slice(0, 4).map((a) => (
                    <Avatar key={a.avatar} initials={a.avatar} size={28} />
                  ))}
                </div>
                <span className="text-[12px] text-muted">
                  {top.host.name} hosts · {top.partySize.current} going
                </span>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-4 justify-between md:justify-start">
              <MatchRing value={top.match} size={72} thickness={6} />
              <span className="rounded-full btn-primary px-4 py-2 text-[12px] inline-flex items-center gap-2">
                View quest <IconArrow size={14} />
              </span>
            </div>
          </div>

          <div className="relative mt-6 rounded-2xl bg-white/[0.04] p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#a78bfa] to-[#f472b6] text-[#1b0f2a]">
                <IconSparkles size={14} />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted">Why this is your match</div>
                <p className="mt-1 text-[13.5px] leading-relaxed">{top.reasoning}</p>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Section header */}
      <div className="mt-10 flex items-end justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted">More for your vibe</div>
          <h3 className="mt-1 font-display text-[20px] font-semibold">Hand-ranked by ChatQuest AI</h3>
        </div>
        <Link href="/app/quests" className="hidden md:inline-flex items-center gap-1 text-[12px] text-muted hover:text-text">
          See all <IconArrow size={12} />
        </Link>
      </div>

      {/* Quest grid */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((q) => (
          <Link
            href={`/app/quest/${q.id}`}
            key={q.id}
            className="group relative flex flex-col rounded-3xl glass p-5 transition hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.06] text-2xl">
                {q.emoji}
              </div>
              <MatchRing value={q.match} size={44} />
            </div>

            <div className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted">
              {q.category} · {q.vibe}
            </div>
            <h4 className="mt-1 font-display text-[16px] font-semibold leading-snug">{q.title}</h4>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-muted">
              <span className="inline-flex items-center gap-1"><IconClock size={11} /> {q.startsAt}</span>
              <span className="inline-flex items-center gap-1"><IconMap size={11} /> {q.distanceKm} km</span>
            </div>

            <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted">{q.blurb}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[q.host, ...q.attendees].slice(0, 4).map((a, i) => (
                  <Avatar key={i} initials={a.avatar} size={22} />
                ))}
                {q.attendees.length + 1 > 4 && (
                  <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white/[0.08] text-[9px] text-muted">
                    +{q.attendees.length + 1 - 4}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-muted">
                {q.partySize.current}/{q.partySize.max} · +{q.xp} XP
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA strip */}
      <section className="mt-12 overflow-hidden rounded-3xl glass-strong p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-[20px] font-semibold">Hosting your own quest?</h3>
            <p className="mt-1 text-[13.5px] text-muted">
              Plant a flag in any neighborhood. ChatQuest will assemble a crew that matches your vibe.
            </p>
          </div>
          <Link href="/app/quests" className="rounded-full btn-primary px-5 py-2.5 text-[13px]">
            Plant a quest
          </Link>
        </div>
      </section>
    </div>
  );
}
