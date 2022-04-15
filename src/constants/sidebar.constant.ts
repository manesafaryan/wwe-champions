export const sideBarItems: SideBarItem[] = [
  {
    icon: "dashboard",
    description: "Dashboard",
    New: false,
  },

  {
    icon: "leaderboard",
    description: "Leaderboard",
    New: false,
  },

  {
    icon: "offers",
    description: "Special Offers",
    New: true,
  },

  {
    icon: "dice",
    description: "Flash Market",
    New: true,
  },

  {
    icon: "coin",
    description: "Web Coin Shop",
    New: false,
  },

  {
    icon: "tournament",
    description: "Grand Tournament",
    New: false,
  },

  {
    icon: "calendar",
    description: "Calendar",
    New: false,
  },

  {
    icon: "news",
    description: "News",
    New: false,
  },

  {
    icon: "guide",
    description: "Superstar Guide",
    New: false,
  },

  {
    icon: "trophy",
    description: "Events",
    New: true,
  },

  {
    icon: "gamepad",
    description: "Trivia Rumble",
    New: false,
  },
];

interface SideBarItem {
  icon: Icon;
  description: string;
  New: boolean;
}

type Icon =
  | "dashboard"
  | "leaderboard"
  | "offers"
  | "dice"
  | "coin"
  | "tournament"
  | "calendar"
  | "news"
  | "guide"
  | "trophy"
  | "gamepad"
  | "search"
  | "apple";
