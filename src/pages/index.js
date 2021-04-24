import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Blog from "../components/Blog"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Work />
    <About />
  </Layout>
)

export default IndexPage
