// TODO: Replace with real products, images, and store links when ready.
const PLACEHOLDER_PRODUCTS = [
  { name: "Bruce Plush Toy", emoji: "🧸" },
  { name: "Cozy Holiday Tee", emoji: "👕" },
  { name: "Bruce's Mug", emoji: "☕" },
  { name: "Storybook Set", emoji: "📖" },
];

export default function Merch() {
  return (
    <section id="merch" className="bg-snow-dim py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-berry">
            North Pole Shop
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-holly sm:text-4xl">
            Bruce&apos;s Merch
          </h2>
          <p className="mt-3 text-cocoa/80">
            Bring a little Bruce magic home! Our shop is being wrapped up
            with love &mdash; goodies coming soon.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PLACEHOLDER_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group relative flex flex-col items-center rounded-3xl border-2 border-dashed border-holly/20 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="absolute -top-3 right-3 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-cocoa shadow">
                Soon
              </span>
              <span className="text-5xl" aria-hidden="true">
                {product.emoji}
              </span>
              <p className="mt-4 font-heading font-semibold text-cocoa">
                {product.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-holly/10 px-5 py-2 font-medium text-holly">
            🎁 Want a heads up when the shop opens? Follow Bruce on YouTube!
          </span>
        </div>
      </div>
    </section>
  );
}
