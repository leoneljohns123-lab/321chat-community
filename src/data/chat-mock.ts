/*
 * DEVELOPMENT MOCK DATA for the 321.Chat chat interface.
 *
 * The real chat application's interior could not be inspected publicly
 * (it sits behind account login and a bot check), so this data exists
 * only to exercise the demo UI. None of it represents real platform
 * data — user counts, messages and profiles here are fake and are
 * labelled as demo content in the interface.
 */

export interface MockUser {
  name: string;
  color: string;
  vip?: boolean;
  mod?: boolean;
}

export const mockUsers: MockUser[] = [
  { name: "Bella_D", color: "#e0607e", vip: true },
  { name: "MarcoP", color: "#4f9bd9" },
  { name: "DJ_Kaya", color: "#7a5fd0", vip: true },
  { name: "quietstorm", color: "#4caf7d" },
  { name: "TommyTwo", color: "#d9874f" },
  { name: "Mod_Sam", color: "#c0392b", mod: true },
  { name: "Priya_R", color: "#3aa5a0" },
  { name: "LoudMouthLarry", color: "#b8860b" },
  { name: "Jess", color: "#8e6fb8" },
  { name: "Cali_Girl", color: "#e07b39" },
  { name: "NightOwl", color: "#5a6d8c" },
  { name: "Breezey", color: "#6aab5f" },
];

export interface MockMessage {
  id: number;
  user: string;
  text: string;
  time: string;
  kind?: "system" | "action";
}

export const mockMessages: MockMessage[] = [
  { id: 1, user: "system", text: "Welcome to the room! Please read the rules — be kind and keep personal info out of the open chat.", time: "10:02", kind: "system" },
  { id: 2, user: "Bella_D", text: "morning everyone ☕ what's everyone up to today?", time: "10:04" },
  { id: 3, user: "MarcoP", text: "just got back from the gym, absolutely wiped", time: "10:05" },
  { id: 4, user: "DJ_Kaya", text: "new playlist dropped last night, link in my profile if anyone wants it", time: "10:07" },
  { id: 5, user: "quietstorm", text: "lurking as usual lol hi all", time: "10:08" },
  { id: 6, user: "TommyTwo", text: "anyone watching the game later?", time: "10:11" },
  { id: 7, user: "Priya_R", text: "me! it starts at 8 my time", time: "10:12" },
  { id: 8, user: "Mod_Sam", text: "Reminder: keep social handles to PMs please", time: "10:14", kind: "system" },
  { id: 9, user: "Cali_Girl", text: "it is somehow STILL raining here, day 6", time: "10:16" },
  { id: 10, user: "Jess", text: "come visit me, we have actual sun", time: "10:17" },
  { id: 11, user: "NightOwl", text: "6am and still awake. help", time: "10:19" },
  { id: 12, user: "Breezey", text: "coffee count today: 3. it's a lifestyle", time: "10:21" },
];

export interface MockRoom {
  id: string;
  name: string;
  users: number;
}

export const mockRooms: MockRoom[] = [
  { id: "free", name: "Free Chat", users: 214 },
  { id: "teen", name: "Teen Chat", users: 168 },
  { id: "adult", name: "Adult Chat", users: 97 },
  { id: "senior", name: "Senior Chat", users: 61 },
  { id: "gay", name: "Gay Chat", users: 43 },
  { id: "lesbian", name: "Lesbian Chat", users: 31 },
  { id: "religion", name: "Religion Chat", users: 18 },
  { id: "latin", name: "Spanish Chat", users: 26 },
];
