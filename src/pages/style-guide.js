import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { filterPaths, kebabToTitleCase } from "../helpers"

export default function StyleGuidePage({ data }) {
  const { allSitePage } = data
  const { distinct } = allSitePage
  const paths = filterPaths(distinct, "style-guide")

  return (
    <Layout>
      <Seo title="Style Guide" />
      <h1>Style Guide</h1>
      <p>these are good things we have done, please look.</p>
      <ul>
        <li>
          <Link to="/colors">Color Palette</Link>
        </li>
        {paths.map(path => {
          return (
            <li key={path}>
              <Link key={path} to={`/style-guide/${path}`}>
                {kebabToTitleCase(path)}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const navQuery = graphql`
  query StyleGuideQuery {
    allSitePage {
      distinct(field: path)
    }
  }
`
