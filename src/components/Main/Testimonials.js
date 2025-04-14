import React from "react";
// import { reviewData } from "../utils/data";
import tempPic from "../../assets/Logo.svg"

const reviewData = [
  {
    id: "abc",
    name: "Groot",
    midImg: tempPic,
    review: "Delicious food served in a cozy ambiance, great experience.",
  },
  {
    id: "cca",
    name: "Superman",
    midImg: tempPic,
    review: "Tasty dishes, cozy vibe, highly recommended spot.",
  },
  {
    id: "zzz",
    name: "Štefan Štefančík",
    midImg: tempPic,
    review: "Yummy food, friendly staff, definitely worth trying.",
  },
  {
    id: "www",
    name: "Jake Nackos",
    midImg: tempPic,
    review:
      "Outstanding cuisine, attentive staff, perfect spot for any occasion.",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Testimonials</h2>
      <section className="testi-sec-center _max_width
       d-flex">
        {reviewData.map((item, index) => (
          <Testimonial key={index} {...item} />
        ))}
      </section>
    </section>
  );
};
export default Testimonials;

const Testimonial = ({ id, name, midImg, review }) => {
  return (
    <article className="testi-card" key={id}>
      <figure className="testi-img-el">
        <img
          loading="lazy"
          src={midImg}
          alt={name}
          className="testi-img-el-img"
        />
        <figcaption className="testi-img-caption">
          <h3 className="testi-img-caption-h3">{name}</h3>
        </figcaption>
      </figure>
      <div className="testi-text-content">
        <h3 className="testi-text-content-h3">Review</h3>
        <blockquote className="testi-text-content-blockquote">
          {review}
        </blockquote>
      </div>
      <section className="testi-rating-section _flex_box">
        <h3 className="testi-rating-section-h3">Rating </h3>
        <Stars />
      </section>
    </article>
  );
};

const Stars = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <i className="fa-solid fa-star testi-rating-section-i"></i>
        </span>
      ))}
    </>
  );
};
