import React, { useMemo, useState } from "react";

/**
 * INDSTRY — Web Prototype (single-file)
 * -----------------------------------------------------------------------------
 * PURPOSE
 * INDSTRY is a creator-first professional network that blends:
 * 1) A TikTok-inspired short-form feed (proof of skill + discovery)
 * 2) A LinkedIn-inspired profile (credibility + resume + references)
 * 3) A job board (getting booked + hiring)
 * 4) A Masterclass lane (skill-building + certifications)
 *
 * CORE IDEA
 * Most creative platforms split "content" from "career". INDSTRY merges them:
 * - The feed is your living portfolio (reels, BTS, process, before/after)
 * - Your profile is your professional credibility (services, rates, reviews, history)
 * - Jobs is the transaction layer (apply, shortlist, book)
 * - Masterclasses are the growth layer (learn, certify, level up)
 *
 * VISUAL DIRECTION
 * - Premium, night-mode, glassy gradients, high-contrast type (Apple-ish polish)
 * - Center feed is the hero (vertical content). Right column is "career" context.
 * - Drawer is a "learning lane" that slides out without breaking the flow.
 *
 * IMPLEMENTATION NOTES (so your dev can wire this quickly)
 * - Replace mock data in `mockFeed`, `mockProfile`, `mockJobs`, `mockCourses`.
 * - Wire routing later (Feed/Discover/Jobs/Messages/Profile). Prototype keeps it 1-screen.
 * - For real app: feed should be virtualized (react-virtual / tanstack virtual)
 * - Video player: use <video> or a dedicated player; keep controls minimal.
 *
 * DROP-IN USAGE
 * - Put this file anywhere (e.g., src/pages/IndstryPrototype.tsx)
 * - Ensure Tailwind is enabled.
 * - Render <IndstryPrototype /> in your route.
 */

// ---------- Types (kept lightweight for fast prototyping) ----------

type FeedPost = {
  id: string;
  handle: string;
  displayName: string;
  avatarInitials: string;
  headline: string;
  category: string;
  location: string;
  captionTitle: string;
  captionBody: string;
  stats: { likes: string; comments: string; saves: string };
  tags: string[];
};

type TalentProfile = {
  name: string;
  initials: string;
  title: string;
  specialties: string[];
  ratingText: string;
  location: string;
  verified: boolean;
  portfolio: string[];
  services: { label: string; value: string }[];
  availability: string;
};

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  budget: string;
  tags: string[];
};

type Course = {
  id: string;
  title: string;
  mentor: string;
  level: string;
  duration: string;
  progressPct?: number;
};

// ---------- Helper UI primitives (inline to keep 1-file copy/paste) ----------

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 border border-slate-700 text-slate-300">
      {children}
    </span>
  );
}

function SoftCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={
        "rounded-3xl bg-slate-900/80 border border-slate-800 shadow-[0_0_60px_rgba(15,23,42,0.35)] " +
        className
      }
    >
      {children}
    </div>
  );
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-[11px] px-3 py-1.5 rounded-full bg-slate-50 text-slate-950 font-semibold hover:bg-cyan-300 transition"
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-[11px] px-3 py-1.5 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800/70 transition"
    >
      {children}
    </button>
  );
}

// ---------- Main Prototype ----------

