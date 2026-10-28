/*
 * Room definitions for 321.Chat landing pages.
 *
 * Copy is original (paraphrased, not copied from any source). Where a room
 * page was not crawled, its specifics follow the shared landing template
 * that was verified on the crawled pages.
 */

export interface RoomSection {
  title: string;
  paragraphs: string[];
  image?: "social" | "express" | "rules" | "moderation" | "interests" | "world" | "features" | "phone";
}

export interface Room {
  slug: string;
  label: string; // "Teen Chat"
  shortLabel: string; // "Teen"
  tagline: string;
  subtitle?: string;
  descriptionTitle: string;
  paragraphs: string[];
  sections: RoomSection[];
  /** Age guidance shown under the hero (like the reference's room taglines) */
  ageNote?: string;
}

const followRules: RoomSection = {
  title: "Follow the Rules",
  image: "rules",
  paragraphs: [
    "Every room here is moderated, and hateful or bigoted speech gets people removed quickly. Each room has its own age range, and people outside it are not welcome in it.",
    "Keep personal details out of the open room — email addresses, phone numbers and social handles belong in a private message, if anywhere. A few minutes with the chat rules saves a lot of trouble later.",
  ],
};

export const rooms: Room[] = [
  {
    slug: "teen",
    label: "Teen Chat",
    shortLabel: "Teen",
    tagline: "For teenagers 13 to 20 years old",
    subtitle: "A safe and friendly place for teen boys and girls to talk.",
    ageNote: "13–20",
    descriptionTitle: "Teen Chat Rooms",
    paragraphs: [
      "Teen Chat is where people between 13 and 20 come to hang out, gossip about school, share music and games, and make friends. It is one of the busiest rooms on the site, usually with a steady crowd throughout the day.",
      "Post pictures and links, use emojis and custom fonts, and set a mood so people know what kind of day you are having. Conversations here move fast and cover just about everything in a teenager's life.",
      "The room has been running for more than two decades, and the moderator team works hard to keep it friendly for everyone in the age range.",
    ],
    sections: [
      {
        title: "Get Social",
        image: "social",
        paragraphs: [
          "The big social apps are feeds you scroll alone. Here, everyone in the room is online at the same time as you — post to your wall, update your profile, add friends, or message one person privately.",
          "There is a music player, GIFs, video sharing and news updates, so it feels familiar — with the difference that the people are actually around to reply.",
        ],
      },
      {
        title: "Express Yourself",
        image: "express",
        paragraphs: [
          "Tone is hard to read over text. Thousands of emojis, stickers and GIFs — plus fonts and text colors — help what you meant land the way you meant it.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "adult",
    label: "Adult Chat",
    shortLabel: "Adult",
    tagline: "For adults 19 years and older",
    subtitle: "An 18+ room for grown-up conversation.",
    ageNote: "19+",
    descriptionTitle: "Adult Chat Rooms",
    paragraphs: [
      "Adult Chat is the room for grown-ups who want conversation without younger users around it. Topics run the whole range — work, dating, current events, hobbies and whatever else adults actually talk about.",
      "The room is open to anyone 19 or over, and moderators keep an eye on the age rule along with everything else in the site rules.",
      "It stays active at most hours thanks to chatters from all over the world — when one side of the planet logs off, the other side is just waking up.",
    ],
    sections: [
      {
        title: "Grown-Up Conversation",
        image: "features",
        paragraphs: [
          "Rooms move fast, and this one is no different. Share photos and links, quote what someone said, or pull a particular person aside with a whisper or a private message.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "senior",
    label: "Senior Chat",
    shortLabel: "Senior",
    tagline: "For chatters 40 years and older",
    subtitle: "A relaxed room for the over-forties.",
    ageNote: "40+",
    descriptionTitle: "Senior Chat Rooms",
    paragraphs: [
      "Senior Chat is a calmer corner of the site for people forty and over. Retirement, grandchildren, travel, health, music from back in the day — the conversation is unhurried and the crowd is welcoming.",
      "Newcomers get a proper hello rather than being scrolled past, and regulars have been keeping the room alive for years.",
      "The room works on every phone, tablet and computer, and there is nothing to install — pick a nickname and join in.",
    ],
    sections: [
      {
        title: "Take Your Time",
        image: "express",
        paragraphs: [
          "Set your mood, change your font and colors, and post photos to the gallery. Private messages let conversations continue long after the room goes quiet.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "kid",
    label: "Kid Chat",
    shortLabel: "Kid",
    tagline: "A moderated room for younger chatters",
    subtitle: "A safe, closely watched room for kids.",
    ageNote: "Under 13",
    descriptionTitle: "Kid Chat Rooms",
    paragraphs: [
      "Kid Chat is a tightly moderated room for younger chatters, with a simple rule set and moderators who step in early. Conversation stays on safe ground: games, school, cartoons, pets and hobbies.",
      "Personal information never belongs in the open room, and the rule is enforced here more strictly than anywhere else on the site.",
      "Parents: the room is free, moderators are volunteers and may be present invisibly, and no chat service can promise that nothing inappropriate will ever appear. Whether a child uses the site at all is a family decision — the guidance on the teen page applies here too.",
    ],
    sections: [
      {
        title: "Simple and Safe",
        image: "moderation",
        paragraphs: [
          "Big buttons, plain text and a friendly crowd. Moderators are a constant presence, and the ignore button is one click away if anyone bothers you.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "gay",
    label: "Gay Chat",
    shortLabel: "Gay",
    tagline: "A friendly room for gay men and their friends",
    subtitle: "Conversation, community and new friends.",
    descriptionTitle: "Gay Chat Rooms",
    paragraphs: [
      "Gay Chat is a long-running room for gay men, bi guys and the people who love them. It is social rather than a dating app: conversation first, with the whole room in on it.",
      "Expect music, films, nights out, travel and everything in between — plus plenty of banter. Private messages are there when two people want to continue a thread one-on-one.",
      "The same site-wide rules apply, and the moderation team keeps the room welcoming rather than cliquey.",
    ],
    sections: [
      {
        title: "Community First",
        image: "social",
        paragraphs: [
          "Profiles, photo galleries and friend lists make it easy to keep track of people you click with, and the message board carries the longer conversations after the room goes quiet.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "lesbian",
    label: "Lesbian Chat",
    shortLabel: "Lesbian",
    tagline: "For lesbian and bi women",
    subtitle: "A room of your own, open all day.",
    descriptionTitle: "Lesbian Chat Rooms",
    paragraphs: [
      "Lesbian Chat is a room for women who like women — and their friends. It has the feel of a regular café table: drop in, join whatever thread is running, start a new one.",
      "Topics swing from music and series to work, travel and relationships. The crowd is small enough to get to know and busy enough that there is always someone around.",
      "Moderation follows the site rules, and the room's regulars are quick to make newcomers feel at home.",
    ],
    sections: [
      {
        title: "Make Friends",
        image: "interests",
        paragraphs: [
          "Add people to your friend list, post on their wall, share photos in the gallery and set up a profile that says something about you.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "gayteen",
    label: "Gay Teen Chat",
    shortLabel: "Gay Teen",
    tagline: "For gay, bi and questioning teens 13 to 20",
    subtitle: "Support and friendship for LGBTQ+ teens.",
    ageNote: "13–20",
    descriptionTitle: "Gay Teen Chat Rooms",
    paragraphs: [
      "Gay Teen Chat is a room for teenagers who are gay, bi, questioning or just supportive friends. Coming out, school, crushes and family — it is a place to talk to people who get it.",
      "The age range is enforced: it exists so teens can talk among peers, and adults are moved along.",
      "Moderators keep a close watch here, and the site-wide rules about respect apply with full force.",
    ],
    sections: [
      {
        title: "You Are Not Alone",
        image: "social",
        paragraphs: [
          "Whatever tonight's question is, someone in the room has been through it. Ask, listen, and take your time — the room is not going anywhere.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "transgender",
    label: "Transgender Chat",
    shortLabel: "Transgender",
    tagline: "A respectful room for trans and non-binary chatters",
    subtitle: "Community, questions and conversation.",
    descriptionTitle: "Transgender Chat Rooms",
    paragraphs: [
      "Transgender Chat is a room for trans and non-binary people and the people who support them. Talk about anything: daily life, transition, pop culture, or just the weather with people who use your name.",
      "Respect is the house rule — deliberately deadnaming or misgendering someone gets handled the same way as any other ban-worthy behavior.",
      "Allies are welcome as guests of the room's regulars, and the same age and conduct rules apply as everywhere else on the site.",
    ],
    sections: [
      {
        title: "Say What You Like, Be Who You Are",
        image: "express",
        paragraphs: [
          "Custom colors, fonts and moods make the chat yours. Profiles and galleries let you share as much or as little as you want.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "furry",
    label: "Furry Chat",
    shortLabel: "Furry",
    tagline: "For the furry community and the furry-curious",
    subtitle: "Art, sonas and friendly chatter.",
    descriptionTitle: "Furry Chat Rooms",
    paragraphs: [
      "Furry Chat is the site's home for the furry community. Fursonas, art trades, conventions, fursuits and general anthropomorphic enthusiasm — the room runs on it.",
      "Artists share work in the gallery, and the crowd ranges from longtime community members to curious newcomers asking their first questions.",
      "Normal site rules apply; moderators keep the room friendly for everyone.",
    ],
    sections: [
      {
        title: "Show Your Work",
        image: "interests",
        paragraphs: [
          "Photo gallery slots, profile styling and a message board thread or three — there are plenty of places to share art and meet other artists.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "religion",
    label: "Religion Chat",
    shortLabel: "Religion",
    tagline: "Interfaith discussion, respectfully run",
    subtitle: "Belief, doubt and everything between.",
    descriptionTitle: "Religion Chat Rooms",
    paragraphs: [
      "Religion Chat is an interfaith room: Christians, Muslims, Jews, Hindus, Buddhists, atheists and agnostics all talk here, and disagreement is expected and allowed.",
      "What is not allowed is preaching at people who did not ask, disparaging anyone's faith, or turning the room into a shouting match. Moderators keep discussions from boiling over.",
      "Bring questions rather than certainties and the room will treat you well.",
    ],
    sections: [
      {
        title: "Agree to Disagree",
        image: "moderation",
        paragraphs: [
          "Debate is welcome; contempt is not. If a thread gets heated, moderators cool it down rather than kill the conversation.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "black",
    label: "Black Chat",
    shortLabel: "Black",
    tagline: "A room by and for Black chatters",
    subtitle: "Culture, music, life and banter.",
    descriptionTitle: "Black Chat Rooms",
    paragraphs: [
      "Black Chat is a room for Black chatters and their friends. The conversation covers culture, music, sport, news and everyday life, with a regular crowd that has kept the room busy for years.",
      "Visitors of every background are welcome to join in respectfully — the room's regulars set the tone.",
      "The usual site rules and age guidance apply, and moderation keeps it that way.",
    ],
    sections: [
      {
        title: "Pull Up a Seat",
        image: "social",
        paragraphs: [
          "Profiles, galleries and friend lists make it easy to keep the friends you make, and private messages carry conversations past the room itself.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "latin",
    label: "Spanish Chat",
    shortLabel: "Spanish",
    tagline: "La sala para chatear en español",
    subtitle: "A Spanish-language room for the whole community.",
    descriptionTitle: "Spanish Chat Rooms",
    paragraphs: [
      "Spanish Chat is the room for chatters who prefer to talk en español — whether Spanish is your first language or you are practicing. Latin America, Spain and everywhere in between are represented.",
      "The conversation is everything the English rooms cover: music, football, food, family, work and weekend plans.",
      "Bilingual moderators keep the same site rules in force here as anywhere else.",
    ],
    sections: [
      {
        title: "Bienvenido, Bienvenida",
        image: "world",
        paragraphs: [
          "The room links a global community — chatters from Mexico to Madrid keep it busy at almost every hour of the day.",
        ],
      },
      followRules,
    ],
  },
  {
    slug: "asian",
    label: "Asian Chat",
    shortLabel: "Asian",
    tagline: "For chatters across Asia and beyond",
    subtitle: "A room with a global, around-the-clock crowd.",
    descriptionTitle: "Asian Chat Rooms",
    paragraphs: [
      "Asian Chat is for chatters from or interested in Asia — India, the Philippines, Pakistan, Bangladesh, Vietnam, Japan and many more. English is the common language and the vibe is relaxed.",
      "Time zones work in the room's favor: as one region logs off, another is having breakfast, so the room rarely goes completely quiet.",
      "The same rules apply as in every other room, and moderators step in when anyone forgets them.",
    ],
    sections: [
      {
        title: "Around the Clock",
        image: "world",
        paragraphs: [
          "Whatever the hour, someone in the room is awake. Say hello and the room will usually answer.",
        ],
      },
      followRules,
    ],
  },
];

export const roomBySlug = (slug: string) => rooms.find((r) => r.slug === slug);

export interface NavRoom {
  slug: string;
  label: string;
}

/** The full room navigation list, in reference order. */
export const navRooms: NavRoom[] = [
  ...rooms.map((r) => ({ slug: r.slug, label: r.label })),
];

/** The orange room-grid shown on every landing page ("Which Chat Room..."). */
export const roomGridItems: { label: string; to: string }[] = [
  { label: "Free Chat", to: "/" },
  ...rooms.map((r) => ({ label: r.label, to: `/rooms/${r.slug}` })),
  { label: "Message Board", to: "/message-board" },
];
