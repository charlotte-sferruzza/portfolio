import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div(
  ({ isSmaller, listSpacing, description }) => `
  height: fit-content;
  max-width: 820px;
  &:last-child {
    margin-bottom: 0;
  }
  margin-bottom: ${isSmaller ? `32px` : `64px`};
  ${
    listSpacing &&
    `
    max-width: 960px;
    margin: auto;
    padding: 0 24px;
    `
  }
  ${
    !description &&
    `
    margin: 0 auto 32px;
    `
  }
  & li:not(:last-child) {
    margin-bottom: ${listSpacing ? "32px" : 0};
  }
`
)

const Title = styled.h2(
  ({ isSmaller }) => `
  font-size: ${isSmaller ? "20px" : "28px"};
  line-height: ${isSmaller ? "32px" : "40px"};
  font-weight: ${isSmaller ? "700" : "600"}; 
  margin-bottom: 4px;
`
)

const SubTitle = styled.p(
  ({ listSpacing, description }) => `
  font-size: 18px;
  line-height: 28px;
  margin-bottom: ${description ? "8px" : 0};
`
)

const Description = styled.p`
  margin-bottom: 8px;
`

const List = styled.ul(
  ({ listSpacing }) => `
  margin-left: ${listSpacing ? 0 : "24px"};
`
)

const ListItem = styled.li(
  ({ listSpacing }) => `
  list-style: ${listSpacing ? "none" : "unset"};
`
)

const Block = ({
  title,
  date,
  description = false,
  linkText,
  link,
  list = false,
  id = "",
  isSmaller = false,
  listSpacing = false,
}) => {
  console.log(listSpacing)
  return (
    <Container
      id={`#${id}`}
      isSmaller={isSmaller}
      listSpacing={listSpacing}
      description={description}
    >
      <Title isSmaller={isSmaller}>{title}</Title>
      <SubTitle listSpacing={listSpacing} description={description}>
        {date}
      </SubTitle>
      {description && (
        <Description className="blog-description">{description}</Description>
      )}
      {list && (
        <List listSpacing={listSpacing}>
          {list.map(item => (
            <ListItem listSpacing={listSpacing}>
              {item.link ? (
                <>
                  <Link to={item.link}>{`${item.text}`}</Link>
                  <span>{` ${item.date}`}</span>
                </>
              ) : (
                <>{item.text}</>
              )}
            </ListItem>
          ))}
        </List>
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
