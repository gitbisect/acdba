import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/Image/image"
import SEO from "../components/SEO/seo"

// import Menu from '../components/Menu'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <h1>Hello AWS Community</h1>
    <p>Welcome to the 2019 ACD Bay Area.</p>
    <p>Let's build something great!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