export default function IndstryPrototype() {
  const [activeNav, setActiveNav] = useState<"Feed" | "Discover" | "Jobs" | "Messages" | "Profile">("Feed");
  const [activeRightTab, setActiveRightTab] = useState<"profile" | "jobs">("profile");
  const [isMasterclassOpen, setIsMasterclassOpen] = useState(false);

  // Feed UX placeholder: In real version this is scroll + snap per post
  const [activePostIndex, setActivePostIndex] = useState(0);

  const mockFeed: FeedPost[] = useMemo(
    () => [
      {
        id: "p1",
        handle: "@blend.by.kenna",
        displayName: "Kenna Reef",
        avatarInitials: "KR",
        headline: "Bridal Makeup • Editorial Sets",
        category: "Beauty Creators",
        location: "Los Angeles",
        captionTitle: "30-sec Reel: Soft Glam for Editorial Sets",
        captionBody:
          "BTS, tools used, skin prep, and the final look. In INDSTRY, your content becomes your portfolio — instantly bookable.",
        stats: { likes: "1.2k", comments: "142", saves: "310" },
        tags: ["Bridal", "Editorial", "Film/TV"],
      },
      {
        id: "p2",
        handle: "@lens.by.niko",
        displayName: "Niko James",
        avatarInitials: "NJ",
        headline: "DP • Music Videos",
        category: "Film / Photo",
        location: "NYC",
        captionTitle: "Lighting Breakdown: Neon + Skin Tones",
        captionBody:
          "This is the type of post that hires you. Quick breakdown + the finished frame. Hiring managers can tap into your full profile.",
        stats: { likes: "4.9k", comments: "520", saves: "1.1k" },
        tags: ["Cinematography", "Lighting", "Music Video"],
      },
      {
        id: "p3",
        handle: "@stylist.ayla",
        displayName: "Ayla Parker",
        avatarInitials: "AP",
        headline: "Wardrobe Stylist • Brand Campaigns",
        category: "Fashion",
        location: "Miami",
        captionTitle: "3 Looks in 10 Seconds (Client-approved)",
        captionBody:
          "Swipeable outfits, linked to your case studies and availability calendar. INDSTRY makes your work instantly actionable.",
        stats: { likes: "2.6k", comments: "201", saves: "740" },
        tags: ["Fashion", "Brand", "Styling"],
      },
    ],
    []
  );

  const mockProfile: TalentProfile = useMemo(
    () => ({
      name: "Kenna Reef",
      initials: "KR",
      title: "Celebrity Makeup Artist • Creative Director",
      specialties: ["Bridal", "Editorial", "Runway", "Film/TV"],
      ratingText: "⭐ 4.9 (128 reviews)",
      location: "📍 Los Angeles",
      verified: true,
      portfolio: ["Vogue Cover", "Film Set", "Runway Show", "Brand Campaign", "Bridal Party", "Music Video"],
      services: [
        { label: "On-set day rate", value: "$950" },
        { label: "Bridal package", value: "$650" },
        { label: "Touch-ups", value: "$150" },
      ],
      availability: "Thu • Fri • Sun",
    }),
    []
  );

  const mockJobs: Job[] = useMemo(
    () => [
      {
        id: "j1",
        title: "Beauty Brand Campaign – Lead MUA",
        company: "GlowHaus Studios",
        location: "Los Angeles • 3-day shoot",
        budget: "$2.8k project",
        tags: ["Campaign", "Photo + Video", "W2B"],
      },
      {
        id: "j2",
        title: "Streaming Series – Key Makeup Artist",
        company: "Sunset Line Productions",
        location: "LA • 8-week shoot",
        budget: "$2.4k / week",
        tags: ["Film/TV", "Union", "LA Local"],
      },
      {
        id: "j3",
        title: "Runway Show – Fashion Week",
        company: "Indstry Collective",
        location: "NYC • 2 nights",
        budget: "$1.1k total",
        tags: ["Runway", "Team Lead"],
      },
    ],
    []
  );

  const mockCourses: Course[] = useMemo(
    () => [
      {
        id: "c1",
        title: "Building a 6-Figure Bridal Business",
        mentor: "Talia Monroe",
        level: "Intermediate",
        duration: "8-part series • 2h 40m",
        progressPct: 38,
      },
      {
        id: "c2",
        title: "On-Set Etiquette for Film & TV",
        mentor: "David Cruz",
        level: "All levels",
        duration: "5 lessons • 1h 10m",
        progressPct: 0,
      },
      {
        id: "c3",
        title: "Lighting & Skin: Working With DPs",
        mentor: "Kenna Reef x Indie DP",
        level: "Advanced",
        duration: "Live session replay • 55m",
        progressPct: 72,
      },
      {
        id: "c4",
        title: "From Portfolio to Paid – Positioning Yourself for Brands",
        mentor: "INDSTRY Collective",
        level: "All levels",
        duration: "Mini-class • 30m",
        progressPct: 15,
      },
    ],
    []
  );

  const activePost = mockFeed[activePostIndex];

  function nextPost() {
    setActivePostIndex((i) => (i + 1) % mockFeed.length);
  }

  function prevPost() {
    setActivePostIndex((i) => (i - 1 + mockFeed.length) % mockFeed.length);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex font-sans">
      <LeftNav activeNav={activeNav} onSelect={setActiveNav} />

      {/* Main Surface */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Center: TikTok-style Feed (the hero) */}
        <section className="flex-1 flex items-center justify-center overflow-hidden px-2 py-3 md:px-6 md:py-6">
          <div className="w-full max-w-[440px]">
            <div className="mb-3 flex items-center justify-between px-1">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-slate-400">{activeNav}</p>
                <h1 className="text-sm font-semibold">For You</h1>
              </div>
              <div className="flex items-center gap-2">
                <GhostButton onClick={prevPost}>◀ Prev</GhostButton>
                <GhostButton onClick={nextPost}>Next ▶</GhostButton>
              </div>
            </div>

            <FeedCard post={activePost} />

            {/* Strategy footer: show why this feed matters */}
            <div className="mt-4 text-[11px] text-slate-400 leading-relaxed">
              <span className="text-slate-200 font-semibold">Concept:</span> The feed is not entertainment-first — it’s
              <span className="text-cyan-300"> hireability-first</span>. Every post connects to a profile, services, rates,
              and availability so viewers can convert into bookings.
            </div>
          </div>
        </section>

        {/* Right Column: LinkedIn-style profile + jobs */}
        <section className="hidden lg:flex w-[360px] xl:w-[440px] flex-col border-l border-slate-800 bg-slate-950/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-slate-800/80">
            <div className="flex gap-1 rounded-full bg-slate-900/80 p-1">
              <button
                onClick={() => setActiveRightTab("profile")}
                className={`px-3 py-1.5 text-[11px] rounded-full transition ${
                  activeRightTab === "profile"
                    ? "bg-slate-50 text-slate-950 font-semibold"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                Talent Profile
              </button>
              <button
                onClick={() => setActiveRightTab("jobs")}
                className={`px-3 py-1.5 text-[11px] rounded-full transition ${
                  activeRightTab === "jobs"
                    ? "bg-slate-50 text-slate-950 font-semibold"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                Jobs for You
              </button>
            </div>

            <button
              onClick={() => setIsMasterclassOpen(true)}
              className="text-[11px] px-3 py-1.5 rounded-full border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              Masterclasses
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {activeRightTab === "profile" ? (
              <ProfilePanel profile={mockProfile} />
            ) : (
              <JobsPanel jobs={mockJobs} />
            )}
          </div>
        </section>

        <MasterclassDrawer open={isMasterclassOpen} onClose={() => setIsMasterclassOpen(false)} courses={mockCourses} />
      </main>
    </div>
  );
}

// ---------- Left Nav ----------

function LeftNav({
  activeNav,
  onSelect,
}: {
  activeNav: "Feed" | "Discover" | "Jobs" | "Messages" | "Profile";
  onSelect: (v: "Feed" | "Discover" | "Jobs" | "Messages" | "Profile") => void;
}) {
  const items = [
    { label: "Feed" as const, icon: "▶", hint: "Watch talent + discover" },
    { label: "Discover" as const, icon: "🔍", hint: "Search skills + people" },
    { label: "Jobs" as const, icon: "💼", hint: "Apply + hire" },
    { label: "Messages" as const, icon: "💬", hint: "DM + booking chat" },
    { label: "Profile" as const, icon: "👤", hint: "Your public portfolio" },
  ];

  return (
    <aside className="hidden md:flex flex-col justify-between w-20 xl:w-60 border-r border-slate-800 px-3 py-4 bg-slate-950/90 backdrop-blur">
      <div className="space-y-8">
        <div className="flex items-center gap-2 xl:gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center font-bold text-slate-950 text-lg">
            IN
          </div>
          <div className="hidden xl:flex flex-col leading-tight">
            <span className="text-xs tracking-[0.25em] text-slate-400 uppercase">INDSTRY</span>
            <span className="text-xs text-slate-500">Create • Learn • Get Booked</span>
          </div>
        </div>

        <nav className="space-y-2 text-xs xl:text-sm">
          {items.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => onSelect(item.label)}
                className={
                  "flex items-center gap-3 w-full rounded-2xl px-2 py-2 xl:px-3 xl:py-2.5 transition " +
                  (isActive ? "bg-slate-800/90" : "hover:bg-slate-800/70")
                }
              >
                <span
                  className={
                    "flex h-7 w-7 items-center justify-center rounded-xl text-sm border " +
                    (isActive
                      ? "bg-slate-950 border-cyan-400/50 text-cyan-300"
                      : "bg-slate-900 border-slate-800 text-slate-200")
                  }
                >
                  {item.icon}
                </span>
                <span className="hidden xl:flex flex-col items-start">
                  <span className={isActive ? "text-slate-50" : "text-slate-200"}>{item.label}</span>
                  <span className="text-[10px] text-slate-500 leading-tight">{item.hint}</span>
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="space-y-2 text-[11px] text-slate-500 hidden xl:block">
        <p>Prototype: unified screen for INDSTRY pillars.</p>
        <p className="text-slate-600">Feed • Profiles • Jobs • Masterclasses</p>
      </div>
    </aside>
  );
}

// ---------- Feed Card ----------

function FeedCard({ post }: { post: FeedPost }) {
  return (
    <div className="relative w-full h-[72vh] md:h-[78vh] rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 shadow-[0_0_120px_rgba(56,189,248,0.25)] overflow-hidden flex">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-between p-4 md:p-5">
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 border border-slate-900 flex items-center justify-center text-[11px] font-semibold text-slate-950">
              {post.avatarInitials}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium">{post.handle}</span>
              <span className="text-[11px] text-slate-400">
                {post.headline} • {post.location}
              </span>
            </div>
          </div>
          <PrimaryButton>Follow</PrimaryButton>
        </header>

        {/* Video placeholder */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-[68%] rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-slate-700/80 flex items-center justify-center text-center px-6">
            <div className="space-y-2">
              <p className="text-[11px] tracking-[0.2em] uppercase text-slate-400">For You • {post.category}</p>
              <h2 className="text-lg md:text-xl font-semibold">
                <span className="text-cyan-300">{post.captionTitle}</span>
              </h2>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">{post.captionBody}</p>

              <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                {post.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-slate-100">
              <span>❤</span>
              <span>{post.stats.likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-slate-100">
              <span>💬</span>
              <span>{post.stats.comments}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-slate-100">
              <span>🔖</span>
              <span>{post.stats.saves}</span>
            </button>
          </div>
          <button className="flex items-center gap-1 hover:text-slate-100">
            <span>↗</span>
            <span>Share</span>
          </button>
        </footer>
      </div>

      {/* Interaction rail */}
      <div className="hidden md:flex flex-col items-center justify-center gap-4 w-16 border-l border-slate-800/80 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950/80">
        {[{ icon: "❤", label: "Like" }, { icon: "💬", label: "Comment" }, { icon: "🔖", label: "Save" }, { icon: "↗", label: "Share" }].map(
          (item) => (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1 text-xs text-slate-400 hover:text-slate-100"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[10px]">{item.label}</span>
            </button>
          )
        )}
      </div>
    </div>
  );
}

// ---------- Profile Panel (LinkedIn-inspired) ----------

function ProfilePanel({ profile }: { profile: TalentProfile }) {
  return (
    <div className="space-y-4">
      <SoftCard className="overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-cyan-400/20 via-fuchsia-500/10 to-slate-900" />
        <div className="px-4 pb-4 -mt-6 flex gap-3">
          <div className="h-14 w-14 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center text-lg">
            {profile.initials}
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold">{profile.name}</h2>
                <p className="text-[11px] text-slate-400">{profile.title}</p>
              </div>
              <PrimaryButton>View Public Profile</PrimaryButton>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {profile.specialties.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-400">
              <span>{profile.ratingText}</span>
              <span>{profile.location}</span>
              <span>{profile.verified ? "✅ Verified" : "Unverified"}</span>
            </div>
          </div>
        </div>
      </SoftCard>

      <SoftCard className="p-3 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold">Portfolio Highlights</h3>
          <button className="text-[11px] text-slate-400 hover:text-slate-100">View all</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {profile.portfolio.map((label, idx) => (
            <div
              key={label}
              className="aspect-[4/5] rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-end p-1.5 text-[9px] text-slate-200"
            >
              <span className="line-clamp-2 bg-slate-900/70 px-1 py-0.5 rounded-md">{idx + 1}. {label}</span>
            </div>
          ))}
        </div>
      </SoftCard>

      <SoftCard className="p-3 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold">Services & Availability</h3>
          <button className="text-[11px] text-slate-400 hover:text-slate-100">Edit</button>
        </div>
        <div className="space-y-2 text-[11px]">
          {profile.services.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span>{s.label}</span>
              <span className="font-medium text-slate-50">{s.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between text-slate-400">
            <span>Next available</span>
            <span>{profile.availability}</span>
          </div>
        </div>
      </SoftCard>

      {/* Future: Credentials / Work History / Certifications */}
      <SoftCard className="p-3 space-y-2">
        <h3 className="text-xs font-semibold">Credibility Layer (LinkedIn DNA)</h3>
        <p className="text-[11px] text-slate-400">
          Add: work history, credits (shows), brand clients, union status, references, badges, and course certifications.
          This is where INDSTRY outperforms generic portfolio sites.
        </p>
        <div className="flex flex-wrap gap-2">
          <Pill>Verified ID</Pill>
          <Pill>Top 10% in Beauty</Pill>
          <Pill>Masterclass Certified</Pill>
        </div>
      </SoftCard>
    </div>
  );
}

// ---------- Jobs Panel ----------

function JobsPanel({ jobs }: { jobs: Job[] }) {
  return (
    <div className="space-y-3">
      {jobs.map((job) => (
        <article key={job.id} className="rounded-3xl bg-slate-900/80 border border-slate-800 px-3 py-3 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xs font-semibold leading-snug">{job.title}</h3>
              <p className="text-[11px] text-slate-400">{job.company}</p>
            </div>
            <span className="text-[11px] text-cyan-300 font-medium whitespace-nowrap">{job.budget}</span>
          </div>
          <p className="text-[11px] text-slate-400 flex items-center gap-1">
            <span>📍</span>
            <span>{job.location}</span>
          </p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {job.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2 text-[11px]">
            <PrimaryButton>Quick Apply</PrimaryButton>
            <button className="text-slate-400 hover:text-slate-100 flex items-center gap-1">
              <span>View details</span>
              <span>↗</span>
            </button>
          </div>
        </article>
      ))}

      <SoftCard className="p-3">
        <h3 className="text-xs font-semibold">Why this matters</h3>
        <p className="text-[11px] text-slate-400 mt-1">
          Jobs should be fed by the content graph. When a hiring manager likes a post, they can immediately:
          shortlist → message → book. That’s INDSTRY’s conversion loop.
        </p>
      </SoftCard>
    </div>
  );
}

// ---------- Masterclass Drawer ----------

function MasterclassDrawer({
  open,
  onClose,
  courses,
}: {
  open: boolean;
  onClose: () => void;
  courses: Course[];
}) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-40 w-full sm:w-[380px] md:w-[440px] bg-slate-950/95 border-l border-slate-800 shadow-[0_0_80px_rgba(56,189,248,0.4)] transform transition-transform duration-300 ease-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="INDSTRY Masterclasses"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-slate-400">Learning Feed</p>
          <h2 className="text-sm font-semibold">INDSTRY Masterclasses</h2>
        </div>
        <button
          onClick={onClose}
          className="h-8 w-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-sm hover:bg-slate-800"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 opacity-60" />

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-[11px]">
        <p className="text-slate-400">
          The Masterclass lane is where creators level up. Courses can grant badges/certifications that display on profiles.
          This increases trust and improves booking conversion.
        </p>

        {courses.map((course) => (
          <article key={course.id} className="rounded-3xl bg-slate-900/80 border border-slate-800 p-3 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-xs font-semibold leading-snug">{course.title}</h3>
                <p className="text-[11px] text-slate-400">with {course.mentor}</p>
              </div>
              <Pill>{course.level}</Pill>
            </div>

            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              <span>▶</span>
              <span>{course.duration}</span>
            </p>

            {typeof course.progressPct === "number" && (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>Progress</span>
                  <span>{course.progressPct}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" style={{ width: `${course.progressPct}%` }} />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-1">
              <PrimaryButton>Continue</PrimaryButton>
              <button className="text-[11px] text-slate-400 hover:text-slate-100">Add to playlist</button>
            </div>
          </article>
        ))}

        <SoftCard className="p-3">
          <h3 className="text-xs font-semibold">Future: Learning Feed UX</h3>
          <ul className="mt-2 space-y-1 text-[11px] text-slate-400 list-disc pl-4">
            <li>Short lessons autoplay like a feed (micro-learning)</li>
            <li>Save lessons to playlists (“On-set etiquette”, “Client pipeline”, “Lighting”)</li>
            <li>Earn certificates that unlock profile badges</li>
            <li>AI coach recommends lessons based on missed gigs or weak portfolio signals</li>
          </ul>
        </SoftCard>
      </div>
    </div>
  );
}
