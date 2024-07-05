import Header from "@/components/commons/Header";
import HeroSection from "./HeroSection";
import SelectTourSection from "./SelectTourSection";
import ReviewSection from "./ReviewSection";
import GallerySection from "./GallerySection";
import StoriesSection from "./StoriesSection";

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <SelectTourSection />
        <ReviewSection />
        <GallerySection/>
        <StoriesSection/>
      </main>
    </>
  );
}

export default HomePage;
