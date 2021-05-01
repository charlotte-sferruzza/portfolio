import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  width: 1700px;
  position: absolute;
  z-index: 0;
  left: -500px;
  right: 0;
  margin: auto; */
`

const Shape = styled.div`
  position: absolute;
  width: 1284px;
  height: 1596px;
  background: #ffeedd;
  top: 750px;
  right: -50%;
  border-radius: 100%;
`

const Shape2 = styled.div`
  position: absolute;
  width: 1284px;
  height: 1596px;
  background: #ffeedd;
  top: 2200px;
  left: -25%;
  border-radius: 100%;
`

const Shapes = () => (
  <Container>
    <Shape />
    <Shape2 />
  </Container>
)

export default Shapes
