import React from "react"
import {
  Wrapper,
  FooterGroup,
  FooterLogoContainer,
  FooterLogo,
} from "./Footer.module"

export const Footer = ({ siteTitle }) => (
  <Wrapper>
    <FooterGroup>
      <h4>For any questions</h4>
      <a href="mailto:contact@example.com">contact@forks&knives.com</a>
    </FooterGroup>

    <FooterLogoContainer>
      <FooterLogo>{siteTitle}</FooterLogo>
    </FooterLogoContainer>

    <FooterGroup>
      <h4>Designed & developed by</h4>
      <a href="https://www.juwanpetty.com/">Juwan Petty</a>
    </FooterGroup>
  </Wrapper>
)
