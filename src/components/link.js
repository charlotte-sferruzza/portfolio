import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const LinkContainer = styled.div(
  ({ theme, size }) => `
  height: fit-content;
  width: fit-content;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 20%;
    background: ${themeToColour[theme]};
    display: block;
    transition: 0.3s;
    bottom: 18%;
  }

  &:hover::after {
    content: "";
    height: 60%;
    transition: 0.3s;
  }
`
)

const StyledLink = styled(Link)(
  ({ size, hasArrow }) => `
  position: relative;
  display: inline-block;
  z-index: 1;
  color: black;
  font-size: ${sizeToFont[size]};
  line-height: 1.7em;
  font-weight: 600;
  text-decoration: none;

  ${
    hasArrow &&
    `
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 14px solid black;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      margin-top: 24px;
      border-radius: 2px;
    }
    `
  }
`
)

const themeToColour = {
  Purple: "#CDBEFF",
  Orange: "#FFCC99",
}

const sizeToFont = {
  Small: "20px",
  Medium: "24px",
  Large: "28px",
}

const LinkElement = ({
  text,
  link,
  size = "Small",
  theme = "Purple",
  hasArrow = false,
}) => {
  return (
    <LinkContainer theme={theme} size={size}>
      <StyledLink to={link} size={size} hasArrow={hasArrow}>
        {text}
      </StyledLink>
    </LinkContainer>
  )
}

export default LinkElement
