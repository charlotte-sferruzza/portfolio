import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Blog from "../components/Blog"
import About from "../components/About"
import Shapes from "../components/shapes"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <Shapes /> */}
    <div
      style={{
        position: `relative`,
        zIndex: 1,
      }}
    >
      <Hero />
      <div
        style={{
          padding: `80px 0`,
          background: `rgba(255, 255, 255, 0.5)`,
        }}
      >
        <Work />
        <About />
      </div>
    </div>
  </Layout>
)

export default IndexPage
