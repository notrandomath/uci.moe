import * as React from "react"
import Layout from "../components/layout/Layout"
import "./about.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div className="about">
        <p>About</p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>