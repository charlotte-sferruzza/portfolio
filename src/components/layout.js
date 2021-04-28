/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "@fontsource/source-sans-pro"
import "@fontsource/source-serif-pro"

const Layout = ({ isHomePage = false, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        isHomePage={isHomePage}
      />
      <div style={{}}>
        <main>{children}</main>
        <footer
          style={{
            background: `#E4DCFF`,
            padding: `64px 24px`,
            fontFamily: `Source Sans Pro`,
            fontWeight: `400`,
            size: `20px`,
            zIndex: 1,
            position: `relative`,
          }}
        >
          <div
            style={{
              maxWidth: `954px`,
              margin: `auto`,
              padding: `0 24px`,
            }}
          >
            <h2 id="contact">💌 Drop me an email</h2>
            <a
              href="mailto:charlotte.sferruzza@gmail.com"
              style={{
                fontWeight: `400`,
                fontSize: `20px`,
                textDecoration: `underline`,
              }}
            >
              charlotte.sferruzza@gmail.com
            </a>
            <div
              style={{
                display: `flex`,
                fontWeight: `400`,
                fontSize: `20px`,
                marginTop: `4px`,
              }}
            >
              <p
                style={{
                  display: `flex`,
                  fontWeight: `400`,
                  fontSize: `20px`,
                  margin: 0,
                }}
              >
                or
              </p>
              <a
                href="https://www.linkedin.com/in/chasferruzza/"
                style={{
                  display: `flex`,
                  fontFamily: `Source Sans Pro`,
                  fontWeight: `400`,
                  fontSize: `20px`,
                  marginLeft: `4px`,
                  textDecoration: `underline`,
                }}
              >
                find me on LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
