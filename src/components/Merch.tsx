export default function Merch() {
  return (
    <section id="merch" className="bg-snow-dim py-12">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-widest text-berry">
          North Pole Shop
        </span>
        <p className="mt-3 font-heading text-xl font-semibold text-holly sm:text-2xl">
          🎁 Bruce plush toys, tees, and mugs are coming soon!
        </p>
        <a
          href="https://www.youtube.com/@TheChristmasMoose"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-holly px-5 py-2 font-medium text-snow shadow transition hover:bg-holly-dark"
        >
          Follow Bruce on YouTube for updates
        </a>
      </div>
    </section>
  );
}
