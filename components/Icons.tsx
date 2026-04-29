import * as React from "react";

type P = React.SVGProps<SVGSVGElement> & { size?: number };

function I({ size = 20, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconCompass = (p: P) => (
  <I {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5L13 13l-4.5 2.5L11 11z" />
  </I>
);

export const IconSpark = (p: P) => (
  <I {...p}>
    <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
    <path d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
  </I>
);

export const IconMic = (p: P) => (
  <I {...p}>
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0014 0" />
    <path d="M12 18v3" />
  </I>
);

export const IconUser = (p: P) => (
  <I {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0116 0" />
  </I>
);

export const IconChat = (p: P) => (
  <I {...p}>
    <path d="M21 12a8 8 0 11-3.2-6.4L21 5l-1 3.2A8 8 0 0121 12z" />
  </I>
);

export const IconFlame = (p: P) => (
  <I {...p}>
    <path d="M12 3c2 4-2 5 0 8 1.5 2 4 2 4 5a4 4 0 11-8 0c0-2 1-3 1-4 0-2-1-3 0-5 1-2 3-2 3-4z" />
  </I>
);

export const IconLightning = (p: P) => (
  <I {...p}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
  </I>
);

export const IconMap = (p: P) => (
  <I {...p}>
    <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2z" />
    <path d="M9 4v14M15 6v14" />
  </I>
);

export const IconClock = (p: P) => (
  <I {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </I>
);

export const IconUsers = (p: P) => (
  <I {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M2.5 20a6.5 6.5 0 0113 0" />
    <path d="M14 20a5 5 0 017.5-4.3" />
  </I>
);

export const IconShield = (p: P) => (
  <I {...p}>
    <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </I>
);

export const IconSparkles = (p: P) => (
  <I {...p}>
    <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z" />
    <path d="M19 4l.8 2 2 .8-2 .8L19 10l-.8-2-2-.8 2-.8z" />
  </I>
);

export const IconArrow = (p: P) => (
  <I {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </I>
);

export const IconCheck = (p: P) => (
  <I {...p}>
    <path d="M5 12l4.5 4.5L19 7" />
  </I>
);

export const IconHeart = (p: P) => (
  <I {...p}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
  </I>
);

export const IconBolt = (p: P) => (
  <I {...p}>
    <path d="M11 2L4 13h6l-1 9 10-13h-7z" />
  </I>
);

export const IconClose = (p: P) => (
  <I {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </I>
);

export const IconPlay = (p: P) => (
  <I {...p}>
    <path d="M7 4l13 8-13 8z" />
  </I>
);

export const IconPause = (p: P) => (
  <I {...p}>
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </I>
);

export const IconStar = (p: P) => (
  <I {...p}>
    <path d="M12 3l2.6 5.4 5.9.6-4.4 4 1.3 5.9L12 15.9 6.6 18.9l1.3-5.9L3.5 9l5.9-.6z" />
  </I>
);

export const IconTrophy = (p: P) => (
  <I {...p}>
    <path d="M7 4h10v3a5 5 0 11-10 0z" />
    <path d="M5 6H3a3 3 0 003 3M19 6h2a3 3 0 01-3 3M9 17h6v3H9z" />
    <path d="M12 12v5" />
  </I>
);

export const IconLock = (p: P) => (
  <I {...p}>
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </I>
);

export const IconSearch = (p: P) => (
  <I {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-5-5" />
  </I>
);

export const IconFilter = (p: P) => (
  <I {...p}>
    <path d="M3 5h18M6 12h12M10 19h4" />
  </I>
);

export const IconPin = (p: P) => (
  <I {...p}>
    <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
    <circle cx="12" cy="9" r="2.5" />
  </I>
);
