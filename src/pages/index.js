import * as React from "react"
import Layout from "../components/layout/Layout"
import "./index.scss"

const IndexPage = () => {
  return (
    <div className="app">
      <Layout>
        Home
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
