import React from "react"
import "./index.css"
import styled from "@emotion/styled"

const Container = styled.div(
  ({ condensed }) =>
    `
    width: 100%;
    height: ${condensed ? `auto` : `100vh`};
    padding: ${condensed ? `210px 24px 80px` : `calc(50vh - 170px) 24px 0`};
    max-width: 954px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column; 
    background: 
  `
)

const Heading = styled.div`
  height: 100vh;
  width: 100%;
  padding: calc(50vh - 170px) 24px 0;
  max-width: 954px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Subtitle = styled.div`
  font-size: 28px;
  line-height: 45px;
`

const LinkContainer = styled.div`
  height: 75px;
  display: flex;
  justify-content: center;
  bottom: 10%;
  margin-bottom: 24px;
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

const Hero = ({ condensed = false, title, subtitle, linkText, link }) => {
  return (
    <Container condensed={condensed}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      {!condensed && (
        <LinkContainer>
          <Link href={link}>{linkText}</Link>
        </LinkContainer>
      )}
    </Container>
  )
}

export default Hero
