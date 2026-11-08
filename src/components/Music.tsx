const SONGS = [
  {
    id: "4BKES3nwj0Y",
    title: "Bruce the Christmas Moose: He Saved Christmas!",
    language: "English",
  },
  {
    id: "28y_As1XzIo",
    title: "Bruce, el Alce de Navidad: Canción de Navidad",
    language: "Español",
  },
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
            Jingly, jolly Christmas songs starring Bruce. Press play and sing
            along with the whole family!
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {SONGS.map((song) => (
            <div
              key={song.id}
              className="overflow-hidden rounded-3xl bg-berry-dark/40 shadow-lg ring-1 ring-snow/15"
            >
              <div className="aspect-video w-full overflow-hidden bg-holly-dark">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${song.id}`}
                  title={song.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center gap-3 p-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold text-cocoa">
                  🎵
                </span>
                <div>
                  <p className="font-heading font-semibold text-snow/95">
                    {song.title}
                  </p>
                  <p className="text-sm text-snow/70">{song.language}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-heading text-lg text-gold-light">
          🎅 More Bruce songs coming this holiday season!
        </p>
      </div>
    </section>
  );
}
