import Header from "@/components/commons/Header";
import HeroSection from "./HeroSection";
import SelectTourSection from "./SelectTourSection";
import ReviewSection from "./ReviewSection";

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <SelectTourSection />
        <ReviewSection />
      </main>
    </>
  );
}

export default HomePage;
