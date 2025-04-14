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

      {/* <section className="testimonials">
        <div className="testimonial">testimonial1</div>
        <div className="testimonial">testimonial2</div>
        <div className="testimonial">testimonial3</div>
        <div className="testimonial">testimonial4</div>
      </section>
      <section className="about"></section> */}
    </main>
  );
};
export default Main;
