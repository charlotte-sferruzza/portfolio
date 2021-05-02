import React from "react"
import styled from "@emotion/styled"
import LinkElement from "./link"

const Container = styled.div(
  ({ condensed }) =>
    `
    width: 100%;
    height: ${condensed ? `auto` : `100vh`};
    padding: ${condensed ? `210px 24px 80px` : `0 24px`};
    max-width: 954px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `
)

const TextContainer = styled.div(
  ({ page }) => `
  ${
    page === "Home" &&
    `
  @media (max-width: 450px) {
    margin-top: -200px;
  }
  `
  }
`
)

const Subtitle = styled.div`
  font-size: 28px;
  line-height: 45px;
`

const LinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
  @media (max-width: 450px) {
    margin-bottom: 180px;
  }
`

const Link = styled.a`
  border: none;
  background: none;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
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
    margin-top: 30px;
    border-radius: 2px;
  }
`

const Hero = ({
  page = "Home",
  condensed = false,
  title,
  subtitle,
  linkText,
  link,
}) => {
  return (
    <Container condensed={condensed}>
      <TextContainer page={page}>
        <h1>{title}</h1>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      {!condensed && (
        <LinkContainer>
          <LinkElement
            text={linkText}
            link={link}
            theme="Orange"
            size="Medium"
            hasArrow
          />
        </LinkContainer>
      )}
    </Container>
  )
}

export default Hero
