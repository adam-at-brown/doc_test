import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function SecondPage({ data }) {
  const { allSitePage } = data
  const { distinct } = allSitePage
  const split = distinct.map(path => path.split("/"))
  const stylePaths = split.flatMap(path => path.some(el => el === "style-guide") ? path[path.length -2] : []).filter(name => name !== "style-guide");
  console.log(stylePaths)
  return (
  <Layout>
    <Seo title="Style Guide" />
    <h1>Style Guide</h1>
    <p>these are good things we have done, please look.</p>
    <ul>
      <li><Link to="/colors">Color Palette</Link></li>
      {stylePaths.map(path => {
        return <li><Link key={path} to={`/style-guide/${path}`}>{path}</Link></li>
      })}
    </ul>
  </Layout>
)}

export const navQuery = graphql`
  query MyQuery {
    allSitePage {
      distinct(field: path)
    }
  }
`
