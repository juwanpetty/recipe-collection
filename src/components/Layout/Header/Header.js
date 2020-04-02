import React from "react"
import {
  Wrapper,
  Logo,
  SearchIcon,
  HeaderNav,
  HeaderLinks,
} from "./Header.module"

export const Header = ({ siteTitle }) => (
  <Wrapper>
    <Logo>{siteTitle}</Logo>
    <HeaderNav>
      <HeaderLinks>The Latest</HeaderLinks>
      <HeaderLinks>Popular</HeaderLinks>
      <HeaderLinks>Staff Picks</HeaderLinks>
      <HeaderLinks>About Us</HeaderLinks>
      <HeaderLinks>Contact</HeaderLinks>
    </HeaderNav>
    <SearchIcon />
  </Wrapper>
)
