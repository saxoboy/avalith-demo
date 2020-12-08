import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../images/avalith-logo.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  console.log(navbarOpen)
  return (
    <header className="NavbarItems">
      <div className="container mx-auto p-6 h-20 relative md:flex md:justify-center md:content-center">
        <figure className="navbar-logo -left-3 lg:left-0">
          <h1>
            <Link to="/">
              <img src={Logo} alt={siteTitle} />
            </Link>
          </h1>
        </figure>
        <button
          className="menu-icon outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </button>
        <ul
          className={
            navbarOpen
              ? "nav-menu active bg-red-600"
              : "nav-menu"
          }
        >
          <li>
            <a className="nav-links hover:bg-red-500 text-variant hover:text-variant lg:text-primary" href="/who-we-are">
              <span>Who we are</span>
            </a>
          </li>
          <li>
            <a className="nav-links hover:bg-red-500 text-variant hover:text-variant lg:text-primary" href="/what-we-do">
              <span>What we do</span>
            </a>
          </li>
          <li>
            <a className="nav-links hover:bg-red-500 text-variant hover:text-variant lg:text-primary" href="/join-avalith">
              <span>Join Avalith</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header