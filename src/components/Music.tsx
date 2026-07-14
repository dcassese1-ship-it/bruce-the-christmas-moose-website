// TODO: Replace with real songs once track list & audio/video links are ready.
const PLACEHOLDER_SONGS = [
  { title: "Song title coming soon", length: "--:--" },
  { title: "Song title coming soon", length: "--:--" },
  { title: "Song title coming soon", length: "--:--" },
  { title: "Song title coming soon", length: "--:--" },
];

export default function Music() {
  return (
    <section id="music" className="bg-berry py-20 text-snow">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-gold-light">
            Sing Along
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
            Bruce&apos;s Songs
          </h2>
          <p className="mt-3 text-snow/90">
            Bruce&apos;s cozy sing-along songs are on their way! Check back
            soon for jingly, jolly tunes you can hum all winter long.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl bg-berry-dark/40 shadow-lg ring-1 ring-snow/15">
          {PLACEHOLDER_SONGS.map((song, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-6 py-4 ${
                i !== PLACEHOLDER_SONGS.length - 1
                  ? "border-b border-snow/15"
                  : ""
              }`}
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold text-cocoa">
                🎵
              </span>
              <div className="flex-1">
                <p className="font-heading font-semibold text-snow/95">
                  {song.title}
                </p>
                <p className="text-sm text-snow/70">Coming soon</p>
              </div>
              <span className="font-mono text-sm text-snow/70">
                {song.length}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-heading text-lg text-gold-light">
          🎅 New songs dropping this holiday season &mdash; stay tuned!
        </p>
      </div>
    </section>
  );
}
