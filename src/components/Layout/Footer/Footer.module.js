import styled from "styled-components"
import { color, spacing, typography } from "../../../constants/styles"
import { Link } from "gatsby"

const Wrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid ${color.gray7};
`

const FooterGroup = styled.div`
  a {
    color: ${color.gray8};
    text-decoration: none;
    font-size: ${typography.size.s1}rem;
    text-transform: uppercase;
    letter-spacing: ${spacing.letterSpacing.medium}px;
    margin: 0;
  }

  h4 {
    font-size: ${typography.size.s1}rem;
    font-weight: ${typography.weight.medium};
    text-transform: uppercase;
    letter-spacing: ${spacing.letterSpacing.medium}px;
    margin: 0;
    margin-bottom: 6px;
  }
`

const FooterLogoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  /* removes centered div from covering sibling elements */
  pointer-events: none;
`

const FooterLogo = styled(Link)`
  color: ${color.black};
  font-weight: ${typography.weight.medium};
  font-size: ${typography.size.s1}rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: ${spacing.letterSpacing.medium}px;
  margin: 0;

  /* adds back pointer events to links */
  pointer-events: all;
`

export { Wrapper, FooterGroup, FooterLogoContainer, FooterLogo }
