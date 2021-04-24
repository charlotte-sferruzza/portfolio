import React from "react"
import "./index.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h1 className="heading">Charlotte Sferruzza</h1>
        <p className="subtitle">
          I’m a Senior Product Designer based in London. I’m passionate about
          solving problems, building delightful experiences, and supporting
          fantastic design teams.
        </p>
      </div>
      <div className="button-container">
        <a className="read-more" href="#work">
          Read more
        </a>
      </div>
    </div>
  )
}

export default Hero
