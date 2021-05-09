import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Block from "../components/block"
import content from "../content"
import Shapes from "../components/shapes"
import LinkElement from "../components/link"
import FigmaBoard from "../components/figmaBoard"

const PageContainer = styled.div`
  position: relative;
  z-index: 1;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  padding-bottom: 32px;
  &:last-child {
    padding-bottom: 64px;
  }
`

const Container = styled.div`
  width: 100%;
  padding: 64px 24px;
  max-width: 954px;
  margin: auto;
`

const ContrastContainer = styled.div(
  ({ noBackground = false }) => `
  width: 100%;
  padding: 64px 0;
  max-width: 1198px;
  margin: auto;
  background-size: 22px 22px;
  @media (max-width: 1200px) {
    padding: 64px 24px;
  }
  ${
    !noBackground &&
    `
  background: white;
  box-shadow: 2px 2px 20px #88888821;
  
  background: linear-gradient(90deg, white 20px, transparent 1%) center,
  linear-gradient(white 20px, transparent 1%) center, #dedede;
  background-size: 22px 22px;
  `
  }
`
)

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
`

const IndexPage = () => (
  <Layout isHomePage>
    <Seo title="Home" />
    <Shapes />
    <PageContainer>
      <Hero
        title={content.page.home.hero.title}
        subtitle={content.page.home.hero.subtitle}
        linkText={content.page.home.hero.linkText}
        link={content.page.home.hero.link}
      />
      <ContrastContainer noBackground id="work">
        <FigmaBoard />
      </ContrastContainer>
      <ContentContainer>
        <Container>
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
            <LinkElement
              text={content.page.home.resume.link.text}
              link={content.page.home.resume.link.link}
              theme="Orange"
            />
          </ResumeLink>
        </ContrastContainer>
      </ContentContainer>
    </PageContainer>
  </Layout>
)

export default IndexPage
