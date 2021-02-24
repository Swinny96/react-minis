import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Projects from "../components/Projects/Projects"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Projects />
    </Layout>
  )
}

export default IndexPage
