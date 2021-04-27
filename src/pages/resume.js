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

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
    {/* <Shapes /> */}
    <div
      style={{
        position: `relative`,
        zIndex: 1,
      }}
    ></div>
  </Layout>
)

export default Resume
