export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-holly-light/10 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-berry">
            Meet the Moose
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-holly sm:text-4xl">
            About Bruce
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-cocoa/90">
            <p>
              Once upon a snowy morning, a big-hearted moose named Bruce
              wandered into the North Pole looking for a warm place to rest
              his antlers &mdash; and he never left! Now he spends his days
              baking gingerbread with the elves, humming carols with the
              reindeer, and collecting the very best stories the winter
              woods have to offer.
            </p>
            <p>
              Bruce believes hot cocoa tastes better with a story, every
              snowflake is one-of-a-kind, and there&apos;s always room for
              one more friend by the fire. Join him each week for gentle
              Christmas tales, sing-along songs, and cozy winter adventures
              made just for kids and families.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-holly/10">
              <div className="text-2xl">🎄</div>
              <p className="mt-1 text-sm font-semibold text-holly">
                Cozy Stories
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-holly/10">
              <div className="text-2xl">🎵</div>
              <p className="mt-1 text-sm font-semibold text-holly">
                Sing-Alongs
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-holly/10">
              <div className="text-2xl">❄️</div>
              <p className="mt-1 text-sm font-semibold text-holly">
                Winter Fun
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold shadow-xl sm:h-80 sm:w-80">
            <span className="text-8xl sm:text-9xl" aria-hidden="true">
              🦌
            </span>
            <span
              className="absolute -right-2 top-6 text-4xl sm:text-5xl"
              aria-hidden="true"
            >
              ❄️
            </span>
            <span
              className="absolute -left-4 bottom-8 text-3xl sm:text-4xl"
              aria-hidden="true"
            >
              ❄️
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
