"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#videos", label: "Videos" },
  { href: "#about", label: "About Bruce" },
  { href: "#storybook", label: "The Storybook" },
  { href: "#music", label: "Songs" },
  { href: "#merch", label: "Merch" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-holly/95 backdrop-blur text-snow shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-heading text-xl font-semibold tracking-wide">
          <span className="text-2xl" aria-hidden="true">
            🦌
          </span>
          Bruce the Christmas Moose
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-snow/90 transition hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@TheChristmasMoose"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-berry px-4 py-2 font-semibold text-snow shadow transition hover:bg-berry-dark"
          >
            Watch on YouTube
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-snow/15 bg-holly-dark px-5 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 font-medium text-snow/90 transition hover:bg-holly/60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@TheChristmasMoose"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-berry px-4 py-2 text-center font-semibold text-snow shadow"
          >
            Watch on YouTube
          </a>
        </nav>
      )}
    </header>
  );
}
