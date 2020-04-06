import React from "react"
import styled from "styled-components"
import { Content } from "../components/Layout/index"
import SEO from "../components/seo"
import { Heading, Posts, Sidebar } from "../components/IndexPage/"

const Feed = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 80px;
  margin-bottom: 96px;
`

const IndexPage = () => (
  <Content>
    <SEO title="Home" />
    <Heading />
    <Feed>
      <Posts />
      <Sidebar />
    </Feed>
  </Content>
)

export default IndexPage
