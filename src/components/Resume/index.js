import React from "react"
import "./index.css"

const Resume = () => {
  return (
    <div className="case-study-outer-container">
      <div className="case-study-container" id="work">
        <h2>Work experience</h2>
        <div className="blog-post-container">
          <h2 className="blog-title">
            Building a culture of accessibility at Onfido
          </h2>
          <p className="blog-date">January 2020</p>
          <p className="blog-description">
            Accessibility is a team effort. To ensure we’re taking the best
            approach towards being accessible, we had to onboard the whole
            company.
          </p>
          <ul>
            <li>
              The product I'm working on is now embedded in +600 of our
              customers' products. It's used by +3M users each month.
            </li>
            <li>
              I'm leading the team focused on end-user experience, overcoming
              the challenges of building a B2B2C product. We are creating
              innovative and delightful experiences powered by AI.
            </li>
            <li>
              I've kick-started design initiatives that support the business,
              such as our UX Services Program. It's a design-led program shared
              with Growth that enables our customers to build the best UX using
              our product. In addition to being a great way to improve our
              product, it drives customer satisfaction and revenue.
            </li>
            <li>
              I've contributed to our design system with a strong focus on
              accessibility.
            </li>
            <li>
              I support the building and growth of a happy and high-performing
              UX team of +20 designers.!
            </li>
          </ul>
        </div>
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
        <h2>Tools and skills</h2>
        <ul>
          <li>
            I use Figma and Protopie to design and build prototypes. I use Miro
            to run workshops, and a mix of Notion, Atlassian products and Google
            Suite to write documentation, make sense of data and share work with
            my team.
          </li>
          <li>
            I’ve got a lot of experience in designing apps on Android, iOS and
            web as well as responsive websites and multi-platform design
            systems.
          </li>
          <li>
            I love talking to our customers, running workshops and research
            projects to make sure we’re building the right thing, in the right
            way.
          </li>
          <li>
            Accessibility, UX writing, and onboarding experiences are topics I’m
            passionate about.{" "}
          </li>
          <li>
            I speak English, French, and I’ve been taking Spanish classes for 3
            years. It’s been helpful when working in a global team!
          </li>
        </ul>
        <h2>Education</h2>
        <BlogPost
          title="Master's Degree in Interaction design and tangible interfaces"
          date="🇫🇷 L’École de Design Nantes Atlantique, France - 2016"
        />
        <BlogPost
          title="Master's Degree in Innovative services and Internet of Things"
          date="🇫🇷 Polytech Nantes, France - 2016"
        />
        <BlogPost
          title="Bachelor's Degree in Digital Media Design"
          date="🇫🇷 Swinburne University of Technology, Australia - 2014"
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
    </div>
  )
}

export default Resume
