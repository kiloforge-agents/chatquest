import Link from "next/link";
import Logo from "@/components/Logo";
import { ME } from "@/lib/data";
import Avatar from "@/components/Avatar";
import {
  IconCompass,
  IconFlame,
  IconMic,
  IconUser,
} from "@/components/Icons";
import NavLink from "./_nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto flex min-h-dvh max-w-[1180px] flex-col px-4 pb-[110px] pt-3 md:flex-row md:gap-8 md:px-6 md:pb-10 md:pt-6">
        {/* Sidebar (md+) */}
        <aside className="hidden md:flex md:w-[240px] md:shrink-0 md:flex-col md:gap-6 md:sticky md:top-6 md:self-start">
          <Link href="/" className="px-2">
            <Logo />
          </Link>

          <nav className="flex flex-col gap-1">
            <NavLink href="/app" icon={<IconCompass size={18} />}>
              Discover
            </NavLink>
            <NavLink href="/app/voice" icon={<IconMic size={18} />}>
              Voice room
            </NavLink>
            <NavLink href="/app/quests" icon={<IconFlame size={18} />}>
              My quests
            </NavLink>
            <NavLink href="/app/profile" icon={<IconUser size={18} />}>
              Profile
            </NavLink>
          </nav>

          <Link
            href="/app/profile"
            className="mt-2 flex items-center gap-3 rounded-2xl glass px-3 py-3 hover:bg-white/[0.04]"
          >
            <Avatar initials={ME.avatar} size={40} online />
            <div className="min-w-0">
              <div className="truncate text-[13px] font-medium">{ME.name}</div>
              <div className="text-[11px] text-muted">
                Lvl {ME.level} · {ME.xp} XP
              </div>
            </div>
          </Link>

          <div className="rounded-2xl glass p-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Streak
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-[26px] font-semibold">
                {ME.streak}
              </span>
              <span className="text-[12px] text-muted">weeks</span>
              <span className="ml-auto text-lg">🔥</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-[#a78bfa] to-[#f472b6]" />
            </div>
            <div className="mt-2 text-[11px] text-muted">
              2 of 3 quests this week — keep it alive
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>

      {/* Bottom nav (mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/5 bg-bg/80 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 px-4 py-2">
          <NavLink href="/app" icon={<IconCompass size={20} />} mobile>
            Discover
          </NavLink>
          <NavLink href="/app/voice" icon={<IconMic size={20} />} mobile>
            Voice
          </NavLink>
          <NavLink href="/app/quests" icon={<IconFlame size={20} />} mobile>
            Quests
          </NavLink>
          <NavLink href="/app/profile" icon={<IconUser size={20} />} mobile>
            You
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
