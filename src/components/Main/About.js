import React from "react";
import "../../styles/Main.scss"
import restPic1 from "../../assets/restaurant.jpg"
import restPic2 from "../../assets/restaurant chef B.jpg"

const About = () => {
  return (
    <section className="about-section _max_width" id="about">
      <section className="about-text-content _max_width" >
        <header>
          <h1 className="about-text-content-header-h1">Little Lemon</h1>
          <h2 className="about-text-content-header-h2">Chicago</h2>
        </header>
        <p className="about-text-content-p">
          Located in Chicago, Little Lemon is renowned for its delectable dishes
          made from fresh, local ingredients. Offering a cozy ambiance and
          attentive service, it's an ideal destination for casual dining or
          memorable gatherings. Enjoy delicious cuisine and delightful moments
          at Little Lemon.
        </p>
      </section>
      <section className="about-image-content _max_width">
        <figure className="about-image-content-figure">
          <img
            className="about-image-img  about-fig1"
            loading="lazy"
            src={restPic1}
            alt="rest1"
          />
          <img
            className="about-image-img  about-fig2"
            loading="lazy"
            src={restPic2}
            alt="rest2"
          />
        </figure>
      </section>
    </section>
  );
};

export default About;
