import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import LinkElement from "./link"

const Container = styled.div`
  height: 100px;
  position: absolute;
  width: 100%;
  z-index: 2;
  z-index: 10;
  max-width: 954px;
  padding: 0 24px;
  left: 0;
  right: 0;
  margin: auto;
`

const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding-top: 64px;
  margin: 0;
  @media (max-width: 768px) {
    padding-top: 42px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`

const NavItem = styled.li`
  &:not(:first-child) {
    margin-left: 56px;
  }
  @media (max-width: 768px) {
    &:not(:first-child) {
      margin-left: 24px;
    }
    a {
      font-size: 24px;
    }
  }
`

const Header = ({ siteTitle, isHomePage }) => (
  <Container>
    <Nav>
      <NavItem>
        <LinkElement
          text="Work"
          link={isHomePage ? "#work" : "/#work"}
          size="Large"
        />
      </NavItem>
      <NavItem>
        <LinkElement
          text="About"
          link={isHomePage ? "#about" : "/#about"}
          size="Large"
        />
      </NavItem>
      <NavItem>
        <LinkElement text="Resume" link={"/resume"} size="Large" />
      </NavItem>
      <NavItem>
        <LinkElement
          text="Contact"
          link={isHomePage ? "#contact" : "/#contact"}
          size="Large"
        />
      </NavItem>
    </Nav>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
