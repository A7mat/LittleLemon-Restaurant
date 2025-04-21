import bruchetta from "../../assets/bruchetta.svg";
import lemonCake from "../../assets/lemon dessert.jpg";
import salad from "../../assets/greek salad.jpg";
import { NavLink } from "react-router-dom";
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HighlightSection = () => {
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
      <section className="highlights-and-specials container">
        <div className="highlights-header d-flex justify-content-between">
          <h1>This week's specials!</h1>
          <span className="align-self-center">
            <button className="btn btn-warning"><NavLink className="text-muted text-decoration-none" to="/order">Online Menu</NavLink></button>
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
                  <NavLink className="text-muted text-decoration-none" to="/order">Order a delivery <FontAwesomeIcon icon={faBellConcierge} size="" /></NavLink>
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    )
}

export default HighlightSection;