import Image from "next/image";

// Set this to the PDF path in /public (e.g. "/coloring/bruce-coloring-pages.pdf")
// once the coloring pages are ready. The section stays hidden until then.
export const COLORING_PDF: string | null = "/coloring/bruce-coloring-pages.pdf";

export default function ColoringPages() {
  if (!COLORING_PDF) return null;

  return (
    <section id="coloring" className="bg-snow-dim py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-widest text-berry">
          Free Printables
        </span>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-holly sm:text-4xl">
          Bruce Coloring Pages
        </h2>
        <p className="mt-3 text-cocoa/80">
          Print, color, and share! Free Bruce the Christmas Moose coloring
          pages for kids, families, and classrooms.
        </p>
        <div className="relative mx-auto mt-8 aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border-4 border-white bg-white shadow-lg ring-1 ring-holly/10">
          <Image
            src="/coloring/preview.png"
            alt="Coloring page of Santa and Bruce the Christmas Moose smiling side by side"
            fill
            className="object-contain"
            sizes="(min-width: 640px) 28rem, 100vw"
          />
        </div>
        <p className="mt-4 text-sm text-cocoa/70">
          7 printable pages (cover + 6 scenes from the story) &middot; Letter size
        </p>
        <a
          href={COLORING_PDF}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-berry px-7 py-3.5 font-heading text-lg font-semibold text-snow shadow-lg transition hover:-translate-y-0.5 hover:bg-berry-dark"
        >
          <span aria-hidden="true">🖍️</span> Download Free Coloring Pages
        </a>
      </div>
    </section>
  );
}
