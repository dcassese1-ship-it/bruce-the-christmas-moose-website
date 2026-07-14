import MooseIllustration from "./MooseIllustration";
import Snowfall from "./Snowfall";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-holly via-holly to-holly-dark text-snow"
    >
      <Snowfall />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-24 pt-14 md:flex-row md:pb-32 md:pt-20">
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 rounded-full bg-gold px-4 py-1 text-sm font-bold uppercase tracking-wide text-cocoa">
            Live from the North Pole
          </span>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Bruce the
            <br />
            <span className="text-gold-light">Christmas Moose</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-snow/90 sm:text-xl">
            Cozy Christmas stories, sing-along songs, and jolly winter
            adventures from everyone&apos;s favorite North Pole neighbor!
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.youtube.com/@TheChristmasMoose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-berry px-7 py-3.5 font-heading text-lg font-semibold text-snow shadow-lg transition hover:-translate-y-0.5 hover:bg-berry-dark"
            >
              <span aria-hidden="true">▶️</span> Watch on YouTube
            </a>
            <a
              href="#videos"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-snow/70 px-7 py-3.5 font-heading text-lg font-semibold text-snow transition hover:bg-snow/10"
            >
              See Featured Videos
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <MooseIllustration className="w-56 drop-shadow-2xl sm:w-72 md:w-96" />
        </div>
      </div>

      {/* Snow drift along the bottom edge */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full text-snow"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,60 C240,110 480,10 720,40 C960,70 1200,110 1440,50 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
}
