import "../styles/Footer.scss";
import logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="footer-container d-flex justify-content-around">
      <img src={logo} alt="logo" />
      <div className="column d-flex flex-column">
        <span>Doormat Navigation</span>
        <small>Home</small>
        <small>About</small>
        <small>menu</small>
        <small>Reservations</small>
        <small>Order Online</small>
        <small>Login</small>
      </div>
      <div className="column d-flex flex-column">
        <span>Doormat Navigation</span>
        <small>Adress</small>
        <small>phone number</small>
        <small>email</small>
      </div>
      {/* <div className="test"></div> */}
    </footer>
  );
}
