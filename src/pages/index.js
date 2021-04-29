import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Blog from "../components/Blog"
import About from "../components/About"
import Block from "../components/Block"
import content from "../content"

const PageContainer = styled.div`
  position: relative;
  z-index: 1;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  padding-bottom: 40px;
`

const Container = styled.div`
  width: 100%;
  padding: 64px 24px;
  max-width: 954px;
  margin: auto;
`

const ContrastContainer = styled.div`
  width: 100%;
  padding: 64px 0;
  max-width: 1198px;
  margin: auto;
  background: white;
  box-shadow: 2px 2px 20px #88888821;

  background: linear-gradient(90deg, white 20px, transparent 1%) center,
    linear-gradient(white 20px, transparent 1%) center, #dedede;
  background-size: 22px 22px;
`

const SubHeading = styled.h2(
  ({ isInContrast }) => `
  margin-bottom: 36px !important;
  ${
    isInContrast &&
    `
    max-width: 960px;
    margin: auto;
    padding: 0 24px;
    `
  }
`
)

const ResumeLink = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 0 24px;
  & a {
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    &:after {
      content: "";
      width: 132px;
      height: 8px;
      background: #ffcc99;
      display: block;
      transition: 0.3s;
      margin-top: -10px;
      margin-left: -2px;
    }
    &:hover:after {
      content: "";
      margin-top: -25px;
      height: 23px;
      transition: 0.3s;
    }
  }
`

const Shapes = styled.div`
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
  top: 2000px;
  left: -25%;
  border-radius: 100%;
`

const IndexPage = () => (
  <Layout isHomePage>
    <Seo title="Home" />
    <Shapes>
      <Shape />
      <Shape2 />
    </Shapes>
    <PageContainer>
      <Hero
        title={content.page.home.hero.title}
        subtitle={content.page.home.hero.subtitle}
        linkText={content.page.home.hero.linkText}
        link={content.page.home.hero.link}
      />
      <ContentContainer>
        <Container id="work">
          <SubHeading>{content.page.home.work.title}</SubHeading>
          {content.page.home.work.list.map((item, index) => (
            <Block {...item} key={index} />
          ))}
        </Container>
      </ContentContainer>
      <ContentContainer>
        <ContrastContainer id="about">
          <SubHeading isInContrast>{content.page.home.about.title}</SubHeading>
          <Block list={content.page.home.about.list} listSpacing />
        </ContrastContainer>
      </ContentContainer>
      <ContentContainer>
        <ContrastContainer id="resume">
          <SubHeading isInContrast>{content.page.home.resume.title}</SubHeading>
          {content.page.home.resume.list.map((item, index) => (
            <Block {...item} key={index} isSmaller listSpacing />
          ))}
          <ResumeLink>
            <a href={content.page.home.resume.link.link}>
              {content.page.home.resume.link.text}
            </a>
          </ResumeLink>
        </ContrastContainer>
      </ContentContainer>
    </PageContainer>
  </Layout>
)

export default IndexPage
