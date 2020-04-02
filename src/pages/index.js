import React from "react"
import { Link } from "gatsby"

import { Content } from "../components/Layout/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Content>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Content>
)

export default IndexPage
