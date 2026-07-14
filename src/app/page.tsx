import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedVideos from "@/components/FeaturedVideos";
import About from "@/components/About";
import Storybook from "@/components/Storybook";
import Music from "@/components/Music";
import Merch from "@/components/Merch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedVideos />
        <About />
        <Storybook />
        <Music />
        <Merch />
      </main>
      <Footer />
    </>
  );
}
