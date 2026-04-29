"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  icon,
  children,
  mobile,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  const active = href === "/app" ? pathname === "/app" : pathname.startsWith(href);

  if (mobile) {
    return (
      <Link
        href={href}
        className={`flex flex-col items-center gap-1 py-1.5 text-[11px] transition ${
          active ? "text-text" : "text-muted"
        }`}
      >
        <span
          className={`grid h-9 w-9 place-items-center rounded-xl transition ${
            active ? "bg-white/10" : ""
          }`}
        >
          {icon}
        </span>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] transition ${
        active
          ? "bg-white/[0.07] text-text"
          : "text-muted hover:bg-white/[0.04] hover:text-text"
      }`}
    >
      <span
        className={`grid h-7 w-7 place-items-center rounded-lg ${
          active ? "text-accent" : ""
        }`}
      >
        {icon}
      </span>
      {children}
    </Link>
  );
}
