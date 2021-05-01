import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle, isHomePage }) => (
  <header className="header">
    <ul className="navigation">
      <li className="navigation-item">
        <Link className="header-link" to={isHomePage ? "#work" : "/#work"}>
          Work
        </Link>
      </li>
      <li className="navigation-item">
        <Link className="header-link" to={isHomePage ? "#about" : "/#about"}>
          About
        </Link>
      </li>
      <li className="navigation-item">
        <Link className="header-link" to={"/resume"}>
          Resume
        </Link>
      </li>
      <li className="navigation-item">
        <Link
          className="header-link"
          to={isHomePage ? "#contact" : "/#contact"}
        >
          Contact
        </Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
