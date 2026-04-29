# ChatQuest

> Find your people. Live the quest.

ChatQuest is a social discovery PWA that uses AI to match nearby humans for real-life quests — sunrise runs, bouldering nights, pottery jams, twilight kayaks, slow dinners. Voice previews replace endless DMs: hear someone for 30 seconds before you commit, then show up.

Built for the post-swipe generation: gamified XP, weekly streaks, group-first defaults, voice-only first contact.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4**
- **TypeScript** strict
- **PWA** via `app/manifest.ts` + maskable SVG icons
- All data is static / mock — single small-team launch surface, no backend needed for the demo

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Marketing landing (hero, how-it-works, quest gallery, voice section, trust & safety, CTA) |
| `/app` | Discover feed — top AI pick + ranked grid with match-rings |
| `/app/quest/[id]` | Full quest detail + host voice preview + join flow |
| `/app/voice` | Swipeable voice-room: play 30s previews, wave, record reply |
| `/app/quests` | My quests (upcoming + completed), level progress, streak |
| `/app/profile` | Vibe editor (interests, energy ceiling, days, crew size), badges |

## Local dev

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production
npm run start
```

## Deploy

Deployed on Vercel. Push to `main` triggers a production deploy.

## License

MIT — © ChatQuest Labs
