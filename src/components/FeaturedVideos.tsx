const FEATURED_VIDEO = {
  id: "4BKES3nwj0Y",
  title: "This Christmas Moose Will Melt Your Heart",
};

const SHORTS = [
  { id: "7a1AGvUVQZA", title: "Off-Season Training" },
  { id: "yQPw_sFmxAY", title: "Bruce Out for a Run" },
  { id: "w3a0fz55TnE", title: "Spring Training - North Pole Flight Practice" },
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

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border-4 border-white bg-white shadow-md ring-1 ring-holly/10 transition hover:-translate-y-1 hover:shadow-xl">
          <div className="aspect-video w-full overflow-hidden bg-holly-dark">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${FEATURED_VIDEO.id}`}
              title={FEATURED_VIDEO.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="font-heading text-lg font-semibold text-cocoa">
              {FEATURED_VIDEO.title}
            </h3>
          </div>
        </div>

        <h3 className="mt-16 text-center font-heading text-xl font-semibold text-holly">
          Quick Winter Shorts
        </h3>
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-3">
          {SHORTS.map((video) => (
            <div
              key={video.id}
              className="group mx-auto w-full max-w-[220px] overflow-hidden rounded-3xl border-4 border-white bg-white shadow-md ring-1 ring-holly/10 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[9/16] w-full overflow-hidden bg-holly-dark">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-3">
                <h4 className="font-heading text-sm font-semibold text-cocoa">
                  {video.title}
                </h4>
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
