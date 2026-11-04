# 321Chat Community

REFERENCE-DRIVEN FRONTEND RECONSTRUCTION — 321CHAT.COM

Objective

Reconstruct the complete publicly accessible frontend of https://www.321chat.com/ as a new, fully responsive community chat platform.

The priority is to reproduce the reference website's observable UI structure and user experience as accurately as practical, not to create a generic chat website inspired by it.

Use browser inspection, direct navigation, screenshots and visual comparison wherever these capabilities are available. Do not claim to have inspected a page unless you actually accessed it.

1. Crawl and inventory before implementation

Inspect the publicly accessible website systematically.

Start with the homepage and follow internal links to discover all accessible page types, including:

Main homepage and navigation.

Chat room directory and individual room entry pages.

Login, registration and account recovery.

Member directories and public profiles.

Private messaging interfaces, where publicly accessible.

Community forum and discussion categories.

VIP membership and premium features.

Virtual currency, gifts and games.

Help centre, FAQ and rules.

Contact and ban appeal forms.

Privacy policy, terms and other public information pages.

Create a route inventory and page relationship map. Record the page title, URL, layout structure, navigation elements, content hierarchy, reusable components, visible interactions and responsive behavior.

Respect authentication boundaries. If a page requires a registered account or a feature cannot be inspected publicly, document the limitation instead of bypassing it.

2. Visual reconstruction

For every accessible page, reproduce the observable design as closely as practical:

Header height, navigation alignment and menu behavior.

Page width, content columns and spacing.

Backgrounds, colors, borders and shadows.

Typography, font weights, line heights and text hierarchy.

Buttons, inputs, cards, icons and badges.

Avatar sizes, image crops and thumbnail proportions.

Sidebars, panels, footers and content sections.

Modals, dropdowns, tooltips and hover states.

Loading, empty, error and disabled states.

Mobile navigation and responsive layouts.

Use screenshots of the reference pages as visual regression targets whenever possible.

Do not invent major sections before completing the reference inventory. Distinguish original reference features from any new enhancements.

Use original branding and assets that we own or have permission to use. Do not copy proprietary source code or misrepresent the new platform as the original website.

3. Reconstruct the complete component system

Build reusable components for the header, navigation, room cards, member cards, profile headers, avatars, chat messages, message composers, online-user lists, forum topics, dialogs, forms, notifications and footer.

Use shared design tokens for spacing, colors, typography, radii, borders and shadows.

Maintain consistent components across all pages while preserving genuine differences between page types.

4. Functional frontend

Every visible interactive element must work.

Implement real navigation, forms, menus, search, filters, pagination, profile tabs, dialogs, validation, loading states and error handling.

Connect the frontend to backend services for authentication, chat, messaging, profiles, forum content, moderation and payments as appropriate.

Do not present fake user counts, simulated payment success, hardcoded account balances or decorative buttons as production functionality.

Temporary mock data may be used only during explicitly identified development stages.

5. Responsive behavior

Inspect and reproduce desktop, tablet and mobile layouts.

Test narrow screens, long usernames, long messages, empty rooms, large participant lists, overflowing content and virtual keyboards.

The application must remain accessible and usable at all supported viewport sizes.

6. Implementation and verification

Inspect the existing project before making changes. Preserve existing working functionality and use its established framework unless a migration is justified.

Implement the frontend in organized, reusable components with clear routing and maintainable styling.

After implementation, visit every generated route, test its interactions, capture screenshots and compare them against the reference.

Fix major discrepancies before moving to the next page.

Track progress using a page-by-page checklist. Identify inaccessible reference pages, missing assets, unresolved interactions and backend dependencies explicitly.

Definition of completion

The result must contain a complete, consistent frontend for every page type discovered during the crawl, with working navigation and responsive layouts, accurate reference-based visual design, and clear integration points for production backend functionality.

Do not stop after creating the homepage. Do not replace unimplemented pages with generic placeholders. Do not claim exact visual parity without screenshot-based verification.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5c54322d-0ab3-45bd-8ce1-9a3829a30d8a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
