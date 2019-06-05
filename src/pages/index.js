import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/home"
import imgOne from "../images/d.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage image={imgOne} />
  </Layout>
)

export default IndexPage
