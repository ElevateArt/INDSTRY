# INDSTRY Prototype Pack (Copy/Paste Ready)

This pack contains a single-file React + Tailwind prototype that demonstrates the INDSTRY concept:

- TikTok-inspired short-form **Feed** (center hero)
- LinkedIn-inspired **Talent Profile** (right panel)
- **Jobs** mini job board (right tab)
- Slide-out **Masterclasses** learning feed (drawer)

## Quick start
1) Drop `IndstryPrototype.tsx` into your project, e.g.:
   - `src/pages/IndstryPrototype.tsx`

2) Ensure Tailwind is enabled in your React app.

3) Render it:
```tsx
import IndstryPrototype from "./pages/IndstryPrototype";

export default function App(){
  return <IndstryPrototype />;
}
```

## Next wiring steps (recommended)
- Replace `mockFeed`, `mockProfile`, `mockJobs`, `mockCourses` with real API data.
- Swap the video placeholder for a real `<video />` player.
- Convert the feed to scroll + snap + virtualization (tanstack/virtual).
- Connect profile CTA to a public profile route: `/u/:handle`
- Connect jobs to `/jobs/:id` detail + quick apply flow
- Connect courses to `/learn/:courseId` + progress tracking
