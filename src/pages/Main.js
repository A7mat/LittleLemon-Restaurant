import "../styles/Main.scss";
import HeroSection from "../components/Main/HeroSection";
import HighlightSection from "../components/Main/HighlightSection";
import AboutSection from "../components/Main/About";
import TestimonialsSection from "../components/Main/Testimonials";

const Main = () => {
  
  return (
    <main className="main-container">
      <HeroSection/>
      <HighlightSection/>
      <TestimonialsSection/>
      <AboutSection/>
    </main>
  );
};
export default Main;
