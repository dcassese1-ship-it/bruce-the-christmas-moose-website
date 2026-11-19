"use client";

import { useEffect, useState } from "react";

// Each part goes public on YouTube at 8:00 AM Eastern (EST, UTC-5) on its date.
// The embed stays locked on the site until that moment, so visitors never see
// a "Video unavailable" player for a Short that hasn't published yet.
const PARTS = [
  { part: 1, id: "GUDU1QN2NFo", title: "Bruce the Christmas Moose Loves Christmas!", emoji: "🎄", date: "2026-12-16" },
  { part: 2, id: "8Pkqu1Lixy8", title: "Can a Moose Fly? Bruce's Big Dream", emoji: "🦌", date: "2026-12-17" },
  { part: 3, id: "_CvfO6JBT7Q", title: "Uh-Oh! Santa's Reindeer All Catch Colds", emoji: "🤧", date: "2026-12-18" },
  { part: 4, id: "930iYaVrkdM", title: "Bruce Has a Big Idea to Save Christmas!", emoji: "💡", date: "2026-12-19" },
  { part: 5, id: "5NaW8xAWTtc", title: "Santa's Christmas Magic Makes Bruce Fly!", emoji: "✨", date: "2026-12-20" },
  { part: 6, id: "xgrwib2kF0U", title: "Up, Up and Away! Bruce Takes Off", emoji: "🚀", date: "2026-12-21" },
  { part: 7, id: "eohApGFn6Zs", title: "A Moose in the Sky! Bruce Pulls Santa's Sleigh", emoji: "🦌", date: "2026-12-22" },
  { part: 8, id: "s2F6maWIN-U", title: "Bruce Saves Christmas!", emoji: "🎁", date: "2026-12-23" },
  { part: 9, id: "9PfS6WCQAN0", title: "Believe in Your Dreams: Bruce's Christmas Message", emoji: "🌟", date: "2026-12-24" },
].map((p) => ({
  ...p,
  unlockAt: new Date(`${p.date}T08:00:00-05:00`).getTime(),
  label: new Date(`${p.date}T12:00:00-05:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "America/New_York",
  }),
}));

const SERIES_START = PARTS[0].unlockAt;
const DAY = 86_400_000;

function countdown(ms: number) {
  const days = Math.floor(ms / DAY);
  const hours = Math.floor((ms % DAY) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  return { days, hours, minutes };
}

export default function StorySeries() {
  // null until mounted so the server and first client render match.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const first = setTimeout(tick, 0);
    const timer = setInterval(tick, 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, []);

  const started = now !== null && now >= SERIES_START;
  const unlocked = now === null ? 0 : PARTS.filter((p) => now >= p.unlockAt).length;
  const finished = unlocked === PARTS.length;
  const cd = now !== null && !started ? countdown(SERIES_START - now) : null;

  return (
    <section id="story-series" className="bg-snow-dim py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-berry">
            Dec 16 &ndash; Dec 24
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-holly sm:text-4xl">
            Bruce&apos;s 9-Part Christmas Story
          </h2>
          <p className="mt-3 text-cocoa/80">
            One new chapter every morning on the way to Christmas Eve. Watch
            how Bruce, a big clumsy moose, saves Christmas.
          </p>

          {!started && (
            <div className="mt-6 inline-flex flex-col items-center rounded-3xl bg-white px-6 py-4 shadow-md ring-1 ring-holly/10">
              <span className="text-sm font-bold uppercase tracking-wide text-cocoa/70">
                Part 1 arrives in
              </span>
              <span
                className="mt-1 font-heading text-2xl font-semibold text-holly"
                aria-live="polite"
              >
                {cd
                  ? `${cd.days}d ${cd.hours}h ${cd.minutes}m`
                  : "Dec 16 at 8:00 AM ET"}
              </span>
            </div>
          )}
          {started && !finished && (
            <span className="mt-5 inline-block rounded-full bg-gold px-4 py-1 text-sm font-bold uppercase tracking-wide text-cocoa">
              🎬 Part {unlocked} of 9 is out now
            </span>
          )}
          {finished && (
            <span className="mt-5 inline-block rounded-full bg-gold px-4 py-1 text-sm font-bold uppercase tracking-wide text-cocoa">
              🎉 The whole story is here
            </span>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {PARTS.map((p) => {
            const open = now !== null && now >= p.unlockAt;
            return (
              <div
                key={p.id}
                className="mx-auto w-full max-w-[240px] overflow-hidden rounded-3xl border-4 border-white bg-white shadow-md ring-1 ring-holly/10"
              >
                <div className="aspect-[9/16] w-full overflow-hidden bg-holly-dark">
                  {open ? (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${p.id}`}
                      title={`Part ${p.part}: ${p.title}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-holly to-holly-dark px-3 text-center text-snow">
                      <span className="text-4xl" aria-hidden="true">
                        {p.emoji}
                      </span>
                      <span className="font-heading text-lg font-semibold">
                        Part {p.part}
                      </span>
                      <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-cocoa">
                        Coming {p.label}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-heading text-sm font-semibold text-cocoa">
                    <span className="text-berry">Part {p.part}.</span> {p.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@TheChristmasMoose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-holly px-6 py-3 font-heading font-semibold text-snow shadow transition hover:bg-holly-dark"
          >
            Subscribe so you never miss a part <span aria-hidden="true">🔔</span>
          </a>
        </div>
      </div>
    </section>
  );
}
