import React from "react";
import tempPic from "../../assets/Mickey.png"
import { start } from "@popperjs/core";

const reviewData = [
  {
    id: "1",
    name: "Micky",
    midImg: tempPic,
    rating: 0,
    review: "Delicious food served in a cozy ambiance, great experience.",
  },
  {
    id: "2",
    name: "Superman",
    midImg: tempPic,
    rating: 1,
    review: "Tasty dishes, cozy vibe, highly recommended spot.",
  },
  {
    id: "3",
    name: "Štefan",
    midImg: tempPic,
    rating: 4,
    review: "Yummy food, friendly staff, definitely worth trying.",
  },
  {
    id: "4",
    name: "Jake Nackos",
    midImg: tempPic,
    rating: 5,
    review:
      "Outstanding cuisine, attentive staff, perfect spot for any occasion.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <section className="_max_width">
        <h1 className="testimonial-heading">Testimonials</h1>
        <section className="testi-sec-center _max_width
        d-flex">
          {reviewData.map((item, index) => (
            <Testimonial key={index} {...item} />
          ))}
        </section>
      </section>
    </section>
  );
};
export default Testimonials;

const Testimonial = ({ id, name, midImg, review, rating }) => {
  return (
    <main className="testi-card" key={id}>
      <section className="testi-rating-section d-flex">
        {/* <h5 className="testi-rating-section-h3 d-inline">Rating </h5> */}
        <Stars rating={rating}/>
      </section>
        <img
          loading="lazy"
          src={midImg}
          alt={name}
          className="testi-img-el-img"
        />
        <h3>{name}</h3>
        <p className="testimonial-quote">
          {review}
        </p>
    </main>
  );
};

const Stars = ({rating}) => {
  const starFill = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
  const starOutlined = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
              </svg>
  return (
    <>
      {[...Array(rating)].map((_, index) => (
        <span className="mr-3" key={index}>
          {starFill}
        </span>
      ))}
      {[...Array(5-rating)].map((_, index) => (
        <span className="mr-3" key={index}>
          {starOutlined}
        </span>
      ))}
    </>
  );
};
