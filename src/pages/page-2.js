import React from "react"
import { Link } from "gatsby"

import { Content } from "../components/Layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Content>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Content>
)

export default SecondPage
