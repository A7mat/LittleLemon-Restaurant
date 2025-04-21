import "../styles/Footer.scss";
import logo from "../assets/footer_Logo.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="_max_width d-flex justify-content-around">
        <img className="" src={logo} alt="logo" height="170px"/>
        <div className="column d-flex flex-column">
          <span>Doormat Navigation</span>
          <small role="button">Home</small>
          <small role="button">About</small>
          <small role="button">Menu</small>
          <small role="button">Reservations</small>
          <small role="button">Order Online</small>
          <small role="button">Login</small>
        </div>
        <div className="column d-flex flex-column">
          <span>Doormat Navigation</span>
          <small role="button">Adress</small>
          <small role="button">Phone number</small>
          <small role="button">Email</small>
        </div>
        {/* <div className="test"></div> */}
      </div>
    </footer>
  );
}
