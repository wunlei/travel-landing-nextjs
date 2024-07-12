import Header from "@/components/commons/Header";
import HeroSection from "./HeroSection";
import SelectTourSection from "./SelectTourSection";
import ReviewSection from "./ReviewSection";
import GallerySection from "./GallerySection";
import StoriesSection from "./StoriesSection";
import CTASection from "./CTASection";
import CreateTourSection from "./CreateTourSection";

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <SelectTourSection />
        <CreateTourSection />
        <ReviewSection />
        <GallerySection />
        <StoriesSection />
        <CTASection />
      </main>
    </>
  );
}

export default HomePage;
