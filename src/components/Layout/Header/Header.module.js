import styled from "styled-components"
import { Link } from "gatsby"
import { FiSearch } from "react-icons/fi"
import { color, typography } from "../../../constants/styles"

const Wrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid ${color.gray7};
  margin-bottom: 60px;
`

const Logo = styled(Link)`
  color: ${color.black};
  font-family: ${typography.family.displayBold};
  font-size: ${typography.size.m3}rem;
  font-weight: ${typography.weight.bold};
  text-decoration: none;
`

const SearchIcon = styled(FiSearch)`
  width: 20px;
  height: 20px;
  color: ${color.black};
  cursor: pointer;
`

const HeaderNav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  /* removes centered div from covering sibling elements */
  pointer-events: none;
`

const HeaderLinks = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${color.black};
  font-size: ${typography.size.s1}rem;
  font-weight: ${typography.weight.medium};
  letter-spacing: 0.5px;

  /* adds back pointer events to links */
  pointer-events: all;

  &:not(:last-child) {
    margin-right: 24px;
  }
`

export { Wrapper, Logo, SearchIcon, HeaderNav, HeaderLinks }
