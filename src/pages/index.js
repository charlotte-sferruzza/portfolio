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
`

const Container = styled.div`
  width: 100%;
  padding: 64px 24px;
  max-width: 954px;
  margin: auto;
`

const ContrastContainer = styled.div`
  width: 100%;
  padding: 64px 144px;
  max-width: 1198px;
  margin: auto;
  background: white;
  box-shadow: 2px 2px 20px #88888821;
  margin-bottom: 40px;
`

const SubHeading = styled.h2``

const IndexPage = () => (
  <Layout isHomePage>
    <Seo title="Home" />
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
          <SubHeading>{content.page.home.about.title}</SubHeading>
          <Block list={content.page.home.about.list} />
        </ContrastContainer>
      </ContentContainer>
      <ContentContainer>
        <ContrastContainer id="resume">
          <SubHeading>{content.page.home.resume.title}</SubHeading>
          {content.page.home.resume.list.map((item, index) => (
            <Block {...item} key={index} isSmaller />
          ))}
        </ContrastContainer>
      </ContentContainer>
    </PageContainer>

    {/* <Work />
        <About /> */}
  </Layout>
)

export default IndexPage
