import { HashLink } from 'react-router-hash-link';
import logo from '../assets/Logo.svg';
import { NavLink } from 'react-router-dom';

function Header() {

  const navItems = [
    { title: 'Home', navigation: '/' },
    { title: 'About', navigation: '/#about' },
    { title: 'Menu', navigation: '/menu' },
    { title: 'Reservations', navigation: '/reservations' },
    { title: 'Order Online', navigation: '/order' },
    { title: 'Login', navigation: '/login' },
  ];

  return (
    <header className="d-flex w-100 bg-light">
      <nav className="navbar navbar-expand-md navbar-light _max_width">
        <div className="container-fluid">
          <NavLink to="/"><img src={logo} alt="logo" height="50px"/></NavLink>
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
                        { e.title === 'About' ? 
                        <HashLink to={e.navigation} className='nav-link'>{e.title}</HashLink>
                        :
                        <NavLink to={e.navigation} className='nav-link'>{e.title}</NavLink>
                      }
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