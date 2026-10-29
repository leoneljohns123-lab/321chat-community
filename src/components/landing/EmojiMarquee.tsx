const EMOJIS = ["💬", "😀", "✨", "🎈", "🎧", "⭐", "🔥", "🎉", "😄", "🎵", "👋", "🌈"];

/** Slim animated emoji strip running along the very top of landing pages. */
export function EmojiMarquee() {
  const row = [...EMOJIS, ...EMOJIS];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-b border-primary/60 bg-primary py-1"
    >
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center gap-8 px-4">
            {row.map((e, i) => (
              <span key={`${half}-${i}`} className="text-sm opacity-90">
                {e}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
