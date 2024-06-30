import Header from "@/components/commons/Header";
import HeroSection from "./HeroSection";
import SelectTourSection from "./SelectTourSection";

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection/>
        <SelectTourSection/>
      </main>
    </>
  );
}

export default HomePage;
