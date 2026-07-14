const SOCIAL_LINKS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TheChristmasMoose",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4 1.3-.1 1.7-.1 4.9-.1Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 0-1.6.2-1.9.3-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.6.3 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1 0 1.6-.2 1.9-.3.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    name: "TikTok",
    href: "#",
    path: "M16.6 2h-3.2v13.7c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6 0 .9.1V9.6a6.1 6.1 0 0 0-.9-.1A6.1 6.1 0 0 0 4.4 15.6 6.1 6.1 0 0 0 10.5 21.7a6.1 6.1 0 0 0 6.1-6.1V9.1a8.3 8.3 0 0 0 4.9 1.6V7.5a5.1 5.1 0 0 1-4.9-5.5Z",
  },
  {
    name: "Facebook",
    href: "#",
    path: "M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6v3.3h2.8V22h3.1Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa text-snow">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2 font-heading text-xl font-semibold">
              <span className="text-2xl" aria-hidden="true">
                🦌
              </span>
              Bruce the Christmas Moose
            </a>
            <p className="mt-3 max-w-xs text-sm text-snow/70">
              Cozy Christmas stories, songs, and winter adventures from the
              North Pole, made for kids and families all year round.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold-light">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-snow/80">
              <li>
                <a href="#videos" className="transition hover:text-gold-light">
                  Featured Videos
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-gold-light">
                  About Bruce
                </a>
              </li>
              <li>
                <a href="#storybook" className="transition hover:text-gold-light">
                  The Storybook
                </a>
              </li>
              <li>
                <a href="#music" className="transition hover:text-gold-light">
                  Songs
                </a>
              </li>
              <li>
                <a href="#merch" className="transition hover:text-gold-light">
                  Merch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold-light">
              Follow Along
            </h3>
            <div className="mt-3 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-snow/10 text-snow transition hover:bg-berry"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-snow/15 pt-6 text-center text-sm text-snow/60 md:flex-row md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Bruce the Christmas Moose. All
            rights reserved.
          </p>
          <p>Made with 🎄 and hot cocoa at the North Pole.</p>
        </div>
      </div>
    </footer>
  );
}
