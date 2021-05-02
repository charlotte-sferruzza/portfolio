import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  width: 1700px;
  height: 100%;
  position: absolute;
  overflow-y: hidden;
  z-index: 0;
  left: 0;
  right: 0;
  margin: auto;
`

const Shape = styled.div`
  position: absolute;
  width: 1284px;
  height: 1596px;
  background: #ffeedd;
  top: 530px;
  right: -800px;
  border-radius: 100%;
  @media (max-width: 850px) {
    right: -950px;
  }
  @media (max-width: 450px) {
    right: -1100px;
  }
`

const Shape2 = styled.div`
  position: absolute;
  width: 900px;
  height: 1200px;
  background: #ffeedd;
  bottom: 0;
  left: -650px;
  border-radius: 100%;
  @media (max-width: 850px) {
    left: -800px;
  }
  @media (max-width: 450px) {
    left: -1000px;
  }
`

const Shapes = () => (
  // <Container>
  <>
    <Shape />
    <Shape2 />
  </>
  // </Container>
)

export default Shapes
