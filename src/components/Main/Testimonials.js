import React from "react";
import man1 from "../../assets/man1.jpg"
import man2 from "../../assets/man2.jpg"
import girl from "../../assets/girl.jpg"
import girl2 from "../../assets/girl2.jpg"

const reviewData = [
  {
    id: "1",
    name: "Salma",
    midImg: girl2,
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    name: "Juan",
    midImg: man2,
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "Loura",
    midImg: girl,
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    name: "Mike",
    midImg: man1,
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <section className="_max_width">
        <h1 className="testimonial-heading">Customer testimonials!</h1>
        <section className="testimonial-sec-center _max_width
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
    <main className="testimonial-card" key={id}>
      <section className="testimonial-rating-section d-flex justify-content-center">
        <Stars rating={rating}/>
      </section>
        <img
          loading="lazy"
          src={midImg}
          alt={name}
          className="testimonial-img"
        />
        <h3>{name}</h3>
        <blockquote>
          <p className="testimonial-quote">
            "{review}"
          </p>
        </blockquote>
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
