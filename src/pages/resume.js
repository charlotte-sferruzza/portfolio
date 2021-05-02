import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Block from "../components/block"
import content from "../content"
import Shapes from "../components/shapes"

const PageContainer = styled.div`
  position: relative;
  z-index: 1;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
`

const Container = styled.div`
  width: 100%;
  padding: 64px 24px 0;
  max-width: 954px;
  margin: auto;
  &:last-child {
    padding-bottom: 64px;
  }
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

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
    <Shapes />
    <PageContainer>
      <Hero
        page={"Resume"}
        condensed
        title={content.page.resume.hero.title}
        subtitle={content.page.resume.hero.subtitle}
        linkText={content.page.resume.hero.subtitle}
        link={content.page.resume.hero.link}
      />
      <ContentContainer>
        <Container>
          <SubHeading>{content.page.resume.work.title}</SubHeading>
          {content.page.resume.work.list.map(item => (
            <Block {...item} isSmaller />
          ))}
        </Container>
        <Container>
          <SubHeading>{content.page.resume.tools.title}</SubHeading>
          <Block list={content.page.resume.tools.list} />
        </Container>
        <Container>
          <SubHeading>{content.page.resume.education.title}</SubHeading>
          {content.page.resume.education.list.map(item => (
            <Block {...item} isSmaller />
          ))}
        </Container>
      </ContentContainer>
    </PageContainer>
  </Layout>
)

export default Resume
