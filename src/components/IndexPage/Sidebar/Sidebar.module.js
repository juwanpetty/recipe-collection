import styled from "styled-components"
import { Link } from "gatsby"
import { spacing, typography, color } from "../../../constants/styles"

export const Wrapper = styled.div`
  position: relative;
`

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 32px;
`

export const SidebarHeader = styled.h2`
  color: ${color.black};
  font-size: ${typography.size.l1}rem;
  font-family: ${typography.family.displayBold};
  line-height: 145%;
  margin: 0;
  margin-bottom: 32px;
`

export const PostsList = styled.div``

export const Post = styled.div``

export const Meta = styled.p`
  color: ${color.gray9};
  text-transform: uppercase;
  font-size: ${typography.size.s1}rem;
  font-weight: ${typography.weight.medium};
  letter-spacing: ${spacing.letterSpacing.medium}px;
  margin: 0;
  margin-bottom: 8px;

  a {
    color: ${color.black};
    text-decoration: none;
    font-weight: ${typography.weight.bold};
  }
`

export const Title = styled(Link)`
  h3 {
    color: ${color.black};
    font-size: ${typography.size.m1}rem;
    font-family: ${typography.family.displayBold};
    line-height: 145%;
    margin: 0;
  }

  text-decoration: none;
  display: inline-block;
  margin-bottom: 8px;
`

export const Author = styled.p`
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

export const SidebarItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 60px;

  &:not(:last-child) {
    margin-bottom: 48px;
  }

  span {
    font-size: ${typography.size.l1}rem;
    font-weight: ${typography.weight.bold};
    font-variant-numeric: tabular-nums;
  }
`
