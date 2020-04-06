import styled from "styled-components"
import { typography, color, spacing } from "../../../constants/styles"
import { Link } from "gatsby"

const Wrapper = styled.div`
  margin-bottom: 96px;

  & > div {
    margin-bottom: 60px;
  }
`

const Title = styled.h1`
  font-size: ${typography.size.l1}rem;
  font-family: ${typography.family.displayBold};
  margin: 0;
  margin-bottom: 12px;
`

const Subtitle = styled.p`
  font-size: ${typography.size.m1}rem;
  color: ${color.gray9};
  margin: 0;
`

const FeaturedPost = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 3fr 1fr;
`

const PostImage = styled(Link)`
  background: #eee;
  border-radius: ${spacing.borderRadius.small};
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Meta = styled.p`
  color: ${color.gray9};
  text-transform: uppercase;
  font-size: ${typography.size.s1}rem;
  font-weight: ${typography.weight.medium};
  letter-spacing: ${spacing.letterSpacing.medium}px;
  margin: 0;
  margin-bottom: 16px;

  a {
    color: ${color.black};
    text-decoration: none;
    font-weight: ${typography.weight.bold};
  }
`

const PostTitle = styled(Link)`
  h2 {
    color: ${color.black};
    font-size: ${typography.size.l1}rem;
    font-family: ${typography.family.displayBold};
    line-height: 145%;
    margin: 0;
  }

  text-decoration: none;
  display: inline-block;
  margin-bottom: 12px;
`

const Description = styled.p`
  font-size: ${typography.size.m1}rem;
  line-height: 160%;
  margin: 0;
  margin-bottom: 16px;
`

const Author = styled.p`
  text-transform: uppercase;
  color: ${color.gray9};
  font-size: ${typography.size.s1}rem;
  font-weight: ${typography.weight.medium};
  letter-spacing: ${spacing.letterSpacing.medium}px;
  margin: 0;

  a {
    color: ${color.black};
    text-decoration: none;
    font-weight: ${typography.weight.bold};
  }
`

export {
  Wrapper,
  Title,
  Subtitle,
  FeaturedPost,
  PostImage,
  Meta,
  PostTitle,
  Description,
  Author,
}
