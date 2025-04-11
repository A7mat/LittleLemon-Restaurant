import { NavLink } from "react-router-dom";
import restaurantfood from "../../assets/restauranfood.jpg";

const HeroSection = () => {
    return (
        <section className="hero-section flex green-background ">
        <div className="hero-content _max_width container d-flex justify-content-between g-5">
          <div className="text-block">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-sub-title">Chicago</h2>
            <p className="hero-text-content">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="booking-btn btn btn-warning"><NavLink to="/booking">Reserve a Table</NavLink></button>
          </div>
          <img className="hero-img rounded" src={restaurantfood} alt=""></img>
        </div>
      </section>
    )
}
export default HeroSection;