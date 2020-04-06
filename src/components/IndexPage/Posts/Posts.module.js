import styled from "styled-components"
import { spacing, typography, color } from "../../../constants/styles"
import { Link } from "gatsby"

const PostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 48px;
  grid-row-gap: 72px;
`

const Post = styled.div``

const Image = styled(Link)`
  height: 250px;
  border-radius: ${spacing.borderRadius.small};
  background: #eee;
  margin-bottom: 24px;

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

const Title = styled(Link)`
  h3 {
    color: ${color.black};
    font-size: ${typography.size.m2}rem;
    font-family: ${typography.family.displayBold};
    line-height: 145%;
    margin: 0;
  }

  text-decoration: none;
  display: inline-block;
  margin-bottom: 12px;
`

const Description = styled.p`
  color: ${color.black};
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

export { PostsList, Post, Image, Meta, Title, Description, Author }
