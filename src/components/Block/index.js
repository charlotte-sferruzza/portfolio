import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div(
  ({ isSmaller }) => `
  height: fit-content;
  max-width: 820px;
  margin-bottom: ${isSmaller ? `24px` : `64px`};
  &:last-child {
    margin-bottom: 0;
  }
`
)

const Title = styled.h2(
  ({ isSmaller }) => `
  font-size: 20px;
  margin-bottom: 12px;
`
)

const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 12px;
`

const Description = styled.p`
  margin-bottom: 16px;
`

const Block = ({
  title,
  date,
  description,
  linkText,
  link,
  list = false,
  id = "",
  isSmaller = false,
}) => {
  return (
    <Container id={`#${id}`} isSmaller={isSmaller}>
      <Title isSmaller={isSmaller}>{title}</Title>
      <SubTitle>{date}</SubTitle>
      <p className="blog-description">{description}</p>
      {list && (
        <ul>
          {list.map(item => (
            <li>
              {item.link ? (
                <>
                  <Link to={item.link}>{`${item.text}`}</Link>
                  <span>{` ${item.date}`}</span>
                </>
              ) : (
                <>{item.text}</>
              )}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <div className="blog-link-container">
          <a className="blog-link" href={link}>
            Read more
          </a>
        </div>
      )}
    </Container>
  )
}

export default Block
