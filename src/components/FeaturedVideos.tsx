// TODO: Swap these placeholder YouTube video IDs for Bruce's real uploads.
const FEATURED_VIDEOS = [
  { id: "PLACEHOLDER_ID_1", title: "Bruce's Big North Pole Adventure" },
  { id: "PLACEHOLDER_ID_2", title: "The Night the Snow Sang Back" },
  { id: "PLACEHOLDER_ID_3", title: "Bruce & the Lost Christmas Star" },
  { id: "PLACEHOLDER_ID_4", title: "Cocoa, Carols & Cozy Blankets" },
  { id: "PLACEHOLDER_ID_5", title: "Bruce's Sleigh Bell Sing-Along" },
  { id: "PLACEHOLDER_ID_6", title: "A Very Mooseletide Story" },
];

export default function FeaturedVideos() {
  return (
    <section id="videos" className="bg-snow py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-berry">
            Grab Your Cocoa
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-holly sm:text-4xl">
            Featured Videos
          </h2>
          <p className="mt-3 text-cocoa/80">
            Snuggle up and press play on some of Bruce&apos;s favorite tales
            from the North Pole.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_VIDEOS.map((video, i) => (
            <div
              key={`${video.id}-${i}`}
              className="group overflow-hidden rounded-3xl border-4 border-white bg-white shadow-md ring-1 ring-holly/10 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video w-full overflow-hidden bg-holly-dark">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold text-cocoa">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@TheChristmasMoose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-holly px-6 py-3 font-heading font-semibold text-snow shadow transition hover:bg-holly-dark"
          >
            See All Videos on YouTube <span aria-hidden="true">🎥</span>
          </a>
        </div>
      </div>
    </section>
  );
}
