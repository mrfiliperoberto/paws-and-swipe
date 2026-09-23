import { NavLink } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <NavLink
          className="header__brand"
          to="/discover"
        >
          Paws & Swipe
        </NavLink>

        <nav
          className="header__nav"
          aria-label="Main navigation"
        >
          <NavLink
            className={({ isActive }) =>
              `header__link${isActive ? ' header__link--active' : ''}`
            }
            to="/discover"
          >
            Discover
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header