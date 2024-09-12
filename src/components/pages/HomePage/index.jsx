import Header from "@/components/commons/Header";
import HeroSection from "./HeroSection";
import SelectTourSection from "./SelectTourSection";
import ReviewSection from "./ReviewSection";
import GallerySection from "./GallerySection";
import StoriesSection from "./StoriesSection";
import CTASection from "./CTASection";
import CreateTourSection from "./CreateTourSection";
import Footer from "@/components/commons/Footer";
import { AppContext, appData } from "@/data";

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <AppContext.Provider value={appData}>
          <HeroSection />
          <SelectTourSection />
          <CreateTourSection />
          <ReviewSection />
          <GallerySection />
          <StoriesSection />
          <CTASection />
        </AppContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
