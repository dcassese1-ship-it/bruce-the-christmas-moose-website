import Image from "next/image";

const GALLERY = [
  {
    src: "/book/bruce-book-images/02-dreaming-to-fly.png",
    caption: "Dreaming of Flight",
    alt: "Bruce the moose wearing branches like antlers, running through the snow with forest friends cheering him on",
  },
  {
    src: "/book/bruce-book-images/03-christmas-eve-problem.png",
    caption: "Trouble on Christmas Eve",
    alt: "Santa and Mrs. Claus looking worried beside the reindeer, all wrapped in blankets",
  },
  {
    src: "/book/bruce-book-images/04-bruce-hears-the-news.png",
    caption: "A Meeting at the Workshop",
    alt: "Santa placing a hand on Bruce's antlers outside the workshop as elves peek through the door",
  },
  {
    src: "/book/bruce-book-images/05-a-sprinkle-of-magic.png",
    caption: "A Sprinkle of Magic",
    alt: "Bruce glowing with sparkling magic as Santa and cheering elves look on",
  },
];

export default function Storybook() {
  return (
    <section id="storybook" className="bg-snow py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-berry">
            A Bedtime Tale
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-holly sm:text-4xl">
            The Storybook
          </h2>
          <p className="mt-3 text-lg italic text-cocoa/80">
            The tale of the moose who saved Christmas
          </p>
          <span className="mt-5 inline-block rounded-full bg-gold px-4 py-1 text-sm font-bold uppercase tracking-wide text-cocoa">
            📖 Coming Soon
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-white shadow-lg ring-1 ring-holly/10">
            <Image
              src="/book/bruce-book-images/01-moose-who-loved-christmas.png"
              alt="Bruce the moose standing in a snowy forest, gazing toward Santa's glowing workshop in the distance"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div>
            <blockquote className="relative font-heading text-xl italic leading-relaxed text-cocoa">
              <span className="mr-1 text-4xl not-italic text-gold-dark" aria-hidden="true">
                &ldquo;
              </span>
              In a snowy forest far, far north, where icicles glistened and
              pine trees whispered, there lived a moose named Bruce. Bruce
              wasn&apos;t like the other moose. While they napped under the
              stars, he&apos;d stare toward Santa&apos;s workshop, where the
              lights twinkled brighter than the moon.
            </blockquote>
            <p className="mt-6 text-cocoa/80">
              Bruce dreams of soaring through the sky like Santa&apos;s
              reindeer &mdash; if only a big, clumsy moose could ever fly.
              But when the reindeer all come down with a case of the Snow
              Flu on Christmas Eve, Bruce finally gets his chance to prove
              that even the most unlikely dreamer can save the day.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-heading text-xl font-semibold text-holly">
            A Peek Inside
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {GALLERY.map((image) => (
              <div
                key={image.src}
                className="group overflow-hidden rounded-2xl border-4 border-white bg-white shadow-sm ring-1 ring-holly/10 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
                <p className="px-2 py-2 text-center text-xs font-semibold text-cocoa sm:text-sm">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
