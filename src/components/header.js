import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle, isHomePage }) => (
  <header className="header">
    <ul className="navigation">
      <li className="navigation-item">
        <Link className="header-link" to={isHomePage ? "#work" : "/"}>
          Work
        </Link>
      </li>
      <li className="navigation-item">
        <Link className="header-link" to={isHomePage ? "#about" : "/"}>
          About
        </Link>
      </li>
      {false && (
        <li className="navigation-item">
          <Link className="header-link" to={isHomePage ? "#resume" : "/resume"}>
            Resume
          </Link>
        </li>
      )}
      <li className="navigation-item">
        <Link className="header-link" to={isHomePage ? "#contact" : "/"}>
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
