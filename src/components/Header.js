import logo from '../assets/Logo.svg';
import NavLink from 'react-router-dom';

function Header() {

  const navItems = ['home', 'about', 'menu', 'reservations', 'order online', 'login']

  return (
    <header className="d-flex w-100 bg-light">
      <nav className="navbar navbar-expand-md navbar-light _max_width">
        <div className="container-fluid">
          <img src={logo} alt="logo" height="50px"/>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((e, index) => (
                    <li className='nav-item' key={index}>
                        {/* switch to NavLinks */}
                      <a href="" className='nav-link'>{e.toUpperCase()}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;