import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import screen1 from "../images/screen1.png"
import screen2 from "../images/screen2.png"
import screen3 from "../images/screen3.png"
import screen4 from "../images/screen4.png"
import Block from "../components/block"

const Board = styled.div`
  width: 100%;
  background: white;
  box-shadow: 2px 2px 20px #88888821;
  @media (max-width: 900px) {
    max-width: 520px;
    margin: auto;
  }
`

const Header = styled.div`
  width: 100%;
  height: 29px;
  background: #222222;
`

const Toolbar = styled.div`
  width: 100%;
  height: 39px;
  background: #2c2c2c;
  display: flex;
`

const ToolContainer = styled.div(
  ({ background }) => `
  background: ${background === "blue" ? "#18A0FB" : "none"};
  height: 100%;
  width: 39px;
  display: flex;
  alignItems: center;
  justifyontent: center;
  display: flex;
  align-items: center;
  justify-content: center;
  `
)

const ShapeSquare = styled.div`
  width: 15px;
  height: 15px;
  background: #c4c4c4;
`

const ShapeLine = styled.div`
  width: 3px;
  height: 16px;
  background: #c4c4c4;
  transform: rotate(35deg);
`

const ShapeCircle = styled.div`
  width: 17px;
  height: 17px;
  background: #c4c4c4;
  border-radius: 100%;
`

const ShapeText = styled.p`
  font-size: 24px;
  color: #c4c4c4;
  margin: 0;
`

const ShapeStar = styled.div`
  margin: 50px 0;
  position: relative;
  display: block;
  color: #c4c4c4;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #c4c4c4;
  border-left: 100px solid transparent;
  transform: scale(0.125) rotate(36deg);

  &:before {
    border-bottom: 80px solid #c4c4c4;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: "";
    transform: rotate(-35deg);
  }

  &:after {
    position: absolute;
    display: block;
    color: #c4c4c4;
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #c4c4c4;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: "";
  }
`

const BoardContents = styled.div`
  display: flex;
  padding: 24px 32px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    padding: 48px 32px;
  }
`

const AnnotationsContainer = styled.div`
  display: block;
  @media (max-width: 545px) {
    display: none;
  }
`

const Annotations = styled.div`
  height: 272px;
  margin-bottom: 18px;
  padding-right: 8px;
  border-right: 1px solid #bbbbbb;
  margin-right: 35px;
`

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 266px;
  width: 266px;
  justify-content: space-between;
  @media (max-width: 400px) {
    min-width: 100%;
    justify-content: flex-start;
  }
`

const Image = styled.img`
  height: 272px;
  width: 125px;
  @media (max-width: 400px) {
    margin-right: 8px;
    height: 212px;
    width: 95px;
  }
`

const ArticleContainer = styled.div`
  margin-left: 179px;
  width: 45%;
  padding-top: 64px;
  width: 40%;
  margin-left: 15%;
  @media (max-width: 900px) {
    padding-top: 32px;
    width: 100%;
    margin: 0;
  }
`

const ArticleTag = styled.p`
  background: #cdbeff;
  width: fit-content;
  padding: 0 12px;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  border-radius: 16px;
  text-transform: uppercase;
`

const FigmaBoard = ({}) => {
  return (
    <Board>
      <Header />
      <Toolbar>
        <ToolContainer></ToolContainer>
        <ToolContainer background="blue"></ToolContainer>
        <ToolContainer>
          <ShapeSquare />
        </ToolContainer>
        <ToolContainer>
          <ShapeLine />
        </ToolContainer>
        <ToolContainer>
          <ShapeText>T</ShapeText>
        </ToolContainer>
        <ToolContainer>
          <ShapeStar />
        </ToolContainer>
        <ToolContainer>
          <ShapeCircle />
        </ToolContainer>
      </Toolbar>
      <BoardContents>
        <AnnotationsContainer>
          <Annotations>
            <p>Camera flow</p>
          </Annotations>
          <Annotations>
            <p>Unhappy path</p>
          </Annotations>
        </AnnotationsContainer>
        <ImageContainer>
          <Image
            src={screen1}
            alt="Mobile screen showing an ID verification in progress"
          />
          <Image
            src={screen2}
            alt="Mobile screen showing a successful ID verification"
          />
          <Image
            src={screen3}
            alt="Mobile screen showing a unsuccessful document detection"
          />
          <Image
            src={screen4}
            alt="Mobile screen showing a glare detection error"
          />
        </ImageContainer>
        <ArticleContainer>
          <ArticleTag>Case Study</ArticleTag>
          <Block
            title="Overcoming the challenges of designing a B2B2C product"
            date="May 2021"
            description="Reflecting back on my design process"
            linkText="Read more"
            link="https://charlottesferruzza.medium.com/overcoming-the-challenges-of-designing-a-b2b2c-product-1274498738d7"
          />
        </ArticleContainer>
      </BoardContents>
    </Board>
  )
}

export default FigmaBoard
