import React from "react"
import "./index.css"

const Work = () => {
  return (
    <div className="case-study-outer-container">
      <div className="case-study-container" id="work">
        <BlogPost
          title="Building a culture of accessibility at Onfido"
          date="January 2020"
          description="Accessibility is a team effort. To ensure we’re taking the best approach towards being accessible, we had to onboard the whole company."
          link="https://medium.com/onfido-tech/building-a-culture-of-accessibility-at-onfido-22d320faf115"
        />
        <BlogPost
          title="Good friction for great UX"
          date="January 2019"
          description="Verifying users’ identities as they are onboarding can be challenging. We improved the UX of our facial verification product to increase user’s confidence and trust."
          link="https://medium.com/onfido-tech/good-friction-for-great-ux-5151bace3bfa"
        />
        <BlogPost
          title="Winning trust with words"
          date="May 2018"
          description="My journey as a product designer exploring UX copywriting and how to write clear and empowering text to improve the experiences I was building."
          link="https://medium.com/design-onfido/winning-trust-with-words-d5bece18e76f"
        />
      </div>
    </div>
  )
}

const BlogPost = ({ title, date, description, linkText, link }) => {
  return (
    <div className="blog-post-container">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-date">{date}</p>
      <p className="blog-description">{description}</p>
      <div className="blog-link-container">
        <a className="blog-link" href={link}>
          Read more
        </a>
      </div>
    </div>
  )
}

export default Work
