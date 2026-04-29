export type QuestCategory =
  | "Fitness"
  | "Outdoors"
  | "Creative"
  | "Food"
  | "Music"
  | "Learn"
  | "Wellness";

export type QuestVibe = "Chill" | "High-energy" | "Focused" | "Social" | "Adventurous";

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type Quest = {
  id: string;
  title: string;
  emoji: string;
  category: QuestCategory;
  vibe: QuestVibe;
  difficulty: Difficulty;
  xp: number;
  durationMin: number;
  distanceKm: number;
  neighborhood: string;
  startsAt: string;
  partySize: { min: number; max: number; current: number };
  match: number;
  host: { name: string; avatar: string; level: number };
  attendees: { name: string; avatar: string }[];
  tags: string[];
  blurb: string;
  reasoning: string;
};

export type Person = {
  id: string;
  name: string;
  age: number;
  avatar: string;
  bio: string;
  vibe: QuestVibe;
  match: number;
  level: number;
  xp: number;
  badges: string[];
  interests: string[];
  voicePreview: { duration: number; text: string };
  recentQuests: { title: string; emoji: string }[];
  online: boolean;
  distanceKm: number;
};

export type Badge = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  earned: boolean;
};
