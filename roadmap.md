# Roadmap — 321.Chat frontend reconstruction

Reference: https://www.321chat.com/ (crawled Oct 2026). Brand for the new platform: **321.Chat**.
Copy is paraphrased, assets are original. Frontend-first with clearly marked mock data.

## Inventory (reference crawl findings)

- Landing site (www subdomain): homepage + 13 room landing pages sharing one template, rules, FAQ, contact hub + 4 forms, VIP, gold, games, guide, reviews, about/privacy/terms/disclaimer, 404 page (shows room grid).
- Chat app (nchat subdomain): login screen (logo, Login / Guest login / Register now, Help & Support, cookie notice, language flag, footer). Interior is behind Cloudflare human-check + account — **cannot be inspected; interior UI is a plausible reconstruction clearly marked as mock**.
- Message board (XenForo-style): dark header bar with search, notice banners, breadcrumb, media gallery carousel, forum category list with thread/message counts + latest-thread cells, sidebar (media promo, members recently online, members online, trending content), cookie bar.

## Checklist

- [x] Crawl & inventory reference site
- [x] Visual reference screenshots captured (home, teen, vip, gold, contact, message-board)
- [ ] Design system (tokens, fonts, shared components)
- [ ] Original assets (logo via CSS, avatar strip, hero collage, feature illustrations)
- [ ] Mock data modules (clearly labelled dev-stage data)
- [ ] Shared landing layout: nav + dropdown, emoji marquee, hero, room grid, sections, footer, back-to-top
- [ ] `/` homepage
- [ ] `/rooms/$slug` — teen, adult, senior, kid, gay, lesbian, gayteen, transgender, furry, religion, black, latin, asian
- [ ] `/chat` — chat app login screen + mock chat interior (rooms, messages, users, composer)
- [ ] `/rules`, `/rules/faq`
- [ ] `/contact` + `/contact/banned`, `/contact/feedback`, `/contact/administrator`, `/contact/moderator-application`
- [ ] `/vip`, `/gold`, `/games`
- [ ] `/guide`, `/reviews`, `/about`, `/privacy`, `/terms-of-use`, `/disclaimer`
- [ ] `/message-board` + login, register, forum category, thread, whats-new, search, members
- [ ] 404 page matching reference pattern
- [ ] Responsive pass (mobile nav, grids, chat)
- [ ] Playwright verification of every route + screenshot comparison vs reference

## Known limitations

- Chat interior layout unverified (Cloudflare check blocks inspection); built as functional mock, clearly labelled.
- `/games`, `/guide`, `/reviews` interior layouts partially unverifiable (pages fetched late or thin); built from fetched content where available.
- Mock data (users, counts, forum posts, chat messages) is development-stage only — labelled in `src/data/*`.
