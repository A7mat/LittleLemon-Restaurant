import '../styles/Main.scss'

import bruchetta from '../assets/bruchetta.svg'
const Main = () => {
    return(
      <main className='container'>
        <section className="hero-section flex green-background">
          <div className="text-block">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
          </div>
          <img src="" alt=""></img>
        </section>
        <section className="highlights-and-specials">
          <div>
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
            <div className="cards d-flex gap-4">
              {/* own componant, for loop? */}
              <div class="card">
                <img src={bruchetta} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card">
                <img src={bruchetta} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card">
                <img src={bruchetta} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          {/* own componant, for loop? */}
          <div className="testimonial">testimonial1</div>
          <div className="testimonial">testimonial2</div>
          <div className="testimonial">testimonial3</div>
          <div className="testimonial">testimonial4</div>
        </section>
        <section className="about">

        </section>
      </main>
    )
}
export default Main;