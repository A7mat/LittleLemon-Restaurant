import "../styles/Main.scss";
import HeroSection from "./Main/HeroSection";
import HighlightSection from "./Main/HighlightSection";

const Main = () => {
  
  return (
    <main className="main-container">
      <HeroSection/>
      <HighlightSection/>

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
