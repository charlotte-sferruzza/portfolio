import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
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

const SubHeading = styled.div``

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
    <PageContainer>
      <Hero
        condensed
        title={content.page.resume.hero.title}
        subtitle={content.page.resume.hero.subtitle}
        linkText={content.page.resume.hero.subtitle}
        link={content.page.resume.hero.link}
      />
      <ContentContainer>
        <Container>
          <SubHeading>Title</SubHeading>
          {content.page.resume.work.list.map(item => (
            <Block {...item} />
          ))}
        </Container>
        <Container>
          <SubHeading>{content.page.resume.tools.title}</SubHeading>
          <Block list={content.page.resume.tools.list} />
        </Container>
        <Container>
          <SubHeading>content.page.resume.education.title</SubHeading>
          {content.page.resume.education.list.map(item => (
            <Block {...item} />
          ))}
        </Container>
      </ContentContainer>
    </PageContainer>
  </Layout>
)

export default Resume
