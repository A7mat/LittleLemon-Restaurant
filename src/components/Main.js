import "../styles/Main.scss";
import restaurantfood from "../assets/restauranfood.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonCake from "../assets/lemon dessert.jpg";
import salad from "../assets/greek salad.jpg";
const Main = () => {
  const highlightCards = [
    {
      img: salad,
      title: 'Greek salad',
      price: '12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
      img: bruchetta,
      title: 'Bruchetta',
      price: '5.99',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
      img: lemonCake,
      title: 'Lemon Dessert',
      price: '5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingerdient has been sourced and is as authentic as can be imagined.'
    },
  ]
  return (
    <main className="">
      {/* Hero Section */}
      <section className="hero-section flex green-background">
        <div className="hero-content container d-flex g-5">
          <div className="text-block">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-sub-title">Chicago</h2>
            <p className="hero-text-content">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn btn-warning">Reserve a Table</button>
          </div>
          <img className="hero-img rounded" src={restaurantfood} alt=""></img>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="highlights-and-specials container">
        <div className="highlights-header d-flex justify-content-between">
          <h1>This weeks specials!</h1>
          <span className="align-self-center">
            <button className="btn btn-warning">Online Menu</button>
          </span>
        </div>
        <div className="cards d-flex flex-wrap justify-content-around g-2">
          {highlightCards.map((card, index) =>
            <div className="highlights-card card" key={'card-' + index}>
              <img src={card.img} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{card.title}</h5>
                  <span className="card-price">${card.price}</span>
                </div>
                <p className="card-text">
                  {card.description}
                </p>
                <span className="order-delivery" role="button">
                  Order a delivery
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
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
