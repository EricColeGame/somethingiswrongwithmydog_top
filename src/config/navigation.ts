import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Cog,
  Flag,
  KeyRound,
  MessagesSquare,
  Monitor,
  Users,
} from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "endings", path: "/endings", icon: Flag, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "codes", path: "/codes", icon: KeyRound, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
