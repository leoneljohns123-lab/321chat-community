/*
 * DEVELOPMENT MOCK DATA for the 321.Chat message board.
 *
 * All categories, threads, posts, members and counts are simulated for
 * the demo build. None of it represents real platform data.
 */

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  threads: number;
  messages: number;
  latest: { title: string; when: string; by: string; avatarColor: string; avatarText: string };
  accent: string;
}

export const forumCategories: ForumCategory[] = [
  {
    id: "announcements-updates",
    name: "Announcements & Updates",
    description: "Site news, maintenance notices and feature releases.",
    threads: 1,
    messages: 1,
    latest: {
      title: "Rules and Guidelines",
      when: "Feb 11, 2022",
      by: "Staff",
      avatarColor: "#c0392b",
      avatarText: "S",
    },
    accent: "#8e44ad",
  },
  {
    id: "new-introductions",
    name: "New? Introductions",
    description:
      "New here? Tell the community a little about yourself and get to know everyone.",
    threads: 269,
    messages: 1100,
    latest: {
      title: "Senior chat room",
      when: "Monday at 7:26 PM",
      by: "Jem",
      avatarColor: "#e05a7e",
      avatarText: "J",
    },
    accent: "#c2185b",
  },
  {
    id: "general-discussion",
    name: "General Discussion",
    description: "The everyday catch-all: whatever doesn't fit a room or a board below.",
    threads: 264,
    messages: 1700,
    latest: {
      title: "Game add on idea",
      when: "Tuesday at 9:14 AM",
      by: "MarcoP",
      avatarColor: "#4f9bd9",
      avatarText: "M",
    },
    accent: "#7a5fd0",
  },
  {
    id: "chat-rooms",
    name: "Chat Rooms",
    description: "Room-specific talk: moderation questions, room events and feedback.",
    threads: 142,
    messages: 860,
    latest: {
      title: "Teen room quiet lately?",
      when: "Yesterday at 11:02 PM",
      by: "quietstorm",
      avatarColor: "#4caf7d",
      avatarText: "Q",
    },
    accent: "#00897b",
  },
  {
    id: "gold-vip",
    name: "Gold & VIP",
    description: "Gold earning, gifts, VIP features and the games.",
    threads: 98,
    messages: 640,
    latest: {
      title: "Best gift to send?",
      when: "Jan 12, 2026",
      by: "DJ_Kaya",
      avatarColor: "#b8860b",
      avatarText: "D",
    },
    accent: "#d9874f",
  },
  {
    id: "help-support",
    name: "Help & Support",
    description: "Technical problems, account questions and how-to requests.",
    threads: 187,
    messages: 1240,
    latest: {
      title: "Can't upload photos on mobile",
      when: "Jan 22, 2026",
      by: "Priya_R",
      avatarColor: "#3aa5a0",
      avatarText: "P",
    },
    accent: "#455a64",
  },
];

export interface ForumThread {
  id: number;
  title: string;
  category: string;
  author: string;
  avatarColor: string;
  avatarText: string;
  started: string;
  replies: number;
  views: number;
  pinned?: boolean;
  excerpt: string;
  posts: { author: string; avatarColor: string; when: string; text: string }[];
}

export const forumThreads: ForumThread[] = [
  {
    id: 1,
    title: "Rules and Guidelines",
    category: "announcements-updates",
    author: "Staff",
    avatarColor: "#c0392b",
    avatarText: "S",
    started: "Feb 11, 2022",
    replies: 0,
    views: 4820,
    pinned: true,
    excerpt:
      "The board rules in one place. Site rules apply here too — be civil, stay on topic, and report anything that breaks them.",
    posts: [
      {
        author: "Staff",
        avatarColor: "#c0392b",
        when: "Feb 11, 2022",
        text: "Welcome to the message board. A few rules keep this place readable:\n\n1. Be civil — disagree with ideas, not people.\n2. Stay on topic within each board.\n3. No spam, advertising or repeated posting.\n4. Site-wide chat rules apply here as well.\n5. Report problems to the team rather than feeding drama.\n\nQuestions about moderation go to the contact forms, not this thread.",
      },
    ],
  },
  {
    id: 2,
    title: "Senior chat room",
    category: "new-introductions",
    author: "Jem",
    avatarColor: "#e05a7e",
    avatarText: "J",
    started: "Monday",
    replies: 3,
    views: 96,
    excerpt: "Dropping by to say hello — I spend most evenings in the senior room and thought I should finally introduce myself properly.",
    posts: [
      {
        author: "Jem",
        avatarColor: "#e05a7e",
        when: "Monday at 7:26 PM",
        text: "Hello all! Longtime room regular, first-time board poster. I'm usually in the senior room most evenings — happy to finally say hello properly.",
      },
      {
        author: "TommyTwo",
        avatarColor: "#d9874f",
        when: "Monday at 8:01 PM",
        text: "Welcome, Jem! See you around the board.",
      },
      {
        author: "Breezey",
        avatarColor: "#6aab5f",
        when: "Monday at 9:44 PM",
        text: "Glad you made it over here. It's a bit slower-paced than the rooms, in a good way.",
      },
    ],
  },
  {
    id: 3,
    title: "Game add on idea",
    category: "general-discussion",
    author: "MarcoP",
    avatarColor: "#4f9bd9",
    avatarText: "M",
    started: "Tuesday",
    replies: 2,
    views: 140,
    excerpt: "What if the dice game showed the last ten rolls publicly? Would make it a lot more fun to watch.",
    posts: [
      {
        author: "MarcoP",
        avatarColor: "#4f9bd9",
        when: "Tuesday at 9:14 AM",
        text: "Idea for the games: show the last ten rolls of the dice game in the room so people can watch. Half the fun is the crowd reaction.",
      },
      {
        author: "DJ_Kaya",
        avatarColor: "#b8860b",
        when: "Tuesday at 10:02 AM",
        text: "Would watch that. Add a winner banner and it's basically a spectator sport.",
      },
    ],
  },
];

/** Members shown in the sidebar widgets and members page. */
export const forumMembers = [
  { name: "Green Eyes", color: "#7cb342", online: true },
  { name: "Faceaux", color: "#e05a7e", online: true },
  { name: "Jem", color: "#d9874f", online: false },
  { name: "MarcoP", color: "#4f9bd9", online: true },
  { name: "Breezey", color: "#6aab5f", online: false },
  { name: "quietstorm", color: "#4caf7d", online: true },
  { name: "TommyTwo", color: "#b8860b", online: false },
  { name: "DJ_Kaya", color: "#8e6fb8", online: true },
];

export const mediaGallery = [
  { title: "Garden market day", tone: "#4caf7d" },
  { title: "Evening by the bay", tone: "#4f9bd9" },
  { title: "My desk setup", tone: "#7a5fd0" },
  { title: "Trail run views", tone: "#e07b39" },
  { title: "Butterfly garden", tone: "#e05a7e" },
  { title: "Air show weekend", tone: "#3aa5a0" },
  { title: "Dusk over the hills", tone: "#455a64" },
  { title: "Roadside finds", tone: "#b8860b" },
];
