import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <ul className="navigation">
      <li className="navigation-item">
        <Link to="#work">Work</Link>
      </li>
      <li className="navigation-item">
        <Link to="#about">About</Link>
      </li>
      <li className="navigation-item">
        <Link to="#contact">Contact</Link>
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
