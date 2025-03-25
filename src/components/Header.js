import logo from '../assets/Logo.svg';
import NavLink from 'react'

function Header() {

  const navItems = ['home', 'about', 'menu', 'reservations', 'order online', 'login']

  return (
    <header className="d-flex w-100 justify-content-around">
      <img src={logo} alt="logo" />
      <nav className='navbar'>
        <ul className="navbar-nav d-flex flex-row gap-4 justify-content-between">
          {navItems.map((e) => (
            <li className='nav-item'>
                {/* switch to NavLinks */}
              <a href="" className='nav-link'>{e.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;